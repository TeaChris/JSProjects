// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// set date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// close link
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links')
    // setting up the nav-height dynamically
    // the parent will have a height of ZERO (0) by default
    const containerHeight = linksContainer.getBoundingClientRect().height
    // console.log(containerHeight)
    // so we'll have target the children element.
    // this will return the total height of the children element (we can console.log to see)
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)
    // adding fitted height
    if(containerHeight === 0){
        //the height 
        linksContainer.style.height = `${linksHeight}px`
    } else{
        linksContainer.style.height = 0
    }
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
// navbar scroll
window.addEventListener('scroll', ()=>{
    // console.log(window.pageYOffset)
    // we'll target the properties (fixed-nav) in our stylesheet
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    } else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 400){
        topLink.classList.add('show-link')
    } else{
        topLink.classList.remove('show-link')
    }
})

// smooth scroll
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) =>{
        // prevent default
        e.preventDefault();
        // navigate to the specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight
        }

        if(navHeight > 82){
            position = position + containerHeight
        }


        window.scrollTo({
            left: 0,
            top: position,
        });
        // colse nav-container on mobile devices onclick of each link
        linksContainer.style.height = 0;
    })
})