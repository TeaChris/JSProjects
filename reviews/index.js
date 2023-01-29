// local reviews data
const data = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna john",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

//   get elements from the dom
const personName = document.getElementById('name')
const img = document.getElementById('img')
const personPosition = document.getElementById('position')
const personReview = document.getElementById('text')
// select buttons
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

// set initial person to 0
let initialPerson = 0

window.addEventListener('DOMContentLoaded', () => {
    showPerson()
})

// create a function that displays each person based on the array
function showPerson() {
    const person = data[initialPerson]
    img.src = person.img
    personName.innerText = person.name
    personPosition.innerText = person.job
    personReview.innerText = person.text
}

// make the next button functional
nextBtn.addEventListener('click', () => {
    initialPerson++
    if(initialPerson > data.length - 1) {
        initialPerson = 0
    }
    showPerson()
})

// make the prev button functional
prevBtn.addEventListener('click', () => {
    initialPerson--
    if(initialPerson < 0) {
        initialPerson = data.length - 1
    }
    showPerson()
})