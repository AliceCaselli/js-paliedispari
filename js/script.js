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


btnSendEl.addEventListener('click', function() {

    let word = wordEl.value;

    if(word.length == 0) {
        resultEl.innerText = "Inserisci una parola (o un numero)";
    } else if(isEvenOrOdd(word)) {
    
        isAnEvenPalindrome(word, resultEl);
    
    } else {

        isAnOddPalindrome(word, resultEl);
    } 
})


