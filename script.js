const stepHeads = document.querySelectorAll('.step-head');
const stepCounter = document.querySelectorAll('.step-counter');
const stepLabel = document.querySelectorAll('.step-label');
const stepsContent = document.querySelectorAll('.steps-section');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const prevSubBtns = document.querySelectorAll('.prev-sub-btn');
const nextSubBtns = document.querySelectorAll('.next-sub-btn');
const subStepper = document.querySelectorAll('.stepper-item');
const subContent = document.querySelectorAll('.sub-content');
// Code For the Labels
stepHeads.forEach((head, index) => {
    head.addEventListener("click", () => {
        removingStyles();
        stepsContent[index].classList.add("active");
        stepCounter[index].classList.add("active-counter");
        stepLabel[index].classList.add("active-label");
    })
})
// Code for the Next Btns
nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        removingStyles();
        stepsContent[index + 1].classList.add("active");
        stepCounter[index + 1].classList.add("active-counter");
        stepLabel[index + 1].classList.add("active-label");
    })
})

// Code for the Next Btns
prevBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        removingStyles();
        stepsContent[index].classList.add("active");
        stepCounter[index].classList.add("active-counter");
        stepLabel[index].classList.add("active-label");
    })
})

nextSubBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        console.log(subContent.length, index)
        if (index < subContent.length - 1) {
            subContent.forEach((content) => {
                content.classList.remove("active")
            })
            subContent[index + 1].classList.add("active");
            subStepper[index + 1].classList.add("completed");
        }
    })
})

prevSubBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        console.log(subContent.length, index)
        if (index >= 0) {
            subContent.forEach((content) => {
                content.classList.remove("active")
            })
            subContent[index].classList.add("active");
            subStepper[index].classList.add("completed");
        }
    })
})

function removingStyles() {
    stepsContent.forEach((content) => {
        content.classList.remove("active")
    })
    stepCounter.forEach((count) => {
        count.classList.remove("active-counter")
    })
    stepLabel.forEach((label) => {
        label.classList.remove("active-label")
    })
}