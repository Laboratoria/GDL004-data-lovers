
export  const filterType = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
  //console.log(pkm.type)
  return pkm.type[0] === 'Grass' || pkm.type[1] === 'Grass'

});
console.log(type)
return type;
};

export const ordenName = (Pokemon) => {
 const ordenNam = Pokemon.sort((pk1,pk2) => {
   if(pk1.name > pk2.name){
     return 1;
   }else if(pk1.name < pk2.name){
     return -1;
   }
   return 0
})
//console.log(ordenNam, 'order')
return ordenNam
 //console.log(ordenNam)
};

export  const filterWater = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
    return pkm.type[0] === 'Water' || pkm.type[1] === 'Water'


});
console.log(type)
return type;
};

export  const filterRock = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
    return pkm.type[0] === 'Rock' || pkm.type[1] === 'Rock'


});
console.log(type)
return type;
};
