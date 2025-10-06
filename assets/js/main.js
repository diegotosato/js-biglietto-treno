// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60


// PRO TIP:
// prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la consegna
// e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso di lavoro
// ed il codice evitandoti di restare li a fissare una pagina vuota.






//tools -> const/var; operatore matematici (*, /, -); operatori relazionali su età (<18, >65); if/else per effetto degli sconti sul prezzo; proprietà toFixed(2) per decimali




//#1 - due variabili con valore prompt, la prima mi chiede quanti chilometri voglio fare, la seconda quale è la mia età

//variabile chilometri
const kilo = Number(prompt('Indicare la lunghezza della tratta in Km'))
console.log(kilo);

//variabile età
const age = Number(prompt("Indicare l'età del passeggero"))
console.log(age);








//#2 - variabile prezzo del biglietto

/* the value of ticket price is an operation between travel kilometers that insert the user from kilo prompt and 0.21 euros that is the cost for single kilometer */
let price_ticket = kilo * 0.21;
// console.log(price_ticket, 'prezzo biglietto intero');





/* (QUESTO PASSAGGIO NON SERVE PERCHè I CALCOLI LI VADO A INSERIRE DIRETTAMENTE NEL COMPARATORE IF/ELSE RIDICHIARANDO LA VIARIABILE "price_ticket" CHE ESSENDO
UNA VIARIABILE "let" PUò ESSERE SOVRASCITTA E RICALCOLATA) */

//#3 - variabili per gli sconti

/* minorenni */
// const under_sale = price_ticket - ((price_ticket * 20) / 100);
// console.log(under_sale, 'prezzo biglietto under 18');

/* over 65 */
// const over_sale = price_ticket - ((price_ticket * 40) / 100);
// console.log(over_sale, 'prezzo biglietto over 65');







//#4 - if/else comparazione per gli sconti

if (age < 18) {
    /* se input età è minore di 18, stampo under_sale */
    price_ticket = price_ticket - ((price_ticket * 20) / 100);
} else if (age > 65) {
    /* se input età è maggiore di 65, stampo over_sale */
    price_ticket = price_ticket - ((price_ticket * 40) / 100);
} else {
    /* se input età è il restante (18<x<65), stampo price_ticket */
    price_ticket
}

console.log(price_ticket.toFixed(2));
