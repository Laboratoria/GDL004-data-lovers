// AQUI TODA LA DATA DOM
import potter from './data/potter/potter.js';
// importa las variables de data.js
import { az,
  houseGriffyndor,
  houseSlytherin,
  houseRavenclaw,
  houseHufflepuff,
  specieHumans,
  specieHalfgiant,
  specieWerewolft,
  specieCat,
  ancestryHalfblood,
  uknownAncestry,
  ancestryMuggleborn,
  ancestryPureblood,
  ancestrySquib } from './data.js';
  // console.log(nombres(potter)) // retorna todo el array
  // console.log(house(potter)) // retorna las casas griffindor
  // console.log(az(potter)) // retorna por AZ
  // ANADIDO PARA PONER POR DEFAULT UNOS VALORES
  displayDefault();
  //console.log(az(potter))
  //si "cambia" hacer la funcion select
  document.getElementById('mySelect').addEventListener('change', select);
  function select() {
    let myselect = document.getElementById('mySelect').value;
    // document.getElementById('content').innerHTML = myselect;
    document.getElementById('content').innerHTML = '';
      switch (myselect) {
      case '1':
      displayNames(az, potter);
      break;
      case 'Gryffindor':
      displayHouses(myselect);
      break;
      case 'Slytherin':
      displayHouses(myselect);
      break;
      case 'Ravenclaw':
      displayHouses(myselect);
      break;
      case 'Hufflepuff':
      displayHouses(myselect);
      break;
      case 'Humans':
      displaySpecie(myselect);
      break;
      case 'Halfgiant':
      displaySpecie(myselect);
      break;
      case 'Werewolf':
      displaySpecie(myselect);
      break;
      case 'Cat':
      displaySpecie(myselect);
      break;
      case 'Halfblood':
      displayAncestry('Halfblood');
      break;
      case 'Pure-Blood':
      displayAncestry('Pure-Blood');
      break;
      case 'Muggleborn':
      displayAncestry('Muggleborn');
      break;
      case 'Unknown':
      displayAncestry('Unknown');
      break;
      case 'Squib':
      displayAncestry('Squib');
      break;
      default:
      displayDefault();
    };
    // si el usurario selecciona 1 retorne potter.map
  };
  // FUNCION HECHA PARA SETEAR EL DEFAULT DE LO QUE SE QUIERE MOSTRAR
  function displayDefault() {
    potter.map((objeto)=>{
      let p = document.createElement('p');
      p.classList.add("pchar");
      const template = `<h1 class='name'> ${objeto.name}</h1>
      <img src = ${objeto.image} class = 'image'> </img>`
      p.innerHTML = template;
      document.getElementById('content').appendChild(p);
    });
  };

  // FUNCION HECHA PARA DESPLEGAR NOMBRES
  function displayNames(az, potter) {
    az(potter).map((casas) => {
      let p = document.createElement('p');
      p.classList.add('pchar');
      const template = `<h1 class='name'> ${casas.name}</h1>
      <img src= ${casas.image} class='image'> </img>`
      p.innerHTML = template;
      document.getElementById('content').appendChild(p);
    });
  };

  // FUNCION HECHA PARA DESPLEGAR casas
  function displayHouses(selectedHouse) {
    let house;

    switch(selectedHouse) {
      case 'Gryffindor':
      house = houseGriffyndor(potter);
      break;
      case 'Slytherin':
      house = houseSlytherin(potter);
      break;
      case 'Ravenclaw':
      house = houseRavenclaw(potter);
      break;
      case 'Hufflepuff':
      house = houseHufflepuff(potter);
      break;
    };
    house.map((character) => {
      let p = document.createElement('p');
      p.classList.add('pchar');
      const template = `<h1 class='name'> ${character.name}</h1>
      <img src=${character.image} class='image'> </img>`
      p.innerHTML = template;
      document.getElementById('content').appendChild(p);
    });
    ;
  }
  function displaySpecie(selectedSpecie) {
    let especie;

    switch(selectedSpecie) {
      case 'Humans':
      especie = specieHumans(potter);
      break;
      case 'Halfgiant':
      especie = specieHalfgiant(potter);
      break;
      case 'Werewolf':
      especie = specieWerewolft(potter);
      break;
      case 'Cat':
      especie = specieCat(potter);
      break;
    };
    especie.map((allspecie) => {
      let p = document.createElement('p');
      p.classList.add('pchar');
      const template = `<h1 class='name'> ${allspecie.name}</h1>
      <img src=${allspecie.image} class='image'> </img>`
      p.innerHTML = template;
      document.getElementById('content').appendChild(p);
    });
  };
  function displayAncestry(selectedAncestry) {
    let ancestry;
    switch (selectedAncestry) {
      case 'Halfblood' :
      ancestry = ancestryHalfblood(potter);
      break;
      case 'Unknown':
      ancestry = uknownAncestry(potter);
      break;
      case 'Muggleborn':
      ancestry = ancestryMuggleborn(potter);
      break;
      case 'Pure-Blood':
      ancestry = ancestryPureblood(potter);
      break;
      case 'Squib':
      ancestry = ancestrySquib(potter);
      break;
    };
    ancestry.map ((ancestry) => {
      let p = document.createElement('p');
      p.classList.add('pchar');
      const template = `<h1 class=name'> ${ancestry.name}</h1>
      <img src=${ancestry.image} class='image'> </img>`
      p.innerHTML = template;
      document.getElementById('content').appendChild(p);
    });
  };
