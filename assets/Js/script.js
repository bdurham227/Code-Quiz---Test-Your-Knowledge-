//var that holds our questions
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
//variables holding quiz scores/current question
var score = 0;
var currentQuestion = 0;

//variables for DOM
var quizContainer = document.querySelector("#quiz-container");
//where questions will be displayed
var questionsEl = document.querySelector("#questions-el");
//create a new ul for the html here
var quizUL = document.createElement("ul");

var timer = document.querySelector("timer");



//timer variables
var timerLeft = 60;
var timeEl = document.querySelector("#timer-remaining");
var penalty = 10;
var timerInterval = 0;

timer.addEventListener("click", function () {
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            timerLeft--;
            timeEl.textContent = "Time: " + timerLeft;
            
    if (timerLeft <= 0){
        clearInterval(timerInterval);
        finished();
        timeEl.textContent = "time is up!";
    }
    }, 1000);
    }
    buildQuiz(currentQuestion);
});



//now we need to declare and create our buildQuiz function
function buildQuiz() {
        questionsEl.innerHTML = "";
        quizUL.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[currentQuestion].title;
        var userChoice = questions[currentQuestion].choices;
        questionsEl.innerHTML = userQuestion;
    }
    userChoice.forEach(newItem) {
        var quizList = document.createElement("li");
        quizList.textContent = newItem;
        questionsEl.appendChild(quizUL);
        quizUL.appendChild(quizList);
        quizList.addEventListener("click", compare());
    }

}










//we need an event listener on a button to start the quiz--probably need an anonymous function inside
//document.addEventListener("click", startQuiz);


//we need a start game function + need a timer function with setInterval and clearInterval


//var timerInterval = setInterval(function () {
   // if (timerLeft > 1) {
      //  timeEl.textContent = timerLeft + " seconds remaining";
        //console.log(timerLeft);
   // } //else if ()
    //clearInterval(timerInterval);
//})

















//need a function to build the quiz with if/else statements most likely

// need methods to display the quiz onto the DOM most likely using append/append child
//textcontent and innerhtml










//startQuiz();