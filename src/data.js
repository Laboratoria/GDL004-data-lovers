// FUNCIONES:
import potter from './data/potter/potter.js';

export const nombres = (potter) => {
  return potter.filter((characters)=> {
    return characters;
  });
};
export const az = (potter) => {
  const AZ = potter.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    };
    if (a.name < b.name) {
      return -1;
    };
    // a must be equal to b
    return 0;
  });
  return AZ;
};

// filtra todas las casas
export const house = (potter)=> {
  return potter.filter((houses)=> {
    // if(houses.house === "Gryffindor"){
    return houses.house;
  });
};
// filtra solo gryffindor
export const houseGriffyndor = (potter) => {
  return potter.filter((houses) => {
    if (houses.house === "Gryffindor") {
      return houses;
    };
  });
};

export const houseSlytherin = (potter) => {
  return potter.filter((houses) => {
    if (houses.house === "Slytherin") {
      return houses;
    };
  });
};
export const houseRavenclaw = (potter) => {
  return potter.filter((houses) => {
    if (houses.house === "Ravenclaw") {
      return houses;
    };
  });
};
export const houseHufflepuff = (potter) => {
  return potter.filter((houses) => {
    if (houses.house === "Hufflepuff") {
      return houses;
    };
  });
};

export const specie = (potter) => {
  return potter.filter((allspecie));
  return allspecie.species;  //aqui agrege
};
export const specieHumans = (potter) => {
  return potter.filter((humans) => {
    if (humans.species === "human") {
      return humans;
    };
  });
};
export const specieHalfgiant = (potter) => {
  return potter.filter((giant) => {
    if (giant.species === "half-giant") {
      return giant;
    };
  });
};
export const specieWerewolft = (potter) => {
  return potter.filter((wolf) => {
    if (wolf.species === "werewolf") {
      return wolf;
    };
  });
};
export const specieCat = (potter) => {
  return potter.filter((kitty) => {
    if (kitty.species === "cat") {
      return kitty;
    };
  });
};
export const ancestryHalfblood = (potter) => {
  return potter.filter((character) => {
    if (character.ancestry === 'half-blood') {
      return character;
      // console.log(character);
    };
  });
};
export const uknownAncestry = (potter) => {
  return potter.filter((character) => {
    if (character.ancestry === '') {
      return character;
    };
  });
};
export const ancestryMuggleborn = (potter) => {
  return potter.filter((character) => {
    if (character.ancestry === 'muggleborn') {
      return character;
    };
  });
};
export const ancestryPureblood = (potter) => {
  return potter.filter((character) => {
    if (character.ancestry === 'pure-blood') {
      return character;
    };
  });
};
export const ancestrySquib = (potter) => {
  return potter.filter((character) => {
    if (character.ancestry === 'squib') {
      return character;
    };
  });
};
// importa als fotos, si sirveee
export const foto = potter.filter((image) => {
  return image;
});
// console.log(nombres) //me muestra TODA LA DATA
// console.log(nombres[0].name) //Muestra el nombre del primer array
