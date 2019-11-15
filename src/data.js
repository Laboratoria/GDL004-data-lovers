// botton1  para ir a la siguiente Pagina
let boton1= document.getElementById("conocemas");
boton1.addEventListener("click",nextPage)


function nextPage(){
  let pagina1= document.getElementById("pagina1").style.display = "none";
  let pagina2= document.getElementById("pagina2").style.display = "block";
console.log(pagina1)
}

