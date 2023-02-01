// code 👉 533624152106187
// base url 👉 https://superheroapi.com/api/
const getBtn = document.getElementById('btn')
const heroImage = document.getElementById('heroImage')
const searchBtn = document.getElementById('searchHeroBtn')
const searchInput = document.getElementById('search')
const heroName = document.getElementById('name')
const heroIntel = document.getElementById('intel')
const heroSpeed = document.getElementById('speed')
const heroStrenght = document.getElementById('strenght')
const heroPower = document.getElementById('power')
const heroDurability = document.getElementById('durability')
const heroCombat = document.getElementById('combat')


const TOKEN = 533624152106187
const BASE_URL =`https://superheroapi.com/api.php/${TOKEN}` 

const getSuperHero = (id, name) => {
  // json.result[0].image.url
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        const name = json.name
        const intelligence = json.powerstats.intelligence
        const speed = json.powerstats.speed
        const power = json.powerstats.power
        const strenght = json.powerstats.strength
        const durability = json.powerstats.durability
        const combat = json.powerstats.combat
        heroImage.innerHTML = `<img src='${json.image.url}'/>`
        heroName.innerText = name
        heroIntel.innerText = intelligence
        heroSpeed.innerText = speed
        heroPower.innerText = power
        heroStrenght.innerText = strenght
        heroDurability.innerText = durability
        heroCombat.innerText = combat
    })
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    // console.log(hero)
        const name = hero.name
        const intelligence = hero.powerstats.intelligence
        const speed = hero.powerstats.speed
        const power = hero.powerstats.power
        const strenght = hero.powerstats.strength
        const durability = hero.powerstats.durability
        const combat = hero.powerstats.combat
      heroImage.innerHTML = `<img src='${hero.image.url}' height=200 width=200/>`
      heroName.innerText = name
      heroIntel.innerText = intelligence
      heroSpeed.innerText = speed
      heroPower.innerText = power
      heroStrenght.innerText = strenght
      heroDurability.innerText = durability
      heroCombat.innerText = combat
  })
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) +1
  }
  
  getBtn.addEventListener('click', () => {
    getSuperHero(randomHero())
  })

  searchBtn.addEventListener('click', () => {
    getSearchSuperHero(searchInput.value)
  })