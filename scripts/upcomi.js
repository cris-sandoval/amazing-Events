// import { data } from "./data.js"

import { url, createChekBox, printCards, filteredBySearch, filterCheck, getCategories } from "./functions.js"
const $search = document.getElementById("searchBox"); // Div container
const $tarjetero = document.querySelector(".card-conteiner") // Div container
const $checkBox = document.querySelector(".divCheck") // Div container
// Array con las 7 categorias


// / constantes

fetch(url)
.then(result => result.json())
.then(data => { 


const events = data.events.filter(cards=> cards.date < data.currentDate);
const categoryCheBox =[... new Set(events.map(category => category.category))] 

createChekBox(categoryCheBox, $checkBox)
printCards($tarjetero, events);

$checkBox.addEventListener("change",(e) => {
  $tarjetero.innerHTML = ""
  const userSearch = $search.value
  // console.log(userSearch);
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  const categoriesValue = getCategories(cheked)
  const filterSearch = filteredBySearch(events, userSearch)
  const filtered = filterCheck(filterSearch, categoriesValue )
  
  printCards($tarjetero, filtered)

})

$search.addEventListener("keyup", e =>{
  $tarjetero.innerHTML=""
  const userSearch = $search.value
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  const categoriesValue = getCategories(cheked)
  const filtered = filterCheck(events, categoriesValue )
  const filterSearch = filteredBySearch(filtered, userSearch)
  printCards($tarjetero, filterSearch)
} )
}).catch(error => console.log("El Erro es : ", error))
