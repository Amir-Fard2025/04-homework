// //define the main variables using html elements
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerLi = document.querySelector(".answers");
var timeleftEl = document.getElementById("timeLeft");
var score = document.getElementById("score");
var curMessage = document.getElementById("message");
var startMessage = document.getElementById("startMessage");
var mainQuestionForm = document.getElementById("questionDiv");
var submitBox = document.getElementById("submitBox");
var submitButton = document.getElementById("submitButton");

var rgtAnswer = "";

window.alert(
  "after pressing ok please press start button to start the code quiz"
);
// //define questions and answers as objects
var dataBase = [
  (pack1 = {
    q: "Which element in html file links the *.js to current html file?",
    opt: ["script", "link", "sourc", "path"],
    ans: "1",
  }),
  (pack2 = {
    q: "Which logical comparison is check if both the value and types of two variable are the same?",
    opt: ["==", "!=!", "===", "><!"],
    ans: "3",
  }),
  (pack3 = {
    q: "How do you define a function in java script?",
    opt: ["function({})", "func (){}", "function(){}", "(function){}"],
    ans: "3",
  }),
];

function displayQuestion(qs, i) {
  // //display question

  var qst = (questionEl.textContent = qs[i].q);
  return qst;
}
// dspQs(dataBase,0);

function displayAnswer(ans, i) {
  // //display answers
  option = [];
  var opt1 = (answerLi.children[0].textContent = ans[i].opt[0]);
  option.push(opt1);
  var opt2 = (answerLi.children[1].textContent = ans[i].opt[1]);
  option.push(opt2);
  var opt3 = (answerLi.children[2].textContent = ans[i].opt[2]);
  option.push(opt3);
  var opt4 = (answerLi.children[3].textContent = ans[i].opt[3]);
  option.push(opt4);

  return option;
}
// dspAns(dataBase,0);

function takeRight(rgt, i) {
  // //take right answer
  var rgtAnswer = rgt[i].ans;
  return rgtAnswer;
}
// console.log(tkRight(dataBase,0));

function showQuestion(num) {
  displayQuestion(dataBase, num);
  displayAnswer(dataBase, num);
}
// //change question-answers
var curQ = 0;
var num = 0;
showQuestion(curQ);
var checker = true;
function selectOptions() {
  answerLi.addEventListener("click", function (event) {
    event.preventDefault();

    var selectedChoice = event.target.dataset.option;
    var rightAnswer = takeRight(dataBase, curQ);
    // console.log(selectedChoice);
    // console.log(rightAnswer);
    if (selectedChoice === rightAnswer) {
      curMessage.textContent = "It was correct";
      num = num + 1;

      score.textContent = "score: " + num;
      checker = true;
    } else {
      curMessage.textContent = "it was wrong";
      num = num - 1;
      score.textContent = "score: " + num;
      checker = false;
    }
    curQ = curQ + 1;
    if (curQ < dataBase.length) {
      showQuestion(curQ);
    }

    if (curQ >= dataBase.length) {
      score.textContent = `your final score is: ${num} out of ${dataBase.length}`;
      finishTheGame();
    }
    // return num;
  });
  //   return num;
}
var duration = 10;
function startTimer() {
  mainQuestionForm.style.display = "block";
  startMessage.style.display = "none";
  // var minusCounter = selectOptions();
  // console.log(minusCounter);
  selectOptions();
  // console.log(a);
  // start the timer

  var count = 0;
  // document.addEventListener("keypress", keypressHandler);
  timer = setInterval(function () {
    count++;
    if (checker === false) {
      count = count + 3;
    }
    var remainingSeconds = duration - count;
    // show the time left
    if (remainingSeconds < 2) {
      timeleftEl.textContent = remainingSeconds + " second is remaining";
    } else {
      timeleftEl.textContent = remainingSeconds + " seconds are remianing";
    }

    if (remainingSeconds <= 0) {
      // Time is up
      finishTheGame();
    }
  }, 1000);
}
function finishTheGame() {
  // finish the game here
  if (curQ === 0) {
    score.textContent = `your final score is: ${0} out of ${dataBase.length}`;
  }
  clearInterval(timer);
  curMessage.textContent =
    "The game is over now please press submit button to submit your score";
  timeleftEl.textContent = "";
  score.textContent = `your final score is: ${num} out of ${dataBase.length}`;
}
function displayMessage(type, message) {
  submitBox.textContent = message;
  submitBox.setAttribute("class", type);
}
function renderLastScore() {
  // get the score in submitbox to render in storage
  var yourInitials = localStorage.getItem("submitBox");
  if (!yourInitials) {
    return;
  }
}
function submit() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  // submit the score here, set it in local storage
  mainQuestionForm.style.display = "none";
  startMessage.style.display = "none";
  startBtn.style.display = "none";
  submitBox.style.display = "block";
  submitButton.style.display = "block";
  var yourInitials = submitBox.value;
  var newScore = {
    [yourInitials]: num,
  };
  highScores.push(newScore);
  if (yourInitials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "submited successfully");
  }
  localStorage.setItem("highScores", JSON.stringify(highScores));
}
// run the code, press the start
startBtn.addEventListener("click", startTimer);
// submit your score, press the submit
submitButton.addEventListener("click", submit);
// control the visibility of question form, message, submitbox, and submit button before the code runs
mainQuestionForm.style.display = "none";
startMessage.style.display = "block";
submitBox.style.display = "none";
submitButton.style.display = "block";
