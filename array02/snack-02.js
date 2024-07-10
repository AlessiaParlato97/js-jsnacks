/*snack 02
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

console.log('ARRAY 02');

// L'utente insrisce una stringa nel primo prompt.
let parola1 = (prompt("Inserisci la prima parola:"));

// L'utente insrisce una stringa nel secondo prompt.
let parola2 = prompt("Inserisci la seconda parola:");


// Confronta la lunghezza delle parole e stampa prima la parola più corta, poi la lunga.
if (parola1.length < parola2.length) {
    console.log("La parola più corta è:", parola1);
    console.log("La parola più lunga è:", parola2);
} else if (parola1.length > parola2.length) {
    console.log("La parola più corta è:", parola2);
    console.log("La parola più lunga è:", parola1);
} else {
    console.log("Le due parole hanno la stessa lunghezza.");
}
