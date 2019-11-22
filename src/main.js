 import POTTER from './data/potter/potter.js';
 
 import {especies, allPeople} from './data.js';
 
// botton1  para ir a la siguiente Pagina
let boton1= document.getElementById ("conocemas");

boton1.addEventListener("click", () => {
    document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});

  console.log("entre")
  let mostrar = document.getElementById("mostrarPersonajes");
  let infoGeneral = allPeople(POTTER);
  mostrar.onload = mostrarLista;


const mostrarLista= ()=>{
  const lista= document.createElement("div")
  lista.classList.add("contenedor");

    for(let i=0; i<infoGeneral.length; i++){
      let card = document.createElement('div');
      card.classList.add("card"); 
      card.innerText= infoGeneral[i].nombre+" "+ infoGeneral[i].actor;

      let img=document.createElement("img");
      card.appendChild(img)
      img.setAttribute("src",infoGeneral[i].image);

      mostrar.appendChild(lista);
      lista.appendChild(card);
    }
};

  




