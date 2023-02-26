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
}
let queCount = 0;

// if next button clicked
nextQue.onclick=()=>{
    queCount++;
    showQuestion(queCount);
}

showQuestion = (index) => {
    let queTxt = document.querySelector(".queTxt");
    let optTxt = document.querySelector(".optionList");

    let queTag = `<span>`+question[index].question+`</span>`;
    let optTag = `<div class="option">`+question[index].option[0]+`<span></span></div>`
                +`<div class="option">`+question[index].option[1]+`<span></span></div>`
                +`<div class="option">`+question[index].option[2]+`<span></span></div>`
                +`<div class="option">`+question[index].option[3]+`<span></span></div>`;

    queTxt.innerHTML = queTag;
    optTxt.innerHTML = optTag;
}