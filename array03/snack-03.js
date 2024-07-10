/*snack 03
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

console.log('ARRAY 03');

let numero = 0;

for (let i = 0; i < 10; i++) {
    let utente = prompt("Inserisci un numero:");
    let num = parseFloat(utente);
    if (!isNaN(num)) {
        numero += num;

        //Controllare se il valore inserito è un valore numerico valido o no(stringa).
    } else {
        console.log("Inserisci un numero valido.");
        i--; // Riduci il contatore per ripetere l'iterazione
    }
}

console.log("La somma di tutti i numeri inseriti è: " + numero);