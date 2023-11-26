const nombre = "Luis";
const apellido = "Gonzalez";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
  return "Hola " + nombreCompleto;
}


console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);