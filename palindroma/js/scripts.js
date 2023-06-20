const wordFromPrompt = prompt ('Inserisci una parola');
console.log(wordFromPrompt);


function isPalindrome(inputWord){
    // Trasformo la parola in un array
    // Inverto l'ordine
    // Controllo che ciascun index dei 2 array sia uguale con un loop
    const lettersFromPrompt = inputWord.split("");
    console.log(lettersFromPrompt);

    const lettersFromPromptBackwards = lettersFromPrompt.reverse();
    console.log(lettersFromPrompt);

    /*
    const inputWordBackwards = lettersFromPromptBackwards.join("");

    if(inputWordBackwards == inputWord){        
        document.getElementById('output').innerText = "La parola è palindroma";
    }
    else {
        document.getElementById('output').innerText = "La parola NON è palindroma";
    }
    */

    for (i = 0; i < lettersFromPrompt.length; i++){
        
        if(lettersFromPrompt[i] == lettersFromPromptBackwards[i]){
             document.getElementById('output').innerText = "La parola è palindroma";
            }
        else {
             document.getElementById('output').innerText = "La parola NON è palindroma";
        }
        console.log(i,lettersFromPrompt[i], lettersFromPromptBackwards[i]);
         
     };
        

}

isPalindrome(wordFromPrompt);