// https://dog.ceo/api/breeds/image/random
// .then 👉 PROMISES
// ASYNCHRONOUS PROGRAMMING

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')
// asynchronous programming 👉 stuff you have to wait for

const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        dogImageDiv.innerHTML = `<img src='${json.message}'
        height=300 width=300/>`
    })
}

dogButton.addEventListener('click', () => {
    getDog()
})