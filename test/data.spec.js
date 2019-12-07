// importamos la función `example`
import {
  todosLosPersonajes, hombres, mujeres, ordenarPorNombre,
} from '../src/data';

describe('todosLosPersonajes', () => {
  it('deberia regresar name, actor and image', () => {
    // organizar arrange
    const input = [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        patronus: '',
        hogwartsStudent: true,
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        patronus: '',
        hogwartsStudent: true,
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
      {
        name: 'Ron Weasley',
        actor: 'Rupert Grint',
        patronus: '',
        hogwartsStudent: true,
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        patronus: '',
        hogwartsStudent: true,
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];

    const expectedResults = [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
      {
        name: 'Ron Weasley',
        actor: 'Rupert Grint',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];

    // actuar    act
    const results = todosLosPersonajes(input);
    // afirmar   assert
    expect(results).toEqual(expectedResults);
  });
});

describe('hombres', () => {
  it('deberia regresar la lista de hombres', () => {
    // organizar arrange

    const listhombres = [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        gender: 'female',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
      {
        name: 'Ron Weasley',
        actor: 'Rupert Grint',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];

    const expectedResults = [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Ron Weasley',
        actor: 'Rupert Grint',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];

    // actuar    act
    const results = hombres(listhombres);
    // afirmar   assert
    expect(results).toEqual(expectedResults);
  });
});

describe('mujeres', () => {
  it('deberia regresar la lista de mujeres', () => {
    // organizar arrange

    const listmujeres = [
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        gender: 'female',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
      {
        name: 'Ron Weasley',
        actor: 'Rupert Grint',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
      },
      {
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
      },
    ];

    const expectedResults = [
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        gender: 'female',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
    ];
    // actuar    act
    const results = mujeres(listmujeres);
    // afirmar   assert
    expect(results).toEqual(expectedResults);
  });
});

describe('ordenarPorNombre', () => {
  it('deberia regresar la lista por orden alfabetico', () => {
    // organizar arrange

    const listalfa = [
      {
        name: 'Bellatrix Lestrange',
        actor: 'Helena Bonham Carter',
        gender: 'female',
        image: 'http://hp-api.herokuapp.com/images/bellatrix.jpg',
      },
      {
        name: 'Arthur Weasley',
        actor: 'Mark Williams',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
      },
      {
        name: 'Argus Filch',
        actor: 'David Bradley',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/filch.jpg',
      },
    ];

    const expectedResults = [
      {
        name: 'Argus Filch',
        actor: 'David Bradley',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/filch.jpg',
      },
      {
        name: 'Arthur Weasley',
        actor: 'Mark Williams',
        gender: 'male',
        image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
      },
      {
        name: 'Bellatrix Lestrange',
        actor: 'Helena Bonham Carter',
        gender: 'female',
        image: 'http://hp-api.herokuapp.com/images/bellatrix.jpg',
      },
    ];
    // actuar    act
    const results = ordenarPorNombre(listalfa);
    // afirmar   assert
    expect(results).toEqual(expectedResults);
  });
});
// describe('ordenarPorNombre', () => {
//   it('debería ordenar objetos en array por nombre', () => {
//     // organizar arrange
//     // actuar    act
//     // afirmar   assert
//   });
// });

// describe('hombres', () => {
//   it('deberia regresar la lista de hombres', () => {
//     // organizar arrange

//     const listhombres = [
//       {
//         name: 'Harry Potter',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '31-07-1980',
//         yearOfBirth: 1980,
//         ancestry: 'half-blood',
//         eyeColour: 'green',
//         hairColour: 'black',
//         wand: {
//           wood: 'holly',
//           core: 'phoenix feather',
//           length: 11,
//         },
//         patronus: 'stag',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Daniel Radcliffe',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/harry.jpg',
//       },
//       {
//         name: 'Ron Weasley',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '01-03-1980',
//         yearOfBirth: 1980,
//         ancestry: 'pure-blood',
//         eyeColour: 'blue',
//         hairColour: 'red',
//         wand: {
//           wood: 'willow',
//           core: 'unicorn tail-hair',
//           length: 14,
//         },
//         patronus: 'Jack Russell terrier',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Rupert Grint',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/ron.jpg',
//       },
//       {
//         name: 'Draco Malfoy',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '05-06-1980',
//         yearOfBirth: 1980,
//         ancestry: 'pure-blood',
//         eyeColour: 'grey',
//         hairColour: 'blonde',
//         wand: {
//           wood: 'hawthorn',
//           core: 'unicorn tail-hair',
//           length: 10,
//         },
//         patronus: '',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Tom Felton',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/draco.jpg',
//       },
//       {
//         name: 'Cedric Diggory',
//         species: 'human',
//         gender: 'male',
//         house: 'Hufflepuff',
//         dateOfBirth: '',
//         yearOfBirth: 1977,
//         ancestry: '',
//         eyeColour: 'grey',
//         hairColour: 'brown',
//         wand: {
//           wood: 'ash',
//           core: 'unicorn hair',
//           length: 12.25,
//         },
//         patronus: '',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Robert Pattinson',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/cedric.png',
//       },
//       {
//         name: 'Severus Snape',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '09-01-1960',
//         yearOfBirth: 1960,
//         ancestry: 'half-blood',
//         eyeColour: 'black',
//         hairColour: 'black',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'doe',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Alan Rickman',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/snape.jpg',
//       },
//       {
//         name: 'Rubeus Hagrid',
//         species: 'half-giant',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '06-12-1928',
//         yearOfBirth: 1928,
//         ancestry: 'half-blood',
//         eyeColour: 'black',
//         hairColour: 'black',
//         wand: {
//           wood: 'oak',
//           core: '',
//           length: 16,
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Robbie Coltrane',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/hagrid.png',
//       },
//       {
//         name: 'Neville Longbottom',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '30-07-1980',
//         yearOfBirth: 1980,
//         ancestry: 'pure-blood',
//         eyeColour: '',
//         hairColour: 'blonde',
//         wand: {
//           wood: 'cherry',
//           core: 'unicorn tail-hair',
//           length: 13,
//         },
//         patronus: '',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Matthew Lewis',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/neville.jpg',
//       },
//       {
//         name: 'Sirius Black',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '03-11-1959',
//         yearOfBirth: 1959,
//         ancestry: 'pure-blood',
//         eyeColour: 'grey',
//         hairColour: 'black',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'hare',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Gary Oldman',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/sirius.JPG',
//       },
//       {
//         name: 'Remus Lupin',
//         species: 'werewolf',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '10-03-1960',
//         yearOfBirth: 1960,
//         ancestry: 'half-blood',
//         eyeColour: 'green',
//         hairColour: 'brown',
//         wand: {
//           wood: 'cypress',
//           core: 'unicorn tail-hair',
//           length: 10.25,
//         },
//         patronus: 'wolf',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'David Thewlis',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/lupin.jpg',
//       },
//       {
//         name: 'Arthur Weasley',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '06-02-1950',
//         yearOfBirth: 1950,
//         ancestry: 'pure-blood',
//         eyeColour: 'blue',
//         hairColour: 'red',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'weasel',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Mark Williams',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
//       },
//       {
//         name: 'Lord Voldemort',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '31-12-1926',
//         yearOfBirth: 1926,
//         ancestry: 'half-blood',
//         eyeColour: 'red',
//         hairColour: 'bald',
//         wand: {
//           wood: 'yew',
//           core: 'phoenix feather',
//           length: 13.5,
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Ralph Fiennes',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/voldemort.jpg',
//       },
//       {
//         name: 'Horace Slughorn',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'pure-blood',
//         eyeColour: 'green',
//         hairColour: 'blonde',
//         wand: {
//           wood: 'cedar',
//           core: 'dragon heartstring',
//           length: 10.25,
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Jim Broadbent',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/slughorn.JPG',
//       },
//       {
//         name: 'Kingsley Shacklebolt',
//         species: 'human',
//         gender: 'male',
//         house: '',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'pure-blood',
//         eyeColour: 'brown',
//         hairColour: 'brown',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'lynx',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'George Harris',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/kingsley.jpg',
//       },
//       {
//         name: 'Lucius Malfoy',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: 1954,
//         ancestry: 'pure-blood',
//         eyeColour: 'grey',
//         hairColour: 'blonde',
//         wand: {
//           wood: 'elm',
//           core: 'dragon heartstring',
//           length: 18,
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Jason Isaacs',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/lucius.jpg',
//       },
//       {
//         name: 'Vincent Crabbe',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'pure-blood',
//         eyeColour: 'black',
//         hairColour: 'black',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Jamie Waylett',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/crabbe.jpg',
//       },
//       {
//         name: 'Gregory Goyle',
//         species: 'human',
//         gender: 'male',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'pure-blood',
//         eyeColour: '',
//         hairColour: 'brown',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Josh Herdman',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/goyle.jpg',
//       },
//       {
//         name: 'Argus Filch',
//         species: 'human',
//         gender: 'male',
//         house: '',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'squib',
//         eyeColour: '',
//         hairColour: 'grey',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'David Bradley',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/filch.jpg',
//       },
//     ];

//     // actuar    act
//     const results = hombres(input);
//     // afirmar   assert
//     expect(results[0]).toEqual(listhombres[0]);
//   });
// });
// // organizar arrange
// // actuar    act
// // afirmar   assert
// describe('mujeres', () => {
//   it('deberia regresar la lista de mujeres', () => {
//     // organizar arrange

//     const listmujeres = [
//       {
//         name: 'Hermione Granger',
//         species: 'human',
//         gender: 'female',
//         house: 'Gryffindor',
//         dateOfBirth: '19-09-1979',
//         yearOfBirth: 1979,
//         ancestry: 'muggleborn',
//         eyeColour: 'brown',
//         hairColour: 'brown',
//         wand: {
//           wood: 'vine',
//           core: 'dragon heartstring',
//           length: '',
//         },
//         patronus: 'otter',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Emma Watson',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
//       },
//       {
//         name: 'Minerva McGonagall',
//         species: 'human',
//         gender: 'female',
//         house: 'Gryffindor',
//         dateOfBirth: '04-10-1925',
//         yearOfBirth: 1925,
//         ancestry: '',
//         eyeColour: '',
//         hairColour: 'black',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'tabby cat',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Dame Maggie Smith',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
//       },
//       {
//         name: 'Cho Chang',
//         species: 'human',
//         gender: 'female',
//         house: 'Ravenclaw',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: '',
//         eyeColour: 'brown',
//         hairColour: 'black',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'swan',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Katie Leung',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/cho.jpg',
//       },
//       {
//         name: 'Luna Lovegood',
//         species: 'human',
//         gender: 'female',
//         house: 'Ravenclaw',
//         dateOfBirth: '13-02-1981',
//         yearOfBirth: 1981,
//         ancestry: '',
//         eyeColour: 'grey',
//         hairColour: 'blonde',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'hare',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Evanna Lynch',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/luna.jpg',
//       },
//       {
//         name: 'Ginny Weasley',
//         species: 'human',
//         gender: 'female',
//         house: 'Gryffindor',
//         dateOfBirth: '11-08-1981',
//         yearOfBirth: 1981,
//         ancestry: 'pure-blood',
//         eyeColour: 'brown',
//         hairColour: 'red',
//         wand: {
//           wood: 'yew',
//           core: '',
//           length: '',
//         },
//         patronus: 'horse',
//         hogwartsStudent: true,
//         hogwartsStaff: false,
//         actor: 'Bonnie Wright',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
//       },
//       {
//         name: 'Bellatrix Lestrange',
//         species: 'human',
//         gender: 'female',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: 1951,
//         ancestry: 'pure-blood',
//         eyeColour: 'brown',
//         hairColour: 'black',
//         wand: {
//           wood: 'walnut',
//           core: 'dragon heartstring',
//           length: 12.75,
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Helena Bonham Carter',
//         alive: false,
//         image: 'http://hp-api.herokuapp.com/images/bellatrix.jpg',
//       },
//       {
//         name: 'Dolores Umbridge',
//         species: 'human',
//         gender: 'female',
//         house: 'Slytherin',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'half-blood',
//         eyeColour: 'brown',
//         hairColour: 'grey',
//         wand: {
//           wood: 'birch',
//           core: 'dragon heartstring',
//           length: 8,
//         },
//         patronus: 'persian cat',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Imelda Staunton',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/umbridge.jpg',
//       },
//       {
//         name: 'Mrs Norris',
//         species: 'cat',
//         gender: 'female',
//         house: '',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: '',
//         eyeColour: 'yellow',
//         hairColour: 'brown',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'Maxime, Alanis and Tommy the cats',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/norris.JPG',
//       },
//       {
//         name: 'Argus Filch',
//         species: 'human',
//         gender: 'male',
//         house: '',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'squib',
//         eyeColour: '',
//         hairColour: 'grey',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'David Bradley',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/filch.jpg',
//       },
//     ];

//     // actuar    act
//     const results = mujeres(input);
//     // afirmar   assert
//     expect(results[0]).toEqual(listmujeres[0]);
//   });
// });

// describe('ordenarPorNombre', () => {
//   it('deberia regresar la lista por orden alfabetico', () => {
//     // organizar arrange

//     const listalfa = [
//       {
//         name: 'Argus Filch',
//         species: 'human',
//         gender: 'male',
//         house: '',
//         dateOfBirth: '',
//         yearOfBirth: '',
//         ancestry: 'squib',
//         eyeColour: '',
//         hairColour: 'grey',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: '',
//         hogwartsStudent: false,
//         hogwartsStaff: true,
//         actor: 'David Bradley',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/filch.jpg',
//       },
//       {
//         name: 'Arthur Weasley',
//         species: 'human',
//         gender: 'male',
//         house: 'Gryffindor',
//         dateOfBirth: '06-02-1950',
//         yearOfBirth: 1950,
//         ancestry: 'pure-blood',
//         eyeColour: 'blue',
//         hairColour: 'red',
//         wand: {
//           wood: '',
//           core: '',
//           length: '',
//         },
//         patronus: 'weasel',
//         hogwartsStudent: false,
//         hogwartsStaff: false,
//         actor: 'Mark Williams',
//         alive: true,
//         image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
//       },
//     ];

//     // actuar    act
//     const results = ordenarPorNombre(input);
//     // afirmar   assert
//     expect(results).toEqual(listalfa);
//   });
// });
