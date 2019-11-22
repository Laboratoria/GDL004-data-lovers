//AQUI TODA LA DATA DOM
import potter from './data/potter/potter.js';
//importa las variables de data.js
import {nombres, house} from './data.js';
//console.log(nombres(potter)) // retorna todo el array

//document.getElementById("content").innerHTML += nombres(potter)
//si "cambia" hacer la funcion select
document.getElementById("mySelect").addEventListener("change", select)
function select() {
  //var x = document.getElementByValue("mySelect").value
  var myselect = document.getElementById("mySelect").value;
  document.getElementById("content").innerHTML = "You selected: " + myselect;
}




   /*retorna la liga de la imagen
 document.getElementById("img").innerHTML += `<img src=${foto} />`;
document.getElementById("img").innerHTML += "fotos"; */
