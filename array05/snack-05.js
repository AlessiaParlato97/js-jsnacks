/*snack 05
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l’array alla fine.*/

console.log('ARRAY 05');

//Array vuoto
let arrayVuoto = []; // oppure let arrayVuoto = new Array().


//Chiedi per 6 volte all’utente di inserire un numero.
for (let i = 0; i < 6; i++) {
    let utente = prompt("Inserisci un numero:");
    let num = parseFloat(utente);

    if (!isNaN(num)) {
        utente += num;
        //Controllare se il valore inserito è un valore numerico valido o no(stringa).
    } else {
        console.log("Inserisci un numero valido.");
        i--; // Riduci il contatore per ripetere l'iterazione.
    }

    //Verificare se il numero è dispari e inserirlo nella lista array.
    if (num % 2 !== 0) {
        arrayVuoto.push(num);
    }
}

// Stampare l'array con i numeri dispari all'interno.
console.log("Numeri dispari inseriti:", arrayVuoto);

