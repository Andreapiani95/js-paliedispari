const resultFromPrompt = prompt('Scegli tra pari o dispari');
console.log(resultFromPrompt);
    if (resultFromPrompt == 'pari'){
        let flagResult = 0;
    }
    else if (resultFromPrompt == 'dispari'){
        let flagResult = 1;
    }
    else{
        alert ('"pari" o "dispari"');
    }

const numberFromPrompt = parseInt(prompt ('Inserisci un numero tra 1 e 5'));
console.log(numberFromPrompt);

function evenOrOdd (inputNumber){
    parseInt(inputNumber);
    let computerNumber = Math.floor(Math.random()*5)+1;
    parseInt(computerNumber);
    console.log(computerNumber);
    let sum = 0;
    sum += inputNumber + computerNumber;
    console.log(sum);

    if (sum % 2 == 0){
        return 0;
    }
    else{
        return 1;
    }
}

evenOrOdd (numberFromPrompt);

if (flagResult = evenOrOdd){
    document.getElementById('output').innerHTML = 'Evviva, hai vinto!';
}
else{
    document.getElementById('output').innerHTML = 'Peccato, hai perso!';
}
