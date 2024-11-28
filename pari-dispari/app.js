// console.log("Sono in pari e dispari");

// Verifica se un numero inserito dal terminal è pari o dispari

const numParametro = parseInt(process.argv[2]);

const isParo = numParametro % 2 === 0 ? true : false;

console.log(`Il numero ${numParametro} è paro? ${isParo ? "Si" : "No"}`);
