var highScore = document.getElementById("highScore");
var initialsContent = document.getElementById("initials-content");
var initialsInput = document.getElementById("initials");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

//var highscoresEl = document.getElementById("highscores-el");
//var highscoresLink = document.getElementById("highscores-link");

var totalScores = 
localStorage.getItem("score");
score = JSON.parse(score);


if (score !== null) {

    for (var i = 0; i < totalScores; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i] + " " + totalScores[i].score;
        highScore.appendChild(createLi);
    }
}
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});


function renderScore () {
    var initials = localStorage.getItem("initials");
    initialsContent.textContent = initials;
}
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value
    renderScore();
    if (initials == "") {
        window.alert("initials cannot be blank");
    } else {
        console.log(initials);
        window.alert("succesfully registerd your score!");
        
    }
    localStorage.setItem(score, JSON.stringify(initials));
    highscoresEl.innerText = initials;

})