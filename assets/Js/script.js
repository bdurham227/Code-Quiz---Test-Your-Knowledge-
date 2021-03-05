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
var questionElement = document.getElementById("questions");
var answerChoices = Array.from(document.getElementsByClassName("choice-text"));
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
const scoreBonus = 10;




timer.addEventListener("click", function () {
    timerInterval = setInterval(function () {
        if (timeLeft > 1) {
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
    renderQuestions();
    //console.log(availableQuestions);
};



function renderQuestions() {
if (availableQuestions.length == 0 || questionElement >= totalQuestions) {
return window.location.assign("/end.html");
}
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.title;

answerChoices.forEach(function (choice) {
const number = choice.dataset["number"];
   choice.innerText = currentQuestion["choice" + number];
   //console.log(number);
});
availableQuestions.splice(questionIndex, 1);
};

answerChoices.forEach(function (choice) {
    choice.addEventListener("click", function(event){
        
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        renderQuestions();
    })
})
    






//answerChoices.forEach(function (choice){
   // number.addEventListener("click", function(event){
       // var selectedChoice = event.target;
       // var selectedAnswer = selectedChoice.dataset[choice];
   // })
//})









startGame();
