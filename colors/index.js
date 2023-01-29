const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// function to change the body background
btn.addEventListener('click', () => {
    const colors = ['#999999', '#800000', '#ffff00', '#c0c0c0', '#008080', '#0000ff', '#00ff00', '#808000', '#000080', '#ff00ff', '#800080', '#ff00ff', '#dfff00', '#ffbf00', '#ff7f50', '#de3163', '#9fe2bf', '#40d0d0', '#6495ed', '#ccccff'];
    // get random number from the array
    const getRandomColor = Math.floor(Math.random() * colors.length);
    // change the body color in the dom
    document.body.style.backgroundColor = colors[getRandomColor];
    // change the span color in the dom
    // you 👇 can use "textContent istead of "innerText"
    color.innerText = colors[getRandomColor];
}) 