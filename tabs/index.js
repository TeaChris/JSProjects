const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) =>{
    // dataset-id 👉 is to target a perticular object
    const id = e.target.dataset.id;
    if(id){
        // remove active from all btns
        btns.forEach((btn) => {
            btn.classList.remove('active')
            // add active to clicked button
            e.target.classList.add('active')
        })
        // hide all article
        articles.forEach((article) => {
            article.classList.remove('active')
        })
        // show article
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})