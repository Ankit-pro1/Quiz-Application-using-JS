// Taking the required elements

let startBtn = document.querySelector(".startBtn button");
let infoBox = document.querySelector(".infoBox");
let exitBtn = infoBox.querySelector(".infoButtons .quit");
let continueBtn = infoBox.querySelector(".infoButtons .restart");
let quizBox = document.querySelector(".quizBox");

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
}