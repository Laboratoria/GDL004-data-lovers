// importamos la función `example`
import {
  todosLosPersonajes, hombres, mujeres, ordenarPorNombre, ordenarPorCasas,
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

describe('ordenarPorNombre', () => {
  it('deberia regresar la lista por orden de casas', () => {
    // organizar arrange
const listhouse = [
  {
    "house": "Gryffindor",
  },
  {
    "house": "Hufflepuff",
  },
  {
    "house": "Ravenclaw",
  },
  {
    "house": "Slytherin",
  },
  {
    "house": "Gryffindor",
  },
];

const expectedResults = 
  {
    "Gryffindor": 2,
    "Hufflepuff": 1,
    "Slytherin": 1,
    "Ravenclaw": 1,
  };
// actuar    act
const results = ordenarPorCasas(listhouse);
// afirmar   assert
expect(results).toEqual(expectedResults);
});
});
