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
var resultTotal = document.getElementById("resultContainer");
var result = document.getElementById("result");
var timer = document.getElementById("timer");
var SubmitBtn = document.getElementById("submit");
var counter1 = document.getElementById("counter1");
var highScoreBar = document.getElementById("High-Score");
var tryAgainBtn=document.getElementById("again");



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


var highscore =0;
var userScore=0;
var lastQuestion = questionArray.length - 1;
var currentQuestion = 0;
var totalTime = 75;
var count2 = 0;
var totalTimer;
startQuizButton.addEventListener("click", startQuizFunc);
SubmitBtn.addEventListener("click",submitFunction);
tryAgainBtn.addEventListener("click",startQuizFunc);



//starting the quiz function 

function startQuizFunc() {

    lastQuestion = questionArray.length - 1;
    currentQuestion = 0;
    totalTime = 75;
     count2 = 0;

    startQuiz.style.display = "none";
    // resultTotal.style.display = "block";
    displayQuestion();
    totalTimer = setInterval(displayTotalTime, 1000);
    quizQues.style.display = "block";
    counter1.style.display = "inline-block";
    highScoreBar.style.display = "inline-block";




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




function displayTotalTime() {
    if (count2 < totalTime) {

        totalTime--;
        counter1.textContent = totalTime;

    }

    else if (count2 == 0) {


        clearInterval(totalTimer);
        showScore();
    }
    return totalTime;
}

// ckecking the correct answer function 

function ckeckAnsewr(answer) {

    if (answer == questionArray[currentQuestion].rightAnswer) {

        rightAnswer.textContent = "correct answer";

    }
    else {
        totalTime = totalTime - 10;
        rightAnswer.textContent = "Wrong answer!";


    }

    if (currentQuestion < lastQuestion) {

        currentQuestion++;
        displayQuestion();


    }
    else {


        clearInterval(totalTimer);
        counter1.textContent = totalTime;
        showScore();
    }

}

//showing final score
function showScore() {


    quizQues.style.display = "none";
    resultTotal.style.display = "block";
    clearInterval(totalTimer);
    userScore = totalTime;
    highscore = totalTime;

    result.textContent = "your final score is " + userScore;
  

}


function submitFunction() {

    var userInitial = document.getElementById("userName").value;
    var userInfo = {

        "name": userInitial,
        "score": userScore,

    }

   localStorage.setItem("highscore", highscore);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    var userInformation = JSON.parse(localStorage.getItem("userInfo"));
    var Scorebar = document.createElement("div");
    Scorebar.innerHTML = userInformation.name + "---------------" + userInformation.score;
    resultTotal.appendChild(Scorebar);

    var HighestScore = localStorage.getItem("highscore");
    if (userInformation.score >= HighestScore) {
        localStorage.setItem("highscore", userInformation.score);
        highScoreBar.innerHTML = "Highest score is:  " + userInformation.score;
    }
    else{

       highScoreBar.innerHTML = "Highest score is:  " + HighestScore;

    }


}







