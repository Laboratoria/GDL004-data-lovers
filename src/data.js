export const especies = (data) => data.filter((hola) => hola.species === 'human');

// Rewrite using map.
export const allPeople = (data) => {
  const personajes = [];

  // data.map((el) => el.name));
  data.forEach((element) => {
    personajes.push({
      imagen: element.image,
      nombre: element.name,
      actor: element.actor,
    });
  });

  return personajes;
};

export const casas = (data) => data.filter((datum) => datum.house === 'Gryffindor');

export const orderByName = (data) => data.sort((a, b) => a.name.localeCompare(b.name));
