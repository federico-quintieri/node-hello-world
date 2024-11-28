// Stampiamo nel terminale un console.log
console.log("Hello World");

// Tramite il comando node --watch index.js apriamo una specie di server in modo che ad ogni salvataggio, il file viene eseguito

// node è il nostro programma per creare un server in JS
console.log("Ciaone");

// Salvo in una variabile il primo input che inserisco nel terminale (sarebbe il terzo perché il primo è il percorso di node e il secondo è il percorso del file index.js)
const argomentoTerminale = process.argv[2];
// Controllo questo parametro
console.log("Sono la parola passata come argomento ad index 2: ", argomentoTerminale);
