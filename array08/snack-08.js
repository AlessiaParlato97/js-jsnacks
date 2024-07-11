/*snack 08
Fate generare un numero random da 0 a 10 al computer,
e chiedete all’utente di inserire un suo numero.
Se il numero scelto dall’utente è uguale al numero del computer
informate l’utente che ha vinto, altrimenti ha perso.
A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC.*/

console.log('ARRAY 08');

//Collegamento del form di html.
const form = document.getElementById('myForm');

//Fate generare un numero random da 0 a 10 al computer.
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 11); // genera un numero intero tra 0 e 10
}

// Genera il numero random.
let numeroRandom = generaNumeroCasuale();
console.log("Numero del computer:", numeroRandom);


// Gestione dell'evento di submit del form
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Chiedi all'utente di inserire un numero.
    const numeroUtente = parseInt(form.elements['numeroUtente'].value);
    console.log(numeroUtente);



    if (numeroUtente === numeroRandom) {
        // L'utente indovina il numero random.
        console.log("Complimenti! Hai indovinato il numero, hai vinto!");
        // Dopo la vittoria l'utente non gioca più.
        console.log("Fine del gioco.");
        // Disabilita il form per evitare ulteriori tentativi
        form.elements['numeroUtente'].disabled = true;

    } else if (numeroUtente !== numeroRandom) {
        // Informa l'utente che ha perso e chiedi di inserire nuovamente il numero.
        console.log("Mi dispiace, hai perso. Riprova. Il numero era " + numeroRandom);
        // Chiedi nuovamente all'utente di inserire un numero
        form.elements['numeroUtente'].value = '';
        return;

    }
});
