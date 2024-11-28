// console.log("Sono in conta-vocali");

// Calcola numero vocali in una stringa

const vocaliArr = ["a", "e", "i", "o", "u"];

let contVocali = 0;

// Prendo input dal terminale
const parolaTerminale = process.argv[2].toLowerCase();
console.log("Parola presa dal terminale = ", parolaTerminale);

// Ciclo la parola presa dal terminale
for (let i = 0; i < parolaTerminale.length; i++) {
  // Prendo carattere dalla parola
  const currCar = parolaTerminale[i];
  console.log(currCar);

  // L'array contenente le vocali contiene il carattere preso dalla parola nel ciclo for padre

  // Se si aumenta il contatore perché dobbiamo appunto contare quante volte il currCar c'è nell'array vocali

  // Quindi contiamo il numero di vocali presenti nella parola iniziale che stiamo cicliando
  if (vocaliArr.includes(currCar)) contVocali++;
}
console.log(`Nella parola "${parolaTerminale} ci sono ${contVocali} vocali"`);
