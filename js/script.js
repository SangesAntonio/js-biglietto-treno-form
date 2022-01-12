console.log('JS OK!')
/*Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

//prendere i dati dall'utente

const userName=document.getElementById('user-name');
const userKm=document.getElementById('user-km');
const userAge=document.getElementById('inputState');

//elementi nel DOM da stampare
const ticketPrint=document.getElementById('ticket-price')

const buttonGen=document.getElementById('genera');
let namePrint=''
let kmPrint=''
let agePrint=''

buttonGen.addEventListener('click', function(){
        namePrint=userName.value
        kmPrint=userKm.value
        agePrint=userAge.value
        console.log(namePrint, kmPrint, agePrint)
    
        //! validazione numero km
        if(isNaN(kmPrint)){
            alert('Non è un numero');
        }

        //calcolo prezzo del biglietto
        let ticketPrice = kmPrint * 0.21;
        console.log(ticketPrice)

        //stampo prezzo biglietto
        ticketPrint.innerText=ticketPrice
        
        
        
        
    })
    