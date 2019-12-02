// importamos la función `example`
import potter from '../src/data/potter/potter.js';
import { specieCat, specieHalfgiant } from "../src/data";
describe('potter', () => {
  it('debería ser un object', () => {
    expect(typeof potter).toBe('object');
  });
});
  describe('specieCat', () => {
    it('debería ser una función', () => {
      expect(typeof specieCat).toBe('function');
    });
  it('deberia retornar "Cat" para "specieCat"', () => {
  //  console.log(specieCat(potter))
   expect(specieCat(potter)[0].species).toBe('cat');
  });
});
describe('potter', () => {
  it('debería ser un object', () => {
    expect(typeof potter).toBe('object');
  });
});
  describe('specieHalfgiant', () => {
    it('debería ser una función', () => {
      expect(typeof specieHalfgiant).toBe('function');
    });
  it('deberia retornar "half-giant" para "specieHalfgiant"', () => {
       expect(specieHalfgiant(potter)[0].species).toBe('half-giant');
  });
});
