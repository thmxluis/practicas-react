// Desestructuración de objetos

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// Desestructuración
const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ nombre, edad, rango = "Capitán" }) => {
  console.log(nombre, edad, rango);
};

// retornaPersona(persona);

const myContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const { nombreClave, anios, latlng:{lat,lng}} = myContext(persona);

console.log(nombreClave, anios, lat, lng);
