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
      imagen: POTTER.image,
      nombre: POTTER.name,
      actor: POTTER.actor     
    });
 }); 
 return personajes;
}