// Taking the required elements

let startBtn = document.querySelector(".startBtn button");
let infoBox = document.querySelector(".infoBox");
let exitBtn = infoBox.querySelector(".infoButtons .quit");
let continueBtn = infoBox.querySelector(".infoButtons .restart");
let quizBox = document.querySelector(".quizBox");
let nextQue = quizBox.querySelector(".nextQue");
let optionList = document.querySelector(".optionList");

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

let tickIcon = `<div class="icon tick"><i class="fa-sharp fa-solid fa-check"></i></div>`;
let crossIcon = ` <div class="icon cross"><i class="fa-sharp fa-solid fa-xmark"></i></i></div>`;

// 
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = question[queCount].answer;
    let allOptions = optionList.children.length;

    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is right");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        for(let i = 0; i< allOptions; i++){
            if( optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class", "option correct");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for(let i=0; i < allOptions; i++){
        optionList.children[i].classList.add("disable");
    }
}

// Footer remaining questions
queCounter = (index) => {
    let remaingQue = document.querySelector(".remaingQue");
    let remaingQueTag = `<p><span>`+index+`</span> of <span>`+question.length+`</span> Questions</p>`;
    remaingQue.innerHTML = remaingQueTag;
}

