//Funciones
import potter from './data/potter/potter.js';

export const nombres = (potter) => {
  return potter.filter((characters)=>{
    return characters;
  });
}

export const house = (potter)=> {
  return potter.filter((houses)=>{
    //if(houses.house === "Gryffindor"){
      return houses.house
    //}
  })
}

export const houseGriffyndor = (potter)=> {
  return potter.filter((houses)=>{
    if(houses.house === "Gryffindor"){
      return houses
    }
  })
}

export const houseSlytherin = (potter)=> {
  return potter.filter((houses)=>{
    if(houses.house === "Slytherin"){
      return houses
    }
  })
}











export const gender = potter.filter((genders)=>{
   return genders;
})
export const foto = potter.filter((image)=>{
   return image
})
//console.log(nombres) //me muestra TODA LA DATA
//console.log(nombres[0].name) //Muestra el nombre del primer array
