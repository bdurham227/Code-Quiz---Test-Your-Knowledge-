//var that holds our questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 3
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        answer: 3
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choice1: "Javascript",
        choice2: "terminal / bash",
        choice3: "for loops",
        choice4:  "console log",
        answer: 4
    },

];
var container = document.querySelector(".container");
var timer = document.querySelector("#start");
var question = document.getElementById("questions");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timerEl = document.querySelector("#time-el");
//var answerIndex = Array.from("#choice-text");

var currentQuestion = [];
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var timeLeft = 60;
var timerInterval = 0;
var penalty = 10;

const totalQuestions = 4;




timer.addEventListener("click", function () {
    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        if (timeLeft === 0) {
            timerEl.textContent = " time is up!";
            clearInterval(timerInterval);
            startGame();
        }
        }
    }, 1000);
})

function startGame () {
    score = 0;
    questionCounter++;
    availableQuestions = [...questions];
    getNextQuestion();
};



function getNextQuestion() {
    //if (availableQuestions.length == 0 || quesstionCounter >= totalQuestions) {
        
    //}
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.title;
    
choices.forEach(function (choice){
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    
});
availableQuestions.splice(questionIndex, 1);
}

choices.forEach(function (choice){
    choice.addEventListener("click", function(event){
        var userChoice = event.target;
        var userAnswer = userChoice.dataset["number"];

    if (userChoice.matches("p")) {
        var answerDiv = document.createElement("div");
        answerDiv.setAttribute("id","answerDiv");
    }

    //var correctAnswer = "incorrect";
    if (userAnswer == currentQuestion.answer) {
        score++;
        answerDiv.innerHTML = "Correct! The answer is " + currentQuestion.answer;
    } else {
        timeLeft = timeLeft - penalty;
        answerDiv.textContent = "Incorrect! The answer is " + currentQuestion.answer;
    }
     questionCounter++;  
        getNextQuestion();

    })

})




//function compare(event) {
   // var element = event.target;

    //if (element.textContent == currentQuestion[questions].answer) {
        //score++;
        //window.alert("Correct! the answer is " + currentQuestion[questions].answer);
    //}

//}


startGame();

//we need the startGame function to access our questions and display
//we need to define our getNextQuestion function. we need to use math.floor and math.random to generate
//random questions
//we need to be able to display these random questions
//we need to increment our question counter
//we need to create a new variable and set its value to the random math
//display that content to the html