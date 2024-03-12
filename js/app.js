//PALI 

//
// Funzioni
//
function isPalyndrome(original) {
    let reverse = '';

    // Construisci l'inverso della striga passasta
    for (let i = original.length - 1; i >= 0; i--) {
        reverse += original[i];
    }

    // Controllo se l'inverso della stringa è uguale alla stringa passata
    if (reverse === original) {
        return true; // Console.log('palindromo');
    } else {
        return false;
    }
}

function sumn(parameter1, parameter2) {
    let result = parameter1 + parameter2;
    return result
}

// Funzione che mi dice se è pari
function isEven(number) {
    let rest = number % 2;
    if (rest === 0) { // se è pari
        return true; // restituisco true
    } else { // se è dispari
        return false; // restituisco false
    }
}


//
// Main
//

//chiedere all'utente una parola 
//creare una funzione per verificare se é palindroma 
// se é palidroma return = true

//se non lo é return = false



// let inputUser = prompt('inserisci una parola');
// let risultato = isPalyndrome(inputUser);

// if (risultato) {
//     console.log('Palindromo');
// }



// E DISPARI
//chiedo all'utente di scegliere tra pari e dispari e di inserire un  numero tra 1 e 5 
//genero un numero da 1 a 5 tramite (function) 
//sommo i due numeri (function)
//stabiliamo se la somma é pari o dispari
//dichiariare il vincitore

let userWord = prompt('scegli tra pari o dispari');
let userNumber = parseInt(prompt('inserisci un numero tra 1 e 5'));
const randomNumber = Math.floor(Math.random() * 5) + 1;
const resultSumn = sumn(userNumber, randomNumber);
const pari = isEven(resultSumn);

if (resultSumn === true && userWord === 'pari') {// se il risultato é pari e io ho scelto pari
    console.log('Pari! Hai vinto!'); // ho vinto
} else if (resultSumn === false && userWord === 'dispari' ) { //se il risultato non é pari (dispari) e ho scelto dispari
    console.log('Dispari! Hai vinto!'); // Ho vinto
} else { // Altrimenti
    console.log('Hai perso ')
}

console.log(resultSumn)

//