export function createChekBox(list, container){
    list.forEach(category => {
      container.innerHTML += 
      `
      <div class="form-check div-check">
                  <input class="form_check" type="checkbox" id="inlineCheckbox1" value="${category}">
                  <label class="form-check-label" for="inlineCheckbox1"> ${category} </label>
              </div>
      `
    })
  }
  // console.log(createChekBox(categoryCheBox))
  
export function printCards(container, data){
    if(data.length === 0 ){
      return container.innerHTML=`<h2 class="h2-R"> << -- NO RESULTS -- >> </h2> ` 
    }
    data.forEach(i => {
    container.innerHTML += `
        <div class="card" id="card-cont" style="width: 19rem; height: 30rem; margin:20px;">
              <img src=${i.image} class="card-img" id="imange-card"  alt="food">
            <div class="card-body">
                <h5 class="card-title"> <b> ${i.name} </b></h5>
                <p class="card-text">${i.date} </p>
                <p class="card-text" id="card-text">${i.description}</p>
                <div class="container-price"> 
                <p class="div-price"> <b> Price:</b> $${i.price}</p>
                <a href="./tails.html?cardDetails=${i._id}" class="btn btn-primary" id="btn-details">Details</a>
            </div>
        </div>
        `
      })
  }

  export function getCategories(cheked){
      const categories = []
      for(let category of cheked){
        if(category){
          categories.push(category.value)
        }
      } return categories
  } 
  
  export function filterCheck(list, categories){
      if (categories.length === 0){
        return list
      }  
      let filtered = []
      categories.forEach(category => {
        list.forEach(event =>{
          if(category === event.category){
            filtered.push(event)
          }
        })
      })
      return filtered
    }
    
export function filteredBySearch (data, userSearch){
    const contenedor = []
    data.filter(e => {
      if(e.name.toLowerCase().includes(userSearch.toLowerCase())){
        contenedor.push(e)
      }
    })
    return contenedor  
  }

export const url = "https://mindhub-xj03.onrender.com/api/amazing"
  