import potterObj from './data/potter/potter.js';
import { filtrarPorCasa } from './data.js';



const funcionMostrar = (arregloPersonajes) => {
    const divsContenedor = document.querySelector("#seccionDeDatos");
    divsContenedor.classList.add("personajesOrdenados");

    //borrar el contenido de divsContenedor
    document.getElementById("seccionDeDatos").innerHTML = "";

    arregloPersonajes.map(function (harry) {
         const todosPersonajesTemplate = document.getElementById("templatePersonajes");


         const personajeImgSpan = todosPersonajesTemplate.content.querySelector(".img");
         personajeImgSpan.src = harry.image;

         const personajeNameSpan = todosPersonajesTemplate.content.querySelector(".nameSpan");
         personajeNameSpan.textContent = harry.name;

         const personajeHouseSpan = todosPersonajesTemplate.content.querySelector(".houseSpan");
         personajeHouseSpan.textContent = harry.house;

         const personajeGenderSpan = todosPersonajesTemplate.content.querySelector(".genderSpan");
         personajeGenderSpan.textContent = harry.gender;

         const personajeAncestrySpan = todosPersonajesTemplate.content.querySelector(".ancestrySpan");
         personajeAncestrySpan.textContent = harry.ancestry;        

         const personajePatronusSpan = todosPersonajesTemplate.content.querySelector(".patronusSpan");
         personajePatronusSpan.textContent = harry.patronus; 

         const personajeWoodSpan = todosPersonajesTemplate.content.querySelector(".woodSpan");
         personajeWoodSpan.textContent = harry.wand.wood;

         const personajeCoreSpan = todosPersonajesTemplate.content.querySelector(".coreSpan");
         personajeCoreSpan.textContent = harry.wand.core;

         const personajeLengthSpan = todosPersonajesTemplate.content.querySelector(".lengthSpan");
         personajeLengthSpan.textContent = harry.wand.length;

         const personajeEyeColourSpan = todosPersonajesTemplate.content.querySelector(".eyeColourSpan");
         personajeEyeColourSpan.textContent = harry.eyeColour;

         const personajeHairColourSpan = todosPersonajesTemplate.content.querySelector(".hairColourSpan");
         personajeHairColourSpan.textContent = harry.hairColour;

         const personajeActorSpan = todosPersonajesTemplate.content.querySelector(".actorSpan");
         personajeActorSpan.textContent = harry.actor;

         const contenidoTemplate = todosPersonajesTemplate.content;
         const clonePersonajes = document.importNode(contenidoTemplate, true);
         divsContenedor.appendChild(clonePersonajes);
    });
};


funcionMostrar(potterObj);

/*
//const genderFilter = potterObj.filter(d => d.gender === "female");
//console.log(genderFilter);

const resultCasa = filtrarPorCasa('Gryffindor', potterObj);

funcionMostrar(resultCasa);
console.log(resultCasa);
*/

const ejecutarFiltro = () => {
    //leer el value del input de la lista de casas!!
    const resultCasa = filtrarPorCasa('Slytherin', potterObj);
    funcionMostrar(resultCasa);
};

document.getElementById("filtrar").addEventListener("click", ejecutarFiltro);
