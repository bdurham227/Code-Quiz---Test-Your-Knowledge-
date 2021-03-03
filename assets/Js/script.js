//here we are creating our questions array. inside we have object properties of title choices and answer
//we can access them using dot or bracket notation and display them using .innerHTML

var quizQuestions;

// Declared variables
//here we are creating two variables one called score with a value of 0 and one called questionIndex with an assigned value of 0

var scores = 0;
var currentQuestion = 0;

// Start working code 
// Declared variables
//i think itd be best to move the current html file somewhere else and keep it relatively blank and useable to add elements with javascript
//for our Dom selectors
//we create 4 variables
//the first variable is called currentTime and its value is from a dom query selector. it is getting its value from selecting an html id with a value of currentTime
//for mine we will call that time-remaining. so it would look like var timeRemaining = document.querySelector("#time-remaining");

//next we have a new variable being created called timer with an assigned value of #startTime.
//for mine it will loook like var timer = document.querySelector("#timer");

//next we have a variable called questionsDiv
//mine will be called var questionEl = document.querySelector("#question-el");

//lastly a variable called wrapper is created
// mine will be var quizContainer = document.querySelector("#quiz-container")

var timeRemaining = document.querySelector("#time-remaining");
var timer = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions-el");
var quizContainer = document.querySelector("#quiz-container");

//here we create a new variable called secondsLeft with a value of 76
//mine will be: var secondsLeft = 60;
//next a variable called holdInterval is created. presumably this will have something to do with our setInterval function at somepoint
//next in order to deduct 10 seconds from the timer if the user answers a question incorrectly 
//to achieve this we first create a variable called penalty with a value of 10
//next a ul is created in Javascript using the document.createElement("ul");
//mine wil be var quizUl = document.createElement("ul");

var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var quizUl = document.createElement("ul");

//to get things event remotely close to running we need an eventlistener to trigger a function
//so we grab our created variable timer and add an eventlistener to it and sets it to listen for a click. in the same parenthesis we declare an anonymous function and run an if statement inside
//the if statement is going to check something
//this if statement is going to check that if our variable holdInterval is strictly = to 0 then that variable holdInterval will now have a value set to setInterval(function ())
//after that we decrement the secondsLeft variable
//afterwards in order to display the current time or time remaining to the user we have to use .textContent. dont forget we need to add a message to the text content

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            timeRemaining.textContent = "Time: " + secondsLeft;
            //we now run a second If statement inside our anonymous function here bc we need to check if the secondsLeft is less than or = to 0 bc if it is
            //we need to run the counter part of the setInterval function which is clearInterval
            //afterwards a function not yet defined called allDone (can be anything) is called.
            //after we do that we have to let the user know that the time is up
            //think of how we used textcontent before 
    if (secondsLeft <= 0){
        clearInterval(holdInterval);
        finished();
        timeRemaining.textContent = "time is up!";
    }
    }, 1000);
    }
    buildQuiz(currentQuestion);
});
//here we are creating that last function which jsut invoked at the end of the eventlistener
//we are passing our questionSelection variable as a paramater through this function
//in order to get our users to see our quiz content we need to display in on the innerhtml
//additionally we need to display out ul created to the innerhtml
//next we create and run a for loop where i is less than the length of our quizQuestions. if it is we are going to increment i
//inside the for loop we need something to happen
//so we create two new variables inside.
//the first variable is going have a value of our quizQuestion[questionSelection].title; here we are setting our new variables value to the title of the question
//to do this we have to access our quizSelection object and get its title property
//in our second variable that we are going to create we need to set its value to our quizQuestions then we need to access our questionSelection and the choices property
//we need our users to see this property so do this we need to set textcontent to our questionsEl equal to our first variable
//lastly inside of our function we set our second variable we created in the for loop and use the method forEach(). The forEach() method calls a function for each element inside of the array, in order
//we pass the value newItem thru this new function
//next we create a new variable and set its value to document.createelement. the element we want to create is a list. since we are using the forEach method on the userchoice variable from the for loop
//we know that the forEAch method will create a function for each of the elements in the array
//we want the textcontent of our newest variable to be seen but we also want to set its value to our newItem parameter
//we want to join our questionsEl to our quizUl that we created when we were first declaring our variables.
//to do this we have to use teh appendchild method
//to get our new variable whose value was set to the new li we jsut created above we need to append that to our ul
//lastly we want our variable created inside the forEach function to have an eventlistener that compares

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

//above we finished our forEach function by adding an event listener to our new li and then added teh compare method
//so now we need to create and declare a new function called compare
//we pass event thru the compare functions parameters
// to get more information from our event we add a .target to it and then assign event.target to the value of a new variable we create
//.target tells you where or what triggered teh event
//next we create an if statement that runs our new declared variable
//we used the .matches() method bc its it confirm it what we pass thru it has a matching class name 
//inside our if statement we create a new variable and assigns it value to a new div that get created. use teh dom create element

//we are doing this bc we want a new place on our html for our compare functon ti display content
//next we are going to use setAttribute('id' 'variable name') to give it some attributes
//we use another if statement and pass the variable with the value of event.target with .textcontent is == to our quizQuestions[questionSelection].answer

//essentailly this new is a place for us to display the correct answer we get the correct by using .answer aka accessing our quizQuestion array

//if the target element is == to the correct answer we are going to increment our score variable;

//then display to the user that the content is = "correct"
//if the answer is inccorect in the else portion of the if / else statement
//we will subtract from our secondsLeft variable = secondsLEft - penalty;
//create a space using .textcontent to display that
//after the brackets increment questionSelection bc questionSelection is used to determine which question the user is on

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
//we need a way to determine where we are at in teh quiz
//we can achieve this by creating an if/else statement
//we want to know if the currentQuestion is greater than or = to our quizQuestions.length bc that holds how many questions there are
//if it is greater than or = to than we a run a function- name it whatever you want we havent defined it yet [ finsihed()]
//then in our quizDiv that we created above set the textcontent and a message
//else
//we want to use our function buildQuiz(currentQuestion)
//then we want to append our quizDiv to our questionsEl
if (currentQuestion >= quizQuestions.length) {
    finished();
    quizDiv.textContent = "The quiz is finished! " + " " + score + "/" + quizQuestions.length + " correct!";
} else {
    buildQuiz(currentQuestion);
    questionsEl.appendChild(quizDiv);
}
