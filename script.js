// //define the main variables using html elements
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerLi = document.querySelector(".answers");
var counter = document.querySelector("#timeLeft");
var message = document.querySelector("#message");
var score = document.querySelector(".score");
var rgtAnswer = ""

// console.log(questionEl);
// console.log(answerLi);



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
showQuestion(curQ);
answerLi.addEventListener("click", function(event){
    event.preventDefault();
    var selectedChoice = event.target.dataset.option;
    var rgtAns = takeRight(dataBase,curQ);
    console.log(selectedChoice);
    console.log(rgtAns);
    curQ = curQ+1;
    showQuestion(curQ);
});
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
