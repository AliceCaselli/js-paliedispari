//chiedere all'utente di inserire una parola
//creare una funzione per capire se la parola è palindroma.
//------------------------------------
//creare un elemento di input in html ed acquisirlo con una variabile in js
//creare un button in htlm ed acquisirlo con una variabile in js
// --- 
//creo una funzione per verificare se la parola è pari o dispari
//creo una funzione per verificare se la pari è palindroma
//creo una funzione per verificare se la dispari è palindroma

//aggiungere un evento al click del button in cui viene verificato se la parola inserita è palindroma o meno
//controllo che le lettere della parola siano uguali partendo dalla prima e l'ultima, andando verso il centro
//  ?SE la parola è pari
//   -uso la funzione del pari
//  :ALTRIMENTI
//   -uso la funzione del dispari

//restituisco in pagina il risultato

//creare un elemento di input in html ed acquisirlo con una variabile in js
let wordEl = document.getElementById("user-input");

//creare un button in htlm ed acquisirlo con una variabile in js
let btnSendEl = document.getElementById("btn-invia");

//restituisco in pagina il risultato
let resultEl = document.getElementById("result");

//creo una funzione per verificare se la parola è pari o dispari
function isEvenOrOdd(newWord){

    if(newWord.length % 2 == 0){
        
        return true;

    }else{

        return false;
    }
}

//creo una funzione per verificare se la pari è palindroma
function isAnEvenPalindrome(evenWord, outputResult){

    let isPalindrome = true;

    for( let i = 0; i < evenWord.length / 2; i++) {

        if(evenWord[i] != evenWord[evenWord.length - (i + 1)]){

            isPalindrome = false;
        }
    }

    if(isPalindrome){

        outputResult.innerText = evenWord + " : è un palindromo!";

    } else {

        outputResult.innerText = evenWord + " : non è un palindromo!";
    }
}

//creo una funzione per verificare se la dispari è palindroma
function isAnOddPalindrome(oddWord, outputResult){

    let isPalindrome = true;

    for( let i = 0; i != oddWord.length - (i + 1); i++) {        

        if(oddWord[i] != oddWord[oddWord.length - (i + 1)]){

            isPalindrome = false;

        }
    }

    if(isPalindrome){

        outputResult.innerText = oddWord + " : è un palindromo!";

    } else {

        outputResult.innerText = oddWord + " : non è un palindromo!";
    }
}

//aggiungere un evento al click del button in cui viene verificato se la parola inserita è palindroma o meno
btnSendEl.addEventListener('click', function() {

    let word = wordEl.value;

    //controllo per inserimento valore 0
    if(word.length == 0) {

        resultEl.innerText = "Inserisci una parola (o un numero)";

    } else if(isEvenOrOdd(word)) {
    
        isAnEvenPalindrome(word, resultEl);
    
    } else {

        isAnOddPalindrome(word, resultEl);
    } 
})





//creare button pari in html
//creare button dispari in html
//---
//creare una funzione che generi un numero da 1 a 5 
//creare una funzione che verifichi se la somma del risultato è pari o dispari
//creare una variabile che memorizzi la somma dei numeri
//---
//creare event listner click con button pari
//variabile per acquisizione del numero al click
//genera un numero casuale per il pc
// ?SE la somma di N utente e N pc è pari
//  -hai vinto
// :ALTRIMENTI 
//  -hai perso
//---
//creare event listner click con button dispari
//variabile per acquisizione del numero al click
//genera un numero casuale per il pc
// ?SE la somma di N utente e N pc è dispari
//  -hai vinto
// :ALTRIMENTI 
//  -hai perso



let pariBtnEl = document.getElementById("pari");

let dispariBtnEl = document.getElementById("dispari");

let userNumber = document.getElementById("user-number");

let outputEL = document.getElementById("output");


//creare una variabile che memorizzi la somma dei numeri
let somma = 0;


pariBtnEl.addEventListener('click', function(){
    
    outputEL.innerText = ("Il numero immesso è " + userNumber.value);
    let rNum = randomNumber(1, 5);
    outputEL.innerText += ("Il numero generato casualmente è " + rNum);
    somma = rNum + parseInt(userNumber.value);
    outputEL.innerText = ("La somma dei due numeri è " + somma)

    if(isOddOrEven(somma)){
        outputEL.innerHTML = 

        `Il numero immesso è ${userNumber.value} <br>
        Il numero generato casualmente è ${rNum} <br>
        La somma dei due numeri è ${somma} <br>

        HAI VINTO!`
    }else{

        outputEL.innerHTML = 
        `Il numero immesso è ${userNumber.value} <br>
        Il numero generato casualmente è ${rNum} <br>
        La somma dei due numeri è ${somma} <br>

        HAI PERSO!`
    }


})






//creare una funzione che generi un numero da 1 a 5 
function randomNumber(min, max){

    let random = Math.floor (Math.random () * (max - min) + min);

    return random
};

//creare una funzione che verifichi se la somma del risultato è pari o dispari
function isOddOrEven(somma){


    if(somma % 2 == 0){
        
        return true;

    }else{

        return false;
    }
};