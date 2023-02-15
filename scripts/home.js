// import { data } from "./data.js";

import { url, createChekBox, printCards, filteredBySearch, filterCheck, getCategories} from "./functions.js"
// Elementos del Dom

const $search = document.getElementById("searchBox"); // Div container
const $tarjetero = document.querySelector(".card-conteiner") // Div container
const $checkBox = document.querySelector(".divCheck") // Div container



// console.log(categoryCheBox)


// constantes
fetch(url)
.then(result => result.json())
.then(data => { 

const events = data.events; // array de eventos
const categoryCheBox =[... new Set(events.map(category => category.category))] // Array con las 7 categorias
createChekBox(categoryCheBox, $checkBox)
printCards($tarjetero, events);

// Eventos

$checkBox.addEventListener("change", e => {
  $tarjetero.innerHTML = ""
  const userSearch = $search.value
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  const categoriesValue = getCategories(cheked)
  const filterSearch = filteredBySearch(events, userSearch)
  const filtered = filterCheck(filterSearch, categoriesValue )
  
  printCards($tarjetero, filtered)

})

$search.addEventListener("keyup", () =>{
  $tarjetero.innerHTML=""
  const userSearch = $search.value
  // console.log(userSearch);
  const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
  // console.log(cheked);
  const categoriesValue = getCategories(cheked)
  // console.log(categoriesValue);
  const filtered = filterCheck(events, categoriesValue )
  // console.log(filtered);
  const filterSearch = filteredBySearch(filtered, userSearch)
  // console.log(filterSearch);
  printCards($tarjetero, filterSearch)
})

}).catch(error => console.log("El Erro es : ", error))









