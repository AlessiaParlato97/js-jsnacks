/*snack 07
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all’utente
il numero massimo consentito,
e stampare tutta la tabellina del 2 fino al numero inserito.*/

console.log('ARRAY 07');

/*Stampare la tabellina del 2, fino al numero 1000.
for (let i = 2; i < 1000; i++) {
    let risultato = 2 * i;
    console.log('2 x ' + i + ' = ' + risultato);
}*/

//oppure:

/*Modificate poi il programma in modo che venga chiesto all’utente
il numero massimo consentito,
e stampare tutta la tabellina del 2 fino al numero inserito.*/

// Chiedere all'utente di inserire il numero massimo consentito.
let numeroMassimo = parseInt(prompt("Inserisci il numero massimo fino al quale stampare la tabellina del 2:"));

// Verifica se l'input dell'utente è un numero valido e non una stringa.
if (isNaN(numeroMassimo)) {
    console.log("Input non valido. Assicurati di inserire un numero.");
} else {
    // Stampa la tabellina del 2 fino al numero massimo consentito
    for (let i = 1; i <= numeroMassimo; i++) {
        let risultato = 2 * i;
        console.log('2 x ' + i + ' = ' + risultato);
    }
}