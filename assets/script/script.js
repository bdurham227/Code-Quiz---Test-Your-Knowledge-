var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];

var questionsEl = document.getElementById("questions-el");
var questionCounter = 0;
var timeLeft = 60;
var timeElement = document.getElementById("time-el");
var timeInterval = 0;
var startBtn = document.getElementById("start");
var container = document.getElementById("container");
var currentQuestion;
var currentAnswer;
var userChoices = questions.choices;
var score = 0;
var totalQuestions = questions.length;
var initialsContent = document.getElementById("initials-content");
var initialsInput = document.getElementById("initials");

var highScore = document.querySelector("#highScore");
//var clear = document.querySelector("#clear");
//var goBack = document.querySelector("#goBack");


var startEl = document.getElementById("starting-el");
var choicesEl = document.getElementById("choices-el");
var highscoresEl = document.getElementById("highscores-el");
var highscoresLink = document.getElementById("highscores-link");
var submitBtn = document.getElementById("submit-btn");

var penalty = 10;
var questionWrong = 0;
var acceptedAnswer = 0;
var done = 0;
var btn1 = document.querySelector('#button1');
btn1.setAttribute("style", "display:none;");
var btn2 = document.querySelector('#button2');
btn2.setAttribute("style", "display:none;");
var btn3 = document.querySelector('#button3');
btn3.setAttribute("style", "display:none;");
var btn4 = document.querySelector('#button4');
btn4.setAttribute("style", "display:none;");
var start = 0;





startBtn.addEventListener('click', function () {
    timeInterval = setInterval(function () {
        timeLeft--;
    if (timeLeft > 1) {
        timeElement.textContent = timeLeft + " seconds remaining";
    }
    if (questionWrong == 1)
    {
    	timeLeft = timeLeft - penalty;
    	timeElement.textContent = timeLeft + " seconds remaining";
      //wait until you get another quesiton wrong.
    	questionWrong = 0;
    }
    if (timeLeft == 0) {
        timeElement.textContent = "time is up";
    }

    clearInterval();
    },1000);
    //debugging if statement.
    if(start == 0)
    {
        startQuiz();
        start = 1;
    }

})

function startQuiz () {


    startBtn.setAttribute("style", "display:none;");
    initialsContent.setAttribute("style", "display:none;");
    startEl.setAttribute("style","display:none;");
    choicesEl.setAttribute("style", "display:block;");
    questionsEl.setAttribute("style","display:block;");
    //highscoresLink.setAttribute("style","display:none;");
    choicesEl.innerHTML = "";
    //update buttons loads buttons and sets events listenters.
		updateButtons();
    //generate a new question.
    newQuestion();
}

function newQuestion() {
		//if question length == 0 (no more question) 
		if(questions.length == 0)
    {
    	console.log("quiz is done");
      endQuiz();
			
    }
    else
    {
    console.log("question length = ", questions.length);
		questionCounter = questionCounter + 1;
    //grab a random question
    const questionIndex = Math.floor(Math.random() * (questions.length-1));
    console.log(questionIndex);
    //set the question to the current question
    currentQuestion = questions[questionIndex];
    //populate the title/choices/answer
    questionsEl.innerText = currentQuestion["title"];
		
    userChoices = currentQuestion["choices"];
    currentAnswer = currentQuestion["answer"]
    //remove the question.
    questions.splice(questionIndex, 1);
    acceptedAnswer = 0;
    }
    displayChoices();
}
function updateButtons()
{
//display buttons for the quiz as well as attach event listeners to them.
    btn1.setAttribute("style", "display:block;");  
    btn2.setAttribute("style", "display:block;"); 
    btn3.setAttribute("style", "display:block;"); 
    btn4.setAttribute("style", "display:block;");  
     button1.addEventListener("click", function(event){
          var selectedChoice = event.target;

        var selectedAnswer = userChoices[0];

        answer(selectedAnswer);

    })
    button2.addEventListener("click", function(event){
          var selectedChoice = event.target;

        var selectedAnswer = userChoices[1];

        answer(selectedAnswer);
    })
        button3.addEventListener("click", function(event){
          var selectedChoice = event.target;

        var selectedAnswer = userChoices[2];

        answer(selectedAnswer);
    })
        button4.addEventListener("click", function(event){
          var selectedChoice = event.target;

        var selectedAnswer = userChoices[3];

        answer(selectedAnswer);
    })

}


function displayChoices() {

//updates questions with new answers.

    document.querySelector('#button1').innerText = userChoices[0];
 
    document.querySelector('#button2').innerText = userChoices[1];
 
    document.querySelector('#button3').innerText = userChoices[2];

    document.querySelector('#button4').innerText = userChoices[3];


    }
    //function when you click button.
 function answer(userAnswer) 
 {
 //correct answer
 if(userAnswer == currentAnswer)
 {
      score = score + 10;
 }
 //question wrong.
 else
 {
 
  timeElement.textContent = timeLeft + " seconds remaining";
  questionWrong = 1;
 }
 //after answer is logged, ask another question.
	console.log("counter = ", questionCounter);
  displayChoices();
  newQuestion();

 }

function endQuiz()
{
//end quiz function. hide buttons. set score. stop timer.
btn1.setAttribute("style", "display:none;");  
  btn2.setAttribute("style", "display:none;");  
  btn3.setAttribute("style", "display:none;");  
  btn4.setAttribute("style", "display:none;");  
  initialsContent.setAttribute("style", "display:block; text-align:center;");
  questionsEl.setAttribute("style", "text-align:center;");
  questionsEl.innerText = "Your score is! \n " + score;
  timeElement.textContent ="";
  clearInterval(timeInterval);
  
  

}
function renderScore () {
    var initials = localStorage.getItem("initials");
    //initialsContent.textContent = initials;
    initials = JSON.parse(initials);
}

////var totalScores = 
//localStorage.getItem("initials");
//initials = JSON.parse(initials);




submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value
    renderScore();
    if (initials == null) {
        window.alert("please enter your initials");
    } else {
        console.log(initials);
        window.alert("succesfully registerd your score!");
        //localStorage.setItem(score, JSON.stringify(initials));
    }
    localStorage.setItem(score, JSON.stringify(initials));
    
    highscoresEl.innerText = initials;
})



