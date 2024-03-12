//PALI 

//chiedere all'utente una parola 
//creare una funzione per verificare se é palindroma 
// se é palidroma return = true

//se non lo é return = false



let original = prompt('');
let reverse = '';
function isPalyndrome(original, reverse){



    for (let i = original.length - 1; i >= 0; i--) {

        reverse += original[i];

    }
    if (reverse === original) {

        console.log(true)



    } else {
        console.log(false)

    }

    
}

console.log(reverse)
        



// E DISPARI
