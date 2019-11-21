 import POTTER from './data/potter/potter.js';
 
 import {especies, allPeople} from './data.js';
 
// botton1  para ir a la siguiente Pagina
let boton1= document.getElementById ("conocemas");

boton1.addEventListener("click", () => {
    document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});
let mostrar = document.getElementById("mostrarPersonajes");
let infoGeneral = allPeople(POTTER);
console.log(infoGeneral)

//function separaObj(){
//  forfor(let i=0; i<infoGeneral.length; i++){ )
//}



for(let i=0; i<infoGeneral.length; i++){
  let newDiv = document.createElement('div');
  newDiv.textContent = infoGeneral[i].nombre;
  mostrar.appendChild(newDiv);  }





