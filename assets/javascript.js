// defining the variables//
var startQuiz = document.getElementById("start");
var startQuizButton = document.getElementById("startQuiz");
var quizQues = document.getElementById("quiz");
var theQuestion = document.getElementById("question");
var firstAnswer = document.getElementById("A");
var secondAnswer = document.getElementById("B");
var thirdAnswer = document.getElementById("C");
var fourthAnswer = document.getElementById("D");
var rightAnswer = document.getElementById("answer");
var result = document.getElementById("resultContainer");
var timer = document.getElementById("timer");
var counter = document.getElementById("counter");
var counter1 = document.getElementById("counter1");

// the questions Array //
var questionArray = [{
    theQuestion: "Javascript is _________ language.",
    firstAnswer: "Scripting",
    secondAnswer: "Programing",
    thirdAnswer: "texting",
    fourthAnswer: "Application",
    rightAnswer: "A"
}, {
    theQuestion: "Inside which HTML element do we put the JavaScript?",
    firstAnswer: "<js>",
    secondAnswer: "<title>",
    thirdAnswer: "<script>",
    fourthAnswer: "<head>",
    rightAnswer: "C"
}, {
    theQuestion: " When a user views a page containing a JavaScript program, which machine actually executes the script?",
    firstAnswer: "The User's machine running a Web browser",
    secondAnswer: " The Web server",
    thirdAnswer: "A central machine deep within Netscape's corporate offices",
    fourthAnswer: "None of the above",
    rightAnswer: "A"
}, {
    theQuestion: " What are variables used for in JavaScript Programs?",
    firstAnswer: " Varying randomly",
    secondAnswer: "Storing numbers, dates, or other values",
    thirdAnswer: " Causing high-school algebra flashbacks",
    fourthAnswer: "None of the above",
    rightAnswer: "B"
}, {
    theQuestion: " Which of the following can't be done with client-side JavaScript?",
    firstAnswer: "Validating a form",
    secondAnswer: "Sending a form's contents by email",
    thirdAnswer: "Storing the form's contents to a database file on the server",
    fourthAnswer: "None of the above",
    rightAnswer: "C"
}


];


var lastQuestion = questionArray.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 10;
var score = 0;
var totalTime=50;
var count2=0;
var totalTimer;
startQuizButton.addEventListener("click", startQuizFunc);



//starting the quiz function 

function startQuizFunc() {

    startQuiz.style.display = "none";
    displayQuestion();
    displayCounter();
    displayResult();
    timer = setInterval(displayCounter, 1000);
    totalTimer=setInterval(displayTotalTime,1000);


    quizQues.style.display = "block";
    result.style.display = "block";

}
// display the question function

function displayQuestion() {


    var q = questionArray[currentQuestion];
    theQuestion.textContent = q.theQuestion;
    firstAnswer.textContent = q.firstAnswer;
    secondAnswer.textContent = q.secondAnswer;
    thirdAnswer.textContent = q.thirdAnswer;
    fourthAnswer.textContent = q.fourthAnswer;
}

//display the result 

function displayResult() {

    for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {


    }
}

// displaying the time for each question function

function displayCounter() {

    if (count <= questionTime) {
        counter.textContent = count;
        count++;
        
    }
    else if (currentQuestion < lastQuestion) {

        score = score;
        result.textContent =  "your score is still " + score;
        count = 0;
        currentQuestion++;
        displayQuestion();

    }
    else {

        clearInterval(timer);
        showScore();

    }
    




}

// total


function displayTotalTime()
{
    if(count2<totalTime){

        totalTime--;
        counter1.textContent=totalTime;
        
    }

}

// ckecking the correct answer function 

function ckeckAnsewr(answer) {

    if (answer == questionArray[currentQuestion].rightAnswer) {
        score += 10;
        rightAnswer.textContent="correct answer";
        result.textContent = "your score is " + score;
        count = 0;
    }
    else {

        score = score;
        result.textContent = "your score is still " + score;
        rightAnswer.textContent="Wrong answer";
        count = 0;
    }

    if (currentQuestion < lastQuestion) {

        currentQuestion++;
        displayQuestion();


    }
    else {

        clearInterval(timer);
        showScore();
    }

}

// showing final score

function showScore() {

    quizQues.style.display = "none";
    
clearInterval(totalTimer);
    if (totalTime > 30) {

        score += 20;
        result.textContent = "Well done you got extra points for finishing in less that 20 sec your final score is " + score;


    }
    else if (totalTime > 20) {

        score += 10;
        result.textContent = "Good job you got extra 10 points for finishing in less than 30 sec your final score is " + score;
    }
    else {
        score = score;
        result.textContent = "Good job your total score is " + score;

    }

}


