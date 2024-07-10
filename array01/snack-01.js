/*snack 01
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

console.log('ARRAY 01');

// L'utente insrisce un numero nel primo prompt.
let numero1 = parseFloat(prompt("Inserisci il primo numero:"));

// L'utente insrisce un numero nel secondo prompt.
let numero2 = parseFloat(prompt("Inserisci il secondo numero:"));

// Confronta i due numeri e stampa il maggiore
if (numero1 > numero2) {
    console.log("Il maggiore è: " + numero1);
} else if (numero2 > numero1) {
    console.log("Il maggiore è: " + numero2);
} else {
    console.log("I due numeri sono uguali.");
}