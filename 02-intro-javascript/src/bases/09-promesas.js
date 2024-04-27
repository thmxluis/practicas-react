// Promesas
import { getHeroeById } from "./bases/08-imp-exp";

// console.log(getHeroeById(1))

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

// console.log('Fin de programa');


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(10).then(console.log).catch(console.warn);
