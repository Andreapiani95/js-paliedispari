const wordFromPrompt = prompt ('Inserisci una parola');
console.log(wordFromPrompt);

//1.
const lettersFromPrompt = wordFromPrompt.split("");
    console.log(lettersFromPrompt);

//2.
const lettersFromPromptBackwards = lettersFromPrompt.reverse();
    console.log(lettersFromPromptBackwards);

    for (i = 0; i < lettersFromPrompt.length; i++){
        
       if(lettersFromPrompt[i] == lettersFromPromptBackwards[i]){
            document.getElementById('output').innertext = "La parola è palindroma";
       }
       else {
            document.getElementById('output').innerhtml = "La parola NON è palindroma";
       }
       console.log(lettersFromPrompt[i], lettersFromPromptBackwards[i]);
    
        
    };






    function isPalindrome (){
    // Trasformo la parola in un array
    // Inverto l'ordine
    // Controllo che ciascun index dei 2 array sia uguale con un loop
    
        

    }