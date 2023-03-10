// Taking the required elements

let startBtn = document.querySelector(".startBtn button");
let infoBox = document.querySelector(".infoBox");
let exitBtn = infoBox.querySelector(".infoButtons .quit");
let continueBtn = infoBox.querySelector(".infoButtons .restart");
let quizBox = document.querySelector(".quizBox");
let nextQue = quizBox.querySelector(".nextQue");
let optionList = document.querySelector(".optionList");
let timerSec = document.querySelector(".timer .timerSec");
// let timeLine = document.querySelector("header .timeLine");

// if start button clicked -- info box will appear
startBtn.onclick = () => {
    infoBox.classList.add("active");
}

// if exit button clicked -- will goto home page
exitBtn.onclick = () => {
    infoBox.classList.remove("active");
}

// if continue button clicked -- will go to quiz box
continueBtn.onclick = () => {
    infoBox.classList.remove("active");
    quizBox.classList.add("active");
    showQuestion(0);
    queCounter(1);
    startTimer(15);
    // startTimeLine(0);
}
let queCount = 0;
let queNum = 1;
let counter;
let timeValue = 15;
// let counterLine;
// let startTimeLineValue = 0;
let userScore = 0;

let resultBox = document.querySelector(".resultBox");
let restart = resultBox.querySelector(".restart");
let quit = resultBox.querySelector(".quit");

// If quit button is clicked, then
quit.onclick = () => {
    window.location.reload();
}

// If restart button is clicked
restart.onclick = () => {
    resultBox.classList.remove("active");
    quizBox.classList.add("active");
    let queCount = 0;
    let queNum = 1;
    let counter;
    let timeValue = 15;
    let userScore = 0;

    showQuestion(queCount);
    queCounter(queNum);
    clearTimeout(counter);
    // clearInterval(counterLine);
    startTimer(timeValue);
    nextQue.style.display = "none";
}

// if next button clicked
nextQue.onclick = () => {
    if (queCount < question.length - 1) {
        queCount++;
        queNum++;
        showQuestion(queCount);
        queCounter(queNum);
        clearTimeout(counter);
        // clearInterval(counterLine);
        startTimer(timeValue);
        // startTimeLine(startTimeLineValue);
    } else {
        console.log("Question completed");
        resultBoxShow();
    }
    nextQue.style.display = "none";
}

showQuestion = (index) => {
    let queTxt = document.querySelector(".queTxt");


    let queTag = `<span>` + question[index].num + `.` + question[index].question + `</span>`;

    let optTag = `<div class="option">` + question[index].option[0] + `<span></span></div>`
        + `<div class="option">` + question[index].option[1] + `<span></span></div>`
        + `<div class="option">` + question[index].option[2] + `<span></span></div>`
        + `<div class="option">` + question[index].option[3] + `<span></span></div>`;

    queTxt.innerHTML = queTag;
    optionList.innerHTML = optTag;

    let option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = `<div class="icon tick"><i class="fa-sharp fa-solid fa-check"></i></div>`;
let crossIcon = ` <div class="icon cross"><i class="fa-sharp fa-solid fa-xmark"></i></i></div>`;

function optionSelected(answer) {
    clearTimeout(counter);
    // clearTimeout(counterLine);
    let userAns = answer.textContent;
    let correctAns = question[queCount].answer;
    let allOptions = optionList.children.length;

    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is right");
        userScore += 1;
        console.log(userScore);
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disable");
    }
    nextQue.style.display = "block";
}

// Footer remaining questions
queCounter = (index) => {
    let remaingQue = document.querySelector(".remaingQue");
    let remaingQueTag = `<p><span>` + index + `</span> of <span>` + question.length + `</span> Questions</p>`;
    remaingQue.innerHTML = remaingQueTag;
}

// Timer function
startTimer = (time) => {
    counter = setInterval(timer, 1000);
    function timer() {
        timerSec.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timerSec.textContent;
            timerSec.textContent = "0" + addZero;
        }
        if (time < 0) {
            timerSec.textContent = "00";
            clearInterval(counter);
            nextQue.style.display = "block";
            let allOptions = optionList.children.length;
            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disable");
            }
        }
    }
}

// function startTimeLine(time){
//     counterLine = setInterval(timer, 45);
//     function timer(){
//         time++;
//         timeLine.style.width = time + "px";

//         if(screen.width < 572){
//             if(time > 360){
//                 clearInterval(counterLine);
//             }
//         }else{
//             if(time > 480){
//                 clearInterval(counterLine);
//             }
//         }
//     }
// }

// Show the result box
function resultBoxShow() {
    infoBox.classList.remove("active");
    quizBox.classList.remove("active");
    resultBox.classList.add("active");

    let scoreTxtTag = resultBox.querySelector(".scoreTxt");
    if (userScore > 3) {
        scoreTxtTag.innerHTML = `<span>congrats, you got <p>` + userScore + `</p> out of <p>` + question.length + `</p></span>`;
    }
    else if (userScore > 1) {
        scoreTxtTag.innerHTML = `<span>nice, you got <p>` + userScore + `</p> out of <p>` + question.length + `</p></span>`;
    }
    else {
        scoreTxtTag.innerHTML = `<span>and sorry,  as you got only <p>` + userScore + `</p> out of <p>` + question.length + `</p></span>`;
    }
}

