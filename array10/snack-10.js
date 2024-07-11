/*snack 10
Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora
il programma dovrà terminare.*/

console.log('ARRAY 10');

//Collegamento del form di html.
const form = document.getElementById('myForm');

// Aggiungi un gestore di eventi per il submit del form
form.addEventListener('submit', function (event) {
    // Ferma l'invio del form predefinito
    event.preventDefault();




    while (true) {
        // Chiedi all'utente di inserire un numero1.
        const numeroUtente1 = document.getElementById('numeroUtente1').value;
        console.log(numeroUtente1);

        // Chiedi all'utente di inserire un numero2.
        const numeroUtente2 = document.getElementById('numeroUtente2').value;
        console.log(numeroUtente2);

        // Verifica se il secondo numero consecutivo è uguale.
        if (numeroUtente2 === numeroUtente1) {
            console.log("Hai inserito due volte consecutive lo stesso numero:", numeroUtente1);
            break;// Esci dal ciclo while
        }
    }

    console.log("Fine del programma.");


});