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

// Dichiarazione variabile di sconto da applicare
let reductionTicket;

if (userAge < 18) {
    reductionTicket = ( (userTicket * 20) / 100 );
    userTicket = (userTicket - reductionTicket);
    console.log(userTicket);
} else if (userAge > 65) {
    reductionTicket = ( (userTicket * 40) / 100 );
    userTicket = (userTicket - reductionTicket);
    console.log(userTicket);
}

