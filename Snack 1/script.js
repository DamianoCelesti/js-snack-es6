
//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


//creo un array di oggetti
const bici = [
    {
        'nome': 'rosso', peso: 8
    },
    {
        'nome': 'giallo', peso: 4
    },
    {
        'nome': 'blu', peso: 11
    },
    {
        'nome': 'verde', peso: 1
    },
    {
        'nome': 'bianco', peso: 10
    },
    {
        'nome': 'nero', peso: 2
    },
]


// creo ciclo for dove accedo a ogni elemento dell'array
let pesoMinore = bici[0].peso;
let nomeBici = bici[0].nome;
for (let i = 0; i < bici.length; i++) {

    //faccio il confronto e se vero salvo nella variabile
    if (bici[i].peso < pesoMinore) {
        pesoMinore = bici[i].peso;
        nomeBici = bici[i].nome;
        
    }
}
console.log(nomeBici, pesoMinore);

// seleziono l'elemento e aggiungo il risultato a schermo
document.getElementById('biciStampa').innerHTML = `${nomeBici} ${pesoMinore}`;