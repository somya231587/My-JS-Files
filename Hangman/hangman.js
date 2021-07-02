const Hangman=function(word,chance){
    this.word=word
    this.remGuess=chance //if same letters repeated chance doesnt reduce
    this.guess=[] //to store the uer input letters
    this.guessedWord='' 
}

const gameWord='CAST'
const turns=4
const game1=new Hangman(gameWord,turns)


