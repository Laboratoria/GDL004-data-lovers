

export const todosLosPersonajes = (data) => {
  const personajes = [];

  data.forEach((element) => {
    personajes.push({
      image: element.image,
      name: element.name,
      actor: element.actor,
    });
  });
  return personajes;
};

export const hombres = (data) => data.filter((personaje) => personaje.gender === 'male');

export const mujeres = (data) => data.filter((personaje) => personaje.gender === 'female');

export const ordenarPorNombre = (data) => data.sort((a, b) => a.name.localeCompare(b.name));

export const ordenarPorCasas = (data) => {
  const output = {};

  data.forEach(element => {
    if (element.house == "") {
      return;
    }
    if (element.house in output) {
      output[element.house] += 1;
    } else {
      output[element.house] = 1;
    } 
  });
  return output
}


