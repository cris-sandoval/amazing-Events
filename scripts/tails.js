import { url } from "./functions.js"

const $tarjetero = document.querySelector(".card-conteiner2") // Div container


// const queryString = location.search
// console.log(location.search);
fetch(url)
.then(result => result.json())
.then(data => { 

const events = data.events; 
let params = new URLSearchParams(location.search)

let id = params.get("cardDetails") 
let cardDetails = events.find(i => i._id == id)

// console.log(cardDetails);
// console.log(cardDetails)

$tarjetero.innerHTML = `
<div class="card-tails" id="card-cont" >
    <div id="imange-container">
    <img src= ${cardDetails.image} class="card-img" id="imange-card"  alt="food">
    </div>
    <div class="card-body">
        <h5 class="card-title"> <b> ${cardDetails.name} </b></h5>
        <p class="card-text"> ${cardDetails.date} </p>
        <p class="card-text" id="card-text">${cardDetails.description}</p>
        <p class="div-price"> <b> Category:</b> ${cardDetails.category}</p>
        <p class="div-price"> <b> Place:</b> ${cardDetails.place}</p>
        <p class="div-price"> <b> Asistence:</b> ${cardDetails.assistance}</p>
        <p class="div-price"> <b> Price:</b> $${cardDetails.price}</p>
    </div>
    
</div>
`
}).catch(error => console.log("El Erro es : ", error))
