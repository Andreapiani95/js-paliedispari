const resultFromPrompt = prompt('Scegli tra pari o dispari');

const numberFromPrompt = prompt ('Inserisci un numero tra 1 e 5');

function evenOrOdd(inputResult, inputNumber){
    if (inputResult = 'pari'){
        let flagResult = 0;
    }
    else if (inputResult = 'dispari'){
        let flagResult = 1;
    }
    else{
        alert('inserisci pari oppure dispari')
    }

    let computerNumber = Math.floor(Math.random()*5)+1;
    let sum = computerNumber + inputNumber;

    if (sum % 2 == 0){
        let flagSum = 0;
    }
    else{
        let flagSum = 1;
    }

    if (flagResult == flagSum){
        document.getElementById('output').innerHTML = 'Evviva, hai vinto!';
    }
    else{
        document.getElementById('output').innerHTML = 'Peccato hai perso!';
    }

}