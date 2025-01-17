// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creo funzione generica per generare numeri random
function numeriRandom(min, max) {
    return Math.floor(Math.random()* (max - min +1)) + min;
}
// creo un array di oggetti

const squadre = [
    {
        'nome': 'inter', gol: 0, falli: 0
    },
    {
        'nome': 'juve', gol: 0, falli: 0
    },
    {
        'nome': 'milan', gol: 0, falli: 0
    },
    {
        'nome': 'arsenal', gol: 0, falli: 0
    },
    {
        'nome': 'lecce', gol: 0, falli: 0
    },
    {
        'nome': 'roma', gol: 0, falli: 0
    },
]


// uso il foreach per modificare i miei array originali
squadre.forEach(squadra => {
    squadra.gol = numeriRandom(4, 110);
    squadra.falli = numeriRandom(3, 25);
});

console.log(squadre);


// creo un nuovo array con .map e metto solo i nomi e i falli
const nomiEFalli = squadre.map(squadra => ({ //squadra è l'argomento della funzione, ogni elemento dell'array viene passato come argomento della funzione
    
    nome: squadra.nome,
    falli: squadra.falli
}));

console.log("agg", nomiEFalli);