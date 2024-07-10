/*snack 04
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

console.log('ARRAY 04');

// Lista di Array degli invitati alla festa del grande Gatsby
const invitati = ["Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Nick Carraway", "Jordan Baker"];

// L'utente inserisce il suo nome
let nomeUtente = prompt("Inserisci il tuo nome:");
console.log(nomeUtente);

// Controlla se il nome utente è nella lista degli invitati
if (invitati.includes(nomeUtente)) {
    console.log("Sei nella lista degli invitati! Puoi partecipare alla festa!");
} else {
    console.log("Spiacente, non sei nella lista degli invitati.");
}