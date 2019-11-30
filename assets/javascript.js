
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
var tryAgainBtn = document.getElementById("again");
var wrongSound = document.getElementById("myAudio");
var rightSound = document.getElementById("myAudio2");
var userScore = 0;
var lastQuestion = questionArray.length - 1;
var currentQuestion = 0;
var totalTime = 75;
var count2 = 0;
var totalTimer;
startQuizButton.addEventListener("click", startQuizFunc);
SubmitBtn.addEventListener("click", submitFunction);
tryAgainBtn.addEventListener("click", startQuizFunc);

function startQuizFunc() {
    event.preventDefault();
    lastQuestion = questionArray.length - 1;
    currentQuestion = 0;
    totalTime = 75;
    count2 = 0;
    startQuiz.style.display = "none";
    displayQuestion();
    totalTimer = setInterval(displayTotalTime, 1000);
    quizQues.style.display = "block";
    counter1.style.display = "inline-block";
    highScoreBar.style.display = "inline-block";
    rightAnswer.textContent = "";
}
// display the question function
function displayQuestion() {
    resultTotal.style.display = "none";
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
    } else if (count2 == 0) {
        clearInterval(totalTimer);
        showScore();
    }
    return totalTime;
}
// ckecking the correct answer function 
function ckeckAnsewr(answer) {
    if (answer == questionArray[currentQuestion].rightAnswer) {
        rightSound.play();
        rightAnswer.textContent = "correct answer";
    } else {
        totalTime = totalTime - 10;
        wrongSound.play();
        rightAnswer.textContent = "Wrong answer!";
    }
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
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
    result.textContent = "your final score is " + userScore;
}

function savinguserInformation() {
    const lsUserInfoKey = "userInfo";
    var userInitial = document.getElementById("userName").value;
    var userInfo = {
        score: userScore,
        name: userInitial,
    };
    var userInfoArr = localStorage.getItem(lsUserInfoKey) ? JSON.parse(localStorage.getItem(lsUserInfoKey)) : [];
    userInfoArr.push(userInfo);
    localStorage.removeItem(lsUserInfoKey);
    localStorage.setItem(lsUserInfoKey, JSON.stringify(userInfoArr));
    var scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerHTML = "";
    for (var i = 0; i < userInfoArr.length; i++) {
        scoreBoard.innerHTML += userInfoArr[i].name + "---------------" + userInfoArr[i].score + "<br />";
    }



}

function savingHighScores() {

    const lsHighScoreKey = "highscore";
    var highscoreArray = localStorage.getItem(lsHighScoreKey) ? JSON.parse(localStorage.getItem(lsHighScoreKey)) : [];
    localStorage.removeItem(lsHighScoreKey);
    highscoreArray.push(userScore);
    localStorage.setItem(lsHighScoreKey, JSON.stringify(highscoreArray));
    function numberSort(a, b) {
        return a - b;
    }
    highscoreArray.sort(numberSort);
    var maxScore = highscoreArray[highscoreArray.length - 1];
    highScoreBar.innerHTML = "highest score is {" + maxScore + "}";

}

function submitFunction() {

    savinguserInformation();
    savingHighScores();
}







