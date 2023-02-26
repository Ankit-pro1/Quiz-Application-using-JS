// Taking the required elements

let startBtn = document.querySelector(".startBtn button");
let infoBox = document.querySelector(".infoBox");
let exitBtn = infoBox.querySelector(".infoButtons .quit");
let continueBtn = infoBox.querySelector(".infoButtons .restart");
let quizBox = document.querySelector(".quizBox");
let nextQue = quizBox.querySelector(".nextQue");

// if start button clicked -- info box will appear
startBtn.onclick=()=>{
    infoBox.classList.add("active");
}

// if exit button clicked -- will goto home page
exitBtn.onclick=()=>{
    infoBox.classList.remove("active");
}

// if continue button clicked -- will go to quiz box
continueBtn.onclick=()=>{
    infoBox.classList.remove("active");
    quizBox.classList.add("active");
    showQuestion(0);
    queCounter(1);
}
let queCount = 0;
let queNum = 1;

// if next button clicked
nextQue.onclick=()=>{
    if(queCount < question.length-1){
        queCount++;
        queNum++;
        showQuestion(queCount);
        queCounter(queNum);
    }else{
        console.log("Question completed");
    }
}

showQuestion = (index) => {
    let queTxt = document.querySelector(".queTxt");
    let optionList = document.querySelector(".optionList");

    let queTag = `<span>`+question[index].num+`.`+question[index].question+`</span>`;
    let optTag = `<div class="option">`+question[index].option[0]+`<span></span></div>`
                +`<div class="option">`+question[index].option[1]+`<span></span></div>`
                +`<div class="option">`+question[index].option[2]+`<span></span></div>`
                +`<div class="option">`+question[index].option[3]+`<span></span></div>`;

    queTxt.innerHTML = queTag;
    optionList.innerHTML = optTag;

    let option = optionList.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// 
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = question[queCount].answer;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
    }else{
        console.log("Answer is incorrect");
        answer.classList.add("incorrect");
    }
}

// Footer remaining questions
queCounter = (index) => {
    let remaingQue = document.querySelector(".remaingQue");
    let remaingQueTag = `<p><span>`+index+`</span> of <span>`+question.length+`</span> Questions</p>`;
    remaingQue.innerHTML = remaingQueTag;
}

