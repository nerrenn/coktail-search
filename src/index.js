import { displaySearchBar } from './splash'


document
  .querySelector('.splash-container')
  .addEventListener('click', displaySearchBar)

document
.querySelector('.search-bar button')
.addEventListener('click', searchForCocktails)

document.querySelector('#search').addEventListener('keyup', searchForCocktails)