console.log('JS OK');

/*chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

// ? STEPS
/* 
1-Chiedere all'utente il numero di chilometri
2-Chiedere all'utente l'età
3-Calcolare prezzo del biglietto
 3a-calcolare il prezzo del biglietto se l'età è sotto i 18 anni -20%
 3b-calcolare il prezzo del biglietto se l'età è sopra 65 anni -40%
4-Stampare il risultato con massimo due decimali */


//! 1-Chiedere all'utente il numero di chilometri
const userKilometers = parseInt(prompt('Quanti chilometri vuoi percorrere?', '1750').trim());

if(isNaN(userKilometers)){
    alert('Non è un numero');
}
document.getElementById('chilometri').innerText = `Distanza percorsa: ${userKilometers}km`;
console.log(`userKilometers:  ${userKilometers}`);

//! 2-Chiedere all'utente l'età
const userAge = parseInt(prompt('Quanti anni hai?', '19').trim());

if(isNaN(userAge)){
    alert('Non è un numero');
}
document.getElementById('eta').innerText = `La tua età: ${userAge}anni`;
console.log(`userAge:  ${userAge}`);

//! 3-Calcolare prezzo del biglietto
let ticketPrice = userKilometers * 0.21;

//! calcolare il prezzo del biglietto se l'età richiede uno sconto

//calcolo dello sconto
if(userAge < 18){
    const discountUnder = (ticketPrice / 100) * 20;
    ticketPrice = ticketPrice - discountUnder;
    document.getElementById('costo').innerText = `Costo Totale per minorenni: ${ticketPrice}$`;

} else if (userAge > 65){
    const discountAbove = (ticketPrice / 100) * 40;
    ticketPrice = ticketPrice - discountAbove;
    document.getElementById('costo').innerText = `Costo Totale per anziani: ${ticketPrice}$`;

}

console.log(`ticketprice:  ${ticketPrice}`);

//! Stampa il prezzo del biglietto 
document.getElementById('costo').innerText = `Costo Totale: ${ticketPrice}$`;
