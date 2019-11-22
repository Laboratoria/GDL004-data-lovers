export const POTTERHOLA =() =>{
  return 'POTTER';
};

export const especies=(POTTER)=>{
  return POTTER.filter((hola)=> {

    return hola.species ==="human";
    });

} 

export const allPeople =(POTTER)=>{
 let personajes =[];
 
  POTTER.forEach((element) => {
      personajes.push({
      imagen: element.image,
      nombre: element.name,
      actor: element.actor     
    });

 }); 
 return personajes;
}

export const casas=(POTTER)=>{
  return POTTER.filter((casas)=> {

    return casas.house ==="Gryffindor";
    });
} 

