// Inizializzazione variabili (km da percorrere ed età utente)
const userKm = parseInt( prompt('Inserisci i km che devi percorrere') );
const userAge = parseInt( prompt('Inserisci la tua età') );

// Verifica su console delle varibile inserite dall'utente
console.log(userKm);
console.log(userAge);

// Calcolo del costo del biglietto in base ai km
let userTicket = (0.21 * userKm);

// Verifica su console del calcolo del biglietto
console.log(userTicket);

// Condizione per ricevere lo sconto sul biglietto in base all'età
if (userAge < 18) {
    userTicket = (userTicket - ( (userTicket * 20) / 100 ) );
    console.log(`Sconto 20% per minorenni ${userTicket}`);
} else if (userAge > 65) {
    userTicket = (userTicket - ( (userTicket * 40) / 100 ) );
    console.log(`Sconto 40% per over65 ${userTicket}`);
}

// Arrotondamento del prezzo biglietto a due cifre decimali
userTicket = userTicket.toFixed(2);
console.log(`Prezzo arrotondato ${userTicket}`)

// Scrittura delle variabili sulla pagina
document.getElementById('userKm').innerHTML = userKm;
document.getElementById('userAge').innerHTML = userAge;
document.getElementById('userTicket').innerHTML = userTicket;

