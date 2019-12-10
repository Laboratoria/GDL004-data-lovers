import POTTER from './data/potter/potter.js';

// trae las funciones del otro js
import {
  todosLosPersonajes,
  hombres,
  mujeres,
  ordenarPorNombre,
} from './data.js';

// crea el div general de los personajes principales
const lista = document.createElement('div');
lista.classList.add('personajes');

// array's
const infoGeneral = todosLosPersonajes(POTTER);
const filHombres = hombres(POTTER);
const filMujeres = mujeres(POTTER);
const ordenar = ordenarPorNombre(POTTER);

// obtiene el objeto del HTML
const botonHombres = document.getElementById('hombres');
const botonMujeres = document.getElementById('mujeres');
const botonOrdenar = document.getElementById('OrdenarA-Z');
const mostrar = document.getElementById('mostrarPersonajes');

function mostrarPersonajes(personaje) {
  lista.innerHTML = '';
  for (let i = 0; i < personaje.length; i += 1) {
    // se crean todos los elementos del html
    const card = document.createElement('div');
    const br = document.createElement('br');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');
    const divImg = document.createElement('div');
    // esta linea crea el nombre del div padre
    card.classList.add('card');
    // esta linea le agrega la clase al div de las imagenes
    divImg.classList.add('img-personajes');
    // esta linea le agrega el elemento de div de la imagen
    card.appendChild(divImg);
    // esta linea le agrega el elemento de la imagen al div de la imagen.
    divImg.appendChild(img);
    // esta linea le agrega el atributo del src a la imagen
    img.setAttribute('src', personaje[i].image);
    // esta linea le agrega la classe a las imagenes.
    img.classList.add('imagenesP');
    // agregando una clase al p1
    p1.classList.add('nombre-actor-personaje');
    // esta linea Crea el personaje y lo muestra en el html
    const crearPersonaje = ` <div class="personajesCards">
    <strong> 
         Personaje: 
      </strong> 
      <h2> ${personaje[i].name} </h2>
      </div> 
     `;
    p1.innerHTML = crearPersonaje;
    // esta linea le agrega al div principal el nombre del personaje
    card.appendChild(p1);
    // esta linea le agrega un salto de linea entre personaje y actor
    card.appendChild(br);
    // agregando una clase al p2
    p2.classList.add('nombre-actor-personaje');
    // esta linea le agrega al p2  el nombre del actor
    const crearActor = `<div class="actores"> <strong>Actor:  </strong>${personaje[i].actor}</div>`;
    p2.innerHTML = crearActor;
    // esta linea le agrega al div principal el nombre del actor
    card.appendChild(p2);
    // esta linea le agrega todas las cards al div principal
    lista.appendChild(card);
  }
  mostrar.appendChild(lista);
}

const bottonconoceMas = document.getElementById('conocemas');
const selCasas = document.getElementById('seleccion-casas');
const regresarPagina2a1 = document.getElementById('regresarAPag1');
const selPersonajes = document.getElementById('seleccion-personajes');
const regresarPagina4a2 = document.getElementById('regresarAPagina2');
const regresarPagina3a2 = document.getElementById('regresarAPag2');

bottonconoceMas.addEventListener('click', () => {
  document.getElementById('pagina1').style.display = 'none';
  document.getElementById('pagina2').style.display = 'block';
});

regresarPagina2a1.addEventListener('click', () => {
  document.getElementById('pagina2').style.display = 'none';
  document.getElementById('pagina1').style.display = 'flex';
});

regresarPagina4a2.addEventListener('click', () => {
  document.getElementById('pagina4').style.display = 'none';
  document.getElementById('pagina2').style.display = 'block';
});

regresarPagina3a2.addEventListener('click', () => {
  document.getElementById('pagina3').style.display = 'none';
  document.getElementById('pagina2').style.display = 'block';
});

selCasas.addEventListener('click', () => {
  document.getElementById('pagina2').style.display = 'none';
  document.getElementById('pagina3').style.display = 'block';
});

selPersonajes.addEventListener('click', () => {
  document.getElementById('pagina2').style.display = 'none';
  document.getElementById('pagina4').style.display = 'block';
  mostrarPersonajes(infoGeneral);
});

// se agregan los eventos y las funcciones a los botones
botonHombres.addEventListener('click', () => mostrarPersonajes(filHombres));
botonMujeres.addEventListener('click', () => mostrarPersonajes(filMujeres));
botonOrdenar.addEventListener('click', () => mostrarPersonajes(ordenar));

const url = 'http://localhost:5000/data/potter/potter.json'
fetch(url)
  .then(response => response.json())
  .then((data) => {

    data.forEach(element => {
      console.log(element.house)
    });

  })

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
    datasets: [{
      label: 'Personajes  por casas',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
});


let data = [3, 1, 2, 1]
let labels = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]


//  that make your chart.

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: data,
      backgroundColor: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3'],
      borderColor: 'rgb(255, 255, 255)',
    }],

    labels: labels
  },
  options: {}
});
