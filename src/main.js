 import POTTER from './data/potter/potter.js';
 
 // trae las funciones del otro js
 import {especies, allPeople, casas} from './data.js';
 
// botton1  para ir a la siguiente Pagina
let boton1= document.getElementById ("conocemas");

boton1.addEventListener("click", () => {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
});


let mostrar = document.getElementById("mostrarPersonajes");
let infoGeneral = allPeople(POTTER);
let houses= casas(POTTER);


// crea el div general de los personajes principales
const lista= document.createElement("div");
lista.classList.add("personajes");

// guarda el valor de las casas a filtrar
let botonFiltrar1 = document.getElementById("casa1").value;
let botonFiltrar2 = document.getElementById("casa2").value;
let botonFiltrar3 = document.getElementById("casa3").value;
let botonFiltrar4 = document.getElementById("casa4").value;


for(let i=0; i<infoGeneral.length; i++){
//se crean todos los elementos del html
  let card = document.createElement('div');
  let br = document.createElement('br');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let img=document.createElement("img");
  let divImg = document.createElement('div');
// esta linea crea el nombre del div padre
  card.classList.add("card");
  // esta linea le agrega la clase al div de las imagenes
  divImg.classList.add("img-personajes"); 
// esta linea le agrega el elemento de div de la imagen 
  card.appendChild(divImg);
  // esta linea le agrega el elemento de la imagen al div de la imagen.
  divImg.appendChild(img)
// esta linea le agrega el atributo del src a la imagen
  img.setAttribute("src",infoGeneral[i].imagen);
  img.setAttribute("width",150);
  // agregando una clase al p1
  p1.classList.add("nombre-actor-personaje");
// esta linea le agrega al elemento p1 el nombre del personaje
  p1.innerText = "Personaje: "+infoGeneral[i].nombre;
// esta linea le agrega al div principal el nombre del personaje
  card.appendChild(p1);
// esta linea le agrega un salto de linea entre personaje y actor
  card.appendChild(br);
  // agregando una clase al p2
  p2.classList.add("nombre-actor-personaje");
// esta linea le agrega al p2  el nombre del actor
  p2.innerText = "Actor: "+ infoGeneral[i].actor;
// esta linea le agrega al div principal el nombre del actor
  card.appendChild(p2);
//esta linea le agrega todas las cards al div principal
  lista.appendChild(card);
}
mostrar.appendChild(lista);


function filtradoCasas(){
  for(let i=0; i<houses.length; i++){
    //se crean todos los elementos del html
      let card = document.createElement('div');
      let br = document.createElement('br');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let img=document.createElement("img");
      let divImg = document.createElement('div');
    // esta linea crea el nombre del div padre
      card.classList.add("card");
      // esta linea le agrega la clase al div de las imagenes
      divImg.classList.add("img-personajes"); 
    // esta linea le agrega el elemento de div de la imagen 
      card.appendChild(divImg);
      // esta linea le agrega el elemento de la imagen al div de la imagen.
      divImg.appendChild(img)
    // esta linea le agrega el atributo del src a la imagen
      img.setAttribute("src",houses[i].imagen);
      img.setAttribute("width",150);
      // agregando una clase al p1
      p1.classList.add("nombre-actor-personaje");
    // esta linea le agrega al elemento p1 el nombre del personaje
      p1.innerText = "Personaje: "+houses[i].nombre;
    // esta linea le agrega al div principal el nombre del personaje
      card.appendChild(p1);
    // esta linea le agrega un salto de linea entre personaje y actor
      card.appendChild(br);
      // agregando una clase al p2
      p2.classList.add("nombre-actor-personaje");
    // esta linea le agrega al p2  el nombre del actor
      p2.innerText = "Actor: "+ houses[i].actor;
    // esta linea le agrega al div principal el nombre del actor
      card.appendChild(p2);
    //esta linea le agrega todas las cards al div principal
      lista.appendChild(card);
    }
    mostrar.appendChild(lista);
};


