import { data } from "./data.js"
const events = data.events; // array de eventos
const $tarjetero = document.querySelector(".card-conteiner2") // Div container







let params = new URLSearchParams(location.search)
let id = params.get("cardDetails") 

let cardDetails = events.find(i => i._id === id)

console.log(cardDetails)

$tarjetero.innerHTML = `
<div class="card" id="card-cont" style="width: 19rem; height: 28rem; margin:20px;">
    <img src= ${cardDetails.image} class="card-img" id="imange-card"  alt="food">
    <div class="card-body">
        <h5 class="card-title"> <b> ${cardDetails.name} </b></h5>
        <p class="card-text"> ${cardDetails.date} </p>
        <p class="card-text" id="card-text">${cardDetails.description}</p>
    </div>
    <div class="container-price"> 
        <p class="div-price"> <b> Category:</b> ${cardDetails.category}</p>
        <p class="div-price"> <b> Place:</b> ${cardDetails.place}</p>
        <p class="div-price"> <b> Asistence:</b> ${cardDetails.assistance}</p>
        <p class="div-price"> <b> Price:</b> $${cardDetails.price}</p>
    </div>
    
</div>
`

