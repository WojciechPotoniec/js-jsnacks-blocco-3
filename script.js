/* snack1
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


const numbers = [];

let sum = 0;
while (sum < 50) {
    const newNumber = parseInt(prompt("Inserisci un numero casuale"));
    if(!isNaN(newNumber)){
        sum += newNumber;
        numbers.push(newNumber);
    }
}

console.log('numbers:', numbers);
console.log('Total sum: ', sum);
*/

/* Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
*/

/*
const userNumber = parseInt(prompt('Inserisci un numero'));

for (let index = 0; index < userNumber; index++) {
    console.log(randomNumberArray());
}

function randomNumberArray(){
    const newArray = [];
    for (let index = 0; index < 10; index++) {
        newArray.push(getRndInteger(1,100));
    }
    return newArray;
}
*/

