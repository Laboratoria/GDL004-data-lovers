//AQUI TODA LA DATA DOM
import potter from './data/potter/potter.js';
//importa las variables de data.js
import {nombres, house, houseGriffyndor, houseSlytherin} from './data.js';
//console.log(nombres(potter)) // retorna todo el array
//console.log(house(potter)) // retorna las casas griffindor

//ANADIDO PARA PONER POR DEFAULT UNOS VALORES
displayDefault()

//si "cambia" hacer la funcion select
document.getElementById("mySelect").addEventListener("change", select)
function select() {
  let myselect = document.getElementById("mySelect").value;
  //document.getElementById("content").innerHTML = myselect;
  document.getElementById("content").innerHTML = "";
  switch (myselect) {
    case '1':
      displayNames();
    break;
    case "Gryffindor":
      displayHouses(myselect);
    break;
    case "Slytherin":
      displayHouses(myselect);
    break;
    case '3':
      displaySpecies();
    break;
    case '4':
      displayMaleGender();
    break;
    case '5':
      displayFemaleGender();
    break;
    case '6':
      displayFemaleGender();
    break;
    default:
      displayDefault();
  }
//si el usurario selecciona 1 retorne potter.map
}
// FUNCION HECHA PARA SETEAR EL DEFAULT DE LO QUE SE QUIERE MOSTRAR
function displayDefault() {
  potter.map((objeto)=>{
    let p = document.createElement("p");
    const template = `<h1 class="name"> ${objeto.name}</h1>
    <img src=${objeto.image}> </img>`
    p.innerHTML=template;
    document.getElementById("content").appendChild(p);
  })
}

// FUNCION HECHA PARA DESPLEGAR NOMBRES
function displayNames() {
  potter.map((casas)=>{
    let p = document.createElement("p");
    const template = `<h1 class="name"> ${casas.house} ${casas.name}</h1>
    <img src=${casas.image}> </img>`
    p.innerHTML=template;
    document.getElementById("content").appendChild(p);
  })
}

// FUNCION HECHA PARA DESPLEGAR casas
function displayHouses(selectedHouse) {
  let house

  switch(selectedHouse) {
    case "Gryffindor":
      house = houseGriffyndor(potter);
      break;
    case "Slytherin":
      house = houseSlytherin(potter);
      break;
  }


  house.map((character)=>{
    let p = document.createElement("p");
    const template = `<h1 class="name"> ${character.name}</h1>
    <img src=${character.image}> </img>`
    p.innerHTML=template;
    document.getElementById("content").appendChild(p);
  })


}
// FUNCION HECHA PARA DESPLEGAR POR ESPECIES
function displaySpecies() {

}
// FUNCION HECHA PARA DESPLEGAR HOMBRES
function displayMaleGender() {

}
// FUNCION HECHA PARA DESPLEGAR MUJERES
function displayFemaleGender() {

}

//funcion que retorna fotos y nombres en html
/*potter.map((character)=> {
let div = document.createElement("div");
const template = `<h2 class="name">${character.name}</h2>
<img src=${character.image}> </img>`
div.innerHTML=template;
document.getElementById("content").appendChild(div);
}) */

//funcion que toma los valores principales
/*potter.map((casas)=>{
  let p = document.createElement("p");
  const template = `<h1 class="name"> ${casas.house} ${casas.name}</h1>
  <img src=${casas.image}> </img>`
  p.innerHTML=template;
  document.getElementById("content").appendChild(p);
})*/
