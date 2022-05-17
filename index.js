function get_number(prompt) {
    let valid_input = false;
    let maxNumber, input;
    while(!valid_input) {
        input = window.prompt(prompt);

        maxNumber = Number(input);

        if(maxNumber!= NaN && maxNumber > 0) {
            valid_input = true;
        } 
    }
    return maxNumber;
    // prompt for max number & re-prompt for invalid entries
}

let num = Math.round(get_number('Enter the your max number!'));
// if decinmal number is provided, the number is rounded

let randomNum = Math.floor(Math.random() * num) + 1
// select random number from 1 to max number

const button = document.getElementById('guess_button')
button.addEventListener('click', checkInput)

let tries = []
//every try will be pushed into this empty array; keeps track of guesses

function checkInput(e){
    e.preventDefault()
  
    let guess = Number(document.getElementById('guess').value)
    let p = document.getElementById('message')

    if (isNaN(guess)){
        alert('That is not a number!');
        // message for NaN
    } else if( guess < 1 || guess > num){
        alert('That number is not in range, try again.')
        // message for out of range number
    } else if (tries.includes(guess)) {
       p.innerText = "You guessed that already, try again";
    //    prevents duplicates
    } else if( guess > randomNum){
        tries.push(guess)
        p.innerText = 'No, try a lower number.'

    } else if ( guess < randomNum){
        tries.push(guess)
        p.innerText = "No, try a higher number."
      

    } else if(guess === randomNum){
        tries.push(guess)
        let numOfGuess = tries.length
        // counts the amount of tries; uses length property
        p.innerText = "You got it! It took you " + numOfGuess + " tries and your guesses were " + tries + ".";

    } 
}
