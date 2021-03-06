import { cocktails } from './data.js'

// console.log(cocktails.map((i) => i.strCategory)); // ["", ""]

// ["Cocktail", "Shot", "Cocktail", "Ordinary Drink", "Other/Unknown", "Coffee / Tea"]

const main = document.querySelector('.main-content')
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#search-btn')
const category = document.querySelector('.category')
const name = document.querySelector('.name')

let cocktailsData = cocktails

function renderData(cocktails) {
  main.innerHTML = ''
  for (let item of cocktails) {
    createCocktails(item)
  }
}

renderData(cocktailsData)

function createCocktails(item) {
  const el = `
    <div class="cocktail-item">
      <div class="img-wrapper">
        <img
          src="${item.strDrinkThumb}"
          alt=""
        />
        <p class="category-type">${item.strCategory}</p>
      </div>
      <p class="cocktail-name">
        ${item.strDrink}
        <span class="alcohol-type">${item.strAlcoholic}</span>
      </p>
    </div>
  `

  main.innerHTML += el
}

searchBtn.addEventListener('click', function () {
  const name = search.value
  const filteredData = cocktailsData.filter((item) => {
    return item.strDrink.toLowerCase().includes(name)
  })
  renderData(filteredData)
})

category.addEventListener('click', function () {
  const categoryFilter = cocktailsData.filter((item) => {
    return item.strCategory.toLowerCase()
  })
  console.log(categoryFilter)
  for (let i = 0; i < categoryFilter.length; i++) {
    if ('Cocktail' === 'Cocktail') {
      return categoryFilter[i]
    }
  }
  renderData(categoryFilter)
})

// search.addEventListener('input', function (event) {
//   const name = event.target.value;
//   const filteredData = cocktailsData.filter((item) => {
//     return item.strDrink.toLowerCase().includes(name);
//   });
//   renderData(filteredData);
// });
