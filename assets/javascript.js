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
var score = 0;
var totalTime = 70;
var count2 = 0;
var totalTimer;
startQuizButton.addEventListener("click", startQuizFunc);

//starting the quiz function 

function startQuizFunc() {


    startQuiz.style.display = "none";
    resultTotal.style.display="block";
    displayQuestion();
    totalTimer = setInterval(displayTotalTime, 1000);
    quizQues.style.display = "block";
    counter1.style.display="inline-block";
    highScoreBar.style.display="inline-block";
  

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

}

// ckecking the correct answer function 

function ckeckAnsewr(answer) {

    if (answer == questionArray[currentQuestion].rightAnswer) {
        score += 10;
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

    clearInterval(totalTime);
    showScore();
}

}

//showing final score
function showScore() {

    
    quizQues.style.display = "none";
    resultTotal.style.display="block";
    clearInterval(totalTimer);
    score = score + totalTime;
    result.textContent="your final score is "+score;
  
    return score;
    
}

//checking the highest score

function submitFunction(){
   

   var userInitial=document.getElementById("userName").value;
  //  console.log(userInitial);
   var  lastUserScore =score;
  //  console.log(lastUserScore);
  
  localStorage.setItem('highscore', lastUserScore);
  var scorefinal = localStorage.getItem('highscore');

  localStorage.setItem('initials', userInitial);
  var nameFinal = localStorage.getItem('initials');
  highScoreBar.innerHTML=scorefinal;

  
var Scorebar=document.createElement("div");
Scorebar.innerHTML= nameFinal+"------------"+scorefinal;
resultTotal.appendChild(Scorebar); 
}






