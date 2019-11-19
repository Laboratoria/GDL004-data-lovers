 import POTTER from './data/potter/potter.js';
 console.log(POTTER);
 import {especies, allPeople} from './data.js';
 
// botton1  para ir a la siguiente Pagina
let boton1= document.getElementById ("conocemas");

boton1.addEventListener("click", () => {
    document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});
  var ana =allPeople(POTTER);
  console.log (ana)