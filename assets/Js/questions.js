var scores = 0;
var currentQuestion = 0;


var timeRemaining = document.querySelector("#time-remaining");
var timer = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions-el");
var quizContainer = document.querySelector("#quiz-container");


var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var quizUl = document.createElement("ul");



timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            timeRemaining.textContent = "Time: " + secondsLeft;
            
    if (secondsLeft <= 0){
        clearInterval(holdInterval);
        finished();
        timeRemaining.textContent = "time is up!";
    }
    }, 1000);
    }
    buildQuiz(currentQuestion);
});

function buildQuiz(currentQuestion) {
    questionsEl.innerHTML = "";
    quizUl.innerHTML = "";
for (var i = 0; i < quizQuestions; i++) {
    var userQuestion = quizQuestions[currentQuestion].title;
    var userChoice = quizQuestions[currentQuestion].choices;
    questionsEl.textContent = userQuestion;
}
userChoice.forEach(function (newItem) {
    quizList = document.createElement("li");
    quizList.textContent = newItem;
    questionsEl.appendChild(quizUl);
    quizUl.appendChild(quizList);
    quizList.addEventListener("click",compare());
})

}

function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var quizDiv = document.createElement("div");
        quizDiv.setAttribute("id", "quizDiv");
    if(element.textContent == quizQuestions[currentQuestion].answer) {
    score++;
    quizDiv.textContent = "Correct! The answer is " + quizQuestions[currentQuestion].answer;
    } else {
        secondsLeft = secondsLeft - penalty;
        quizDiv.textContent = "Incorrect! The answer is " + quizQuestions[currentQuestion].answer;
    }
    currentQuestion++;
}

if (currentQuestion >= quizQuestions.length) {
    finished();
    quizDiv.textContent = "The quiz is finished! " + " " + score + "/" + quizQuestions.length + " correct!";
} else {
    buildQuiz(currentQuestion);
    questionsEl.appendChild(quizDiv);
}
}
function startQuiz () {
    currentQuestion = 0;
    questionEl.innerHTML = "";
    quizUl.innerHTML = "";
for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[currentQuestion].title;
    var userChoice = questions[currentQuestion].choices;
    questionEl.textContent = userQuestion;
}
userChoice.forEach(function (newItem) {
    quizList = document.createElement("li");
    quizList.textContent = newItem;
    questionEl.appendChild(quizUl);
    quizUl.appendChild(quizList);
    quizList.addEventListener("click", compare);
})

}

function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var quizDiv = document.createElement("div");
        quizDiv.setAttribute("id", "quizDiv");
    if (element.textContent == questions[currentQuestion].answer) {
        score++;
        quizDiv.textContent = "correct! the answer is " + questions[currentQuestion].answer;
        
    } else {
        timeLeft = timeLeft - penalty;
        quizDiv.textContent = "incorrect! the answer is " + questions[currentQuestion].answer;
    }
    currentQuestion++;
    }
if (currentQuestion >= questions.length) {
    finished();
    quizDiv.textContent = "you final your score is!";
} else {
    startQuiz(currentQuestion);
    questionEl.appendChild(quizDiv);
}
}