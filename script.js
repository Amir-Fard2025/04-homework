// //define the main variables using html elements
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerLi = document.querySelector(".answers");
var timeleftEl = document.querySelector("#timeLeft");
var score = document.querySelector("#score");
var curMessage = document.querySelector("#message");

var rgtAnswer = ""

// console.log(questionEl);
// console.log(answerLi);
console.log(curMessage);
window.alert("after pressing ok please press start button to start the code quiz");
// //define questions and answers as objects
var dataBase = [

    pack1 = {
        q:"javaScript",
        opt:["javaScript","jamaScript","javaSqript","javaScrimt" ],
        ans:"1",
    },
    pack2 = {
        q:"html",
        opt:["ltmh","mlht","html","tmlh" ],
        ans:"3",
    },
    pack3 = {
        q:"css",
        opt:["cbs","cds","css","ccst" ],
        ans:"3",
    }
]

function displayQuestion(qs, i){

    // //display question

    var qst = questionEl.textContent = (qs[i].q);
    return qst;
}
// dspQs(dataBase,0);

function displayAnswer(ans, i){
    // //display answers
    option = [];
    var opt1 = answerLi.children[0].textContent = (ans[i].opt[0]);
    option.push(opt1);
    var opt2 = answerLi.children[1].textContent = (ans[i].opt[1]);
    option.push(opt2);
    var opt3 = answerLi.children[2].textContent = (ans[i].opt[2]);
    option.push(opt3);
    var opt4 = answerLi.children[3].textContent = (ans[i].opt[3]);
    option.push(opt4);
    
    return option;
}
// dspAns(dataBase,0);

function takeRight(rgt, i){
    // //take right answer
    var rgtAnswer = (rgt[i].ans);
    return rgtAnswer;
}
// console.log(tkRight(dataBase,0));

function showQuestion(num){
    displayQuestion(dataBase,num)
    displayAnswer(dataBase,num)
    

}
// //change question-answers
var curQ = 0
var num = 3;
showQuestion(curQ);
function selectOptions(){

    var checker = true;
    answerLi.addEventListener("click", function(event){
        event.preventDefault();
        var selectedChoice = event.target.dataset.option;
        var rightAnswer = takeRight(dataBase,curQ);
        // console.log(selectedChoice);
        // console.log(rightAnswer);
        if (selectedChoice === rightAnswer){
            
            curMessage.textContent = "It was correct";   
            
            score.textContent = "score: " + num;
            var checker = true;
        }else{
            
            curMessage.textContent = "it was wrong";
            num = num-1;
            score.textContent = "score: " + num;
            var checker = false;
        }
        curQ = curQ+1;
        if(curQ >= dataBase.length){
            curMessage.textContent = `your final score is: ${num} out of ${dataBase.length}` ;
        }else{
        }
        showQuestion(curQ);
        return checker;
        

    });
    return checker;
}
// ______________________________


var duration = 10;
function startTimer() {

    selectOptions();
    // start the timer
    
    var count = 0;
    // document.addEventListener("keypress", keypressHandler);
    timer = setInterval(function () {
      count++;
      var remainingSeconds = duration - count;
      // show the time left
      timeleftEl.textContent = remainingSeconds + " seconds";
    //   if (checker === false){
    //       remainingSeconds = remainingSeconds - 3
    //   }
      if (count >= duration) {
        // Time is up
        finishTheGame();
      }
    }, 1000);
  }
  function finishTheGame(){
      clearInterval(timer);
      curMessage.textContent = "The game is over now";
  }
startBtn.addEventListener("click", startTimer);

    // localStorage.setItem("score", score);
// num = 0
// if (num <= dataBase.length){
//     answerLi.addEventListener("click", function(event){
    
//     event.preventDefault();
//     var selectedChoice = event.target.dataset.option;
//     // console.log(selectedChoice);
//     // localStorage.setItem("questionEl", JSON.stringify(dspQs(dataBase,num)));
//     // localStorage.setItem("answerLi", JSON.stringify(dspAns(dataBase,num)));
//     // localStorage.setItem("rgtAnswer",JSON.stringify(tkRight(dataBase,num)));
//     // var qst = JSON.parse(localStorage.getItem("questionEl"));
//     // var opt = JSON.parse(localStorage.getItem("answerLi"));
//     // var rgtAns = JSON.parse(localStorage.getItem("rgtAnswer"));
//     displayQuestion(dataBase,num)
//     displayAnswer(dataBase,num)
//     var rgtAns = takeRight(dataBase,num)
//     num = num+1

//     score = 0

//     if (selectedChoice === rgtAns){
//         var msg = "it was right";
//         console.log(msg);
//         // localStorage.setItem("message", msg );
//         score = score + 1
//         // localStorage.setItem("score", score);
//     }
        
//     // }else{
//     //     var wrn = "it was a mistake, you lose points"
//     //     localStorage.setItem("message", wrn);
//     //     score = score -1
//     //     localStorage.setItem("score",score)

//     //     }

    

//     // if (selectedChoice = )
        
//     // console.log(qst);
//     // console.log(opt);
//     console.log(typeof(rgtAns));
//     console.log(typeof(selectedChoice));
    
// })
// }
