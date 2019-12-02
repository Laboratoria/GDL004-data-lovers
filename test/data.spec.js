// importamos la función `example`
import filterType from "../src/data";
import {pokemonObj} from '../src/data/pokemon/pokemon.js';
const pokemon= pokemonObj;

describe('filterType', () => {

  it('debería ser una función', () => {
    expect(typeof filterType).toBe('function');
  });

  //describe('data.filterType', () => {
    // escribe aquí tu test
  //  it("filtrar por tipo debe ser una funcion",()=> {
    //  expect (typeof data.filterType).toBe("function");
  //});
  it("deberia retornar 'Bellsprout'en la primera posicion del filtro Grass",() => {
    expect (filterType("Grass",pokemon)[0]).toHaveProperty ("type","Bellsprout");
  });
  let aux = filterType("Grass",pokemon)[0];
console.log (aux.type);
});
//});
