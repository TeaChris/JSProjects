const counter = document.getElementById('counter')
const increaseNumber = document.getElementById('increase')
const resetNumber = document.getElementById('reset')
const decreaseNumber = document.getElementById('decrease')

// set initial count
let countNumber = 0;

//add click event to decrease btn  
decreaseNumber.addEventListener('click', () => {
    // decrement count number by 1
    countNumber--;
    // update the dom
    counter.innerText = countNumber
})

//add click event to increase btn  
increaseNumber.addEventListener('click', () => {
    // increment count number by 1
    countNumber++;
    // update the dom
    counter.innerText = countNumber
})

//add click event to reset btn  
resetNumber.addEventListener('click', () => {
    // reset number to 0
    countNumber = 0
    // update the dom
    counter.innerText = countNumber
})