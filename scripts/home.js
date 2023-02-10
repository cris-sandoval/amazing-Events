import { data } from "./data.js";
import { createChekBox, printCards, filteredBySearch, filterCheck, getCategories} from "./functions.js"
// Elementos del Dom

const $search = document.getElementById("searchBox"); // Div container
const $tarjetero = document.querySelector(".card-conteiner") // Div container
const $checkBox = document.querySelector(".divCheck") // Div container
const events = data.events; // array de eventos
const categoryCheBox =[... new Set(events.map(category => category.category))] // Array con las 7 categorias

// console.log(categoryCheBox)


// constantes


createChekBox(categoryCheBox, $checkBox)
printCards($tarjetero, events);

// Funciones



$checkBox.addEventListener("change",() => {
  $tarjetero.innerHTML = ""
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  const categoriesValue = getCategories(cheked)
  const filtered = filterCheck(events, categoriesValue )
  printCards($tarjetero, filtered )

})

$search.addEventListener("keyup", e =>{
  $tarjetero.innerHTML=""
  let userSearch = (e.target.value)
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  const categoriesValue = getCategories(cheked)
  const filtered = filterCheck(events, categoriesValue )
  let filterSearch = filteredBySearch(filtered, userSearch,)
  printCards($tarjetero, filterSearch)
} )










