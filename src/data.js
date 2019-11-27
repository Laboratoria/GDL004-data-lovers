
export const todosLosPersonajes = (POTTER)=>{
  let personajes =[];
  
  POTTER.forEach((element) => {
    personajes.push({
    image: element.image,
    name: element.name,
    actor: element.actor     
  });

 }); 
 return personajes;
}

export const hombres = (POTTER)=>{
  return POTTER.filter((hombres)=> {
    return hombres.gender === "male";
  });
} 

export const mujeres = (POTTER)=>{
  return POTTER.filter((mujeres)=> {
    return mujeres.gender === "female";
  });
} 

export const ordenarPorNombre = (data) => data.sort((a, b) => a.name.localeCompare(b.name));