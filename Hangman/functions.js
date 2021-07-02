Hangman.prototype.solvePuzzle=function(guessed){
    let guessedLetter=guessed.toLowerCase()
    let wordMain=this.word.toLowerCase()
    let remainingGuesses=this.remGuess
        let isUniq=!this.guess.includes(guessedLetter)
        let corrGuess=wordMain.includes(guessedLetter)|guessedLetter===' '
        if(isUniq && corrGuess && remainingGuesses>0){
            this.guess.push(guessedLetter)
            }
        else if (!corrGuess && remainingGuesses>0){
            this.guess.push('*')
            remainingGuesses-=1
            //console.log(`You have ${remainingGuesses} guesses remaining`)
        }
        else if (remainingGuesses===0){console.log('GAME OVER')}
        if (isUniq){
            this.guessedWord+=guessedLetter}//not considering repeated letters
    this.remGuess=remainingGuesses
}
Hangman.prototype.getRes=function(){
    return `your guessed letters are ${this.guess}|${this.guessedWord} & you have ${this.remGuess} attempts remaining`
}
Hangman.prototype.checkGame=function(){
    let count=0
    this.guess.forEach((e)=>{
        if((e!=='*')&&(this.word.toLowerCase().includes(e))){
            count+=1
        }
    })
    console.log(count)
    if(count===this.word.length){
        return ` Your letters matched with ${this.word}`
    }
}
Hangman.prototype.renderDOM=function(Res,Check){
    const place=document.querySelector('#gameRes')
    place.innerHTML=''
    const newp=document.createElement('div')
    const txt=document.createElement('p')
    txt.textContent=Res
    newp.appendChild(txt)
    if(Check!==undefined){
        const txt=document.createElement('p')
        const head=document.createElement('h3')
        head.textContent='Hangman Game Successfull'
        txt.textContent=Check
        newp.appendChild(txt)
        newp.appendChild(head)
    }
    else if(this.remGuess===0){
        console.log('finished',this.remGuess)
        const dhead=document.createElement('h3')
        dhead.textContent='Game Over | You Lost !'
        newp.appendChild(dhead)
    }
    place.appendChild(newp)
}
window.addEventListener('keypress',function(e){
    const letter=String.fromCharCode(e.charCode)
    console.log(letter)
    game1.solvePuzzle(letter)
    let Res=game1.getRes()
    let Check=game1.checkGame()
    console.log(Res,Check)
    game1.renderDOM(Res,Check)
})
   



//game1.solvePuzzle('c')
///game1.solvePuzzle('w')
//game1.solvePuzzle('t')
//game1.solvePuzzle('q')
// gets the key pressed on webpage by user keyboard