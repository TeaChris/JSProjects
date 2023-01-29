// select modal-btn, modal-overlay and close-btn
// listen for click on modal and close-btn
// when user clicks modal-btn, open modal to modal-overlay
// when user clicks close-btn remove open-modal for modal-over

const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal')
})