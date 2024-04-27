import heroes, {owners} from "../data/heroes";


// console.log(owners);

// find para solo devolver un objeto 
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

// filter para devolver un array
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));