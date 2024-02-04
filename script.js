const kilometres = Number(prompt('Please insert how many kilometers you will travel'));
//chiediamo quanti chilometri farà l'utente
const Age = Number(prompt('Please insert your age'));
//chiediamo l'età all'utente
const cost = 0.21;
//creiamo costante per definire prezzo a KM 

console.log(kilometres, Age, cost);
//mandiamo in console per verificare corretto funzionamento di quanto scritto

const price = kilometres * cost
//il prezzo saranno i chilometri percorsi moltiplicati per 0,21

console.log(price)
//mandiamo in console per verificare corretto funzionamento

let discount 
//assegniamo variabile di tipo let perchè lo sconto può variare

if(Age < 18)
{
    discount = price * 20 / 100
    //se l'utente è minore di diciotto anni avrà lo sconto del 20%
}
else if(Age > 65)
{
    discount = price * 40 / 100
    //se l'utente è maggiore di sessantacinque anni avrà sconto del 40%
}
else
{
    discount = 0
    //chi è escluso dalla precendenti condizioni non ha sconti sul biglietto
}

const total = price - discount 
//assegniamo variabile per prezzo totale del biglietto 

document.getElementById('kilometers').innerHTML = kilometres + ' km'
//mandiamo in pagina quanti chilometri deve percorrere l'utente

document.getElementById('Age').innerHTML = Age + ' Years old'
//mandiamo in pagina quanti anni ha l'utente

document.getElementById('price').innerHTML = price.toFixed(2) + ' Euro'
//mandiamo in pagina il prezzo del biglietto

document.getElementById('discount').innerHTML = discount.toFixed(2) + ' Euro'
//mandiamo in pagina quanto sconto ha l'utente

document.getElementById('total').innerHTML = total.toFixed(2) + ' Euro'
//mandiamo in pagina il prezzo totale del biglietto