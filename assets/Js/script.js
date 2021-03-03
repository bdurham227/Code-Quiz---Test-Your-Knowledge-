//var answers = ["array","boolean","string","object","javascript","functions","iterations"];
var quizQuestions = document.getElementById("quiz");
var quizEl = document.getElementById("quiz-el");
var timerEl = document.getElementById("timer");
var myTimer;


//quizQuestions = ["Quiz Question 1", "Quiz Question 2", "quiz question 3", "quiz question 4"];
var timerStart = 60;
var randomQuestion;

var quizQuestions = [
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


var startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    timerStart = 60;
    timerEl.textContent = timerStart;
    randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
    console.log(randomQuestion);
    myTimer = setInterval(alertTime, 1000);

    }
document.addEventListener("click", function(event){
    event.preventDefault();
    var correctAnswer = event.target;
    if (event.target == quizQuestions.answer){
        quizEl.textContent = quizQuestions.answer;
    } else {
        !correctAnswer;
    };

})
//timer function
function alertTime() {
    if (timerStart > 0) {
        timerStart--;
        ;
        return timerEl.textContent = timerStart;
    }
    clearInterval(myTimer);
}

