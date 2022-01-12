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
const user=document.getElementById('user-ticket')
const discount=document.getElementById('discount');


const buttonGen=document.getElementById('genera');
buttonGen.addEventListener('click', function(){
    const nameValue=userName.value;
    const kmValue=parseInt(userKm.value);
    let ageValue=parseInt(userAge.value);
    
    console.log(nameValue, kmValue, ageValue);
    
    //calcolo prezzo del biglietto
    let ticketPrice = kmValue * 0.21;
    
    //stampo nome utente
    user.innerText=nameValue
    
    //calcolo discount
    discount.innerText='Biglietto standard'
    
    
    if(ageValue){
        if(ageValue == 18){
            const discountUnderAge=(ticketPrice / 100) * 20;
            ticketPrice = ticketPrice - discountUnderAge;
            ticketPrint.innerText=ticketPrice.toFixed(2)
            console.log(ticketPrice) 
            
            //stampo tipo di biglietto
            discount.innerText='Biglietto minorenni'
            
            
        } else if (ageValue == 65){
            const discountOverAge = (ticketPrice / 100) * 40;
            ticketPrice = ticketPrice - discountOverAge;
            ticketPrint.innerText=ticketPrice.toFixed(2)
            console.log(ticketPrice) 

            //stampo tipo di biglietto
            discount.innerText='Biglietto senior'
            
        }
    }

    //stampo prezzo biglietto
    ticketPrint.innerText=ticketPrice.toFixed(2)
    console.log(ticketPrice) 
        
})
    