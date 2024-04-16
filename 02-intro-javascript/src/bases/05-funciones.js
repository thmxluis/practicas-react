// Funciones en JS - Arrow Functions
function saludar(nombre) {
    return `Hola, ${nombre}`;
}


// saludar = 30;

console.log(saludar('Goku')); // Hola, Goku

// console.log(saludar); // 30


const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Vegeta')); // Hola, Vegeta
console.log(saludar2); // [Function: saludar2]

// Funciones de flecha: es una forma más corta de escribir funciones en JS

const saludarFlecha = (nombre) => {
    return `Hola, ${nombre}`;
}   

console.log(saludarFlecha('Gohan')); // Hola, Gohan
console.log(saludarFlecha); // [Function: saludarFlecha]


// Saludar sin return: si la función solo tiene una línea de código, se puede omitir el return y las llaves
const saludarSinReturn = (nombre) => `Hola, ${nombre}`;

console.log(saludarSinReturn('Trunks')); // Hola, Trunks
console.log(saludarSinReturn); // [Function: saludarSinReturn]


// Funciones de flecha sin argumentos
const saludarSinArgumentos = () => `Hola Mundo`;

console.log(saludarSinArgumentos()); // Hola Mundo
console.log(saludarSinArgumentos); // [Function: saludarSinArgumentos]


// Funciones de flecha con más de un argumento
const saludarConMasDeUnArgumento = (nombre, apellido) => `Hola, ${nombre} ${apellido}`;
console.log(saludarConMasDeUnArgumento('Bulma', 'Brief')); // Hola, Bulma Brief
console.log(saludarConMasDeUnArgumento); // [Function: saludarConMasDeUnArgumento]


function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Goku');
console.log(usuarioActivo); // { uid: 'ABC123', username: 'Goku' }

// Funciones de flecha con un solo argumento

const getUsuarioActivoFlecha = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivoFlecha = getUsuarioActivoFlecha('Vegeta');
console.log(usuarioActivoFlecha); // { uid: 'ABC123', username: 'Vegeta' }



