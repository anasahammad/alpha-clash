

function handleEvent(event){
    const playerpressed = event.key;
    console.log(event)

    // expected press
    const result = document.getElementById('result');
    const currentResult = result.innerText;
    const expectedKey = currentResult.toLowerCase();

    if(playerpressed === "Escape"){
        gameOver();
    }
    if(playerpressed === "Enter"){
        play();
    }
    if(playerpressed === expectedKey){
        
        // const currentScoreElemet = document.getElementById('curent-score');
        // const currentScoreText = currentScoreElemet.innerText;
        // const currentScore = parseInt(currentScoreText);

        const currentScore = getTextElementById('curent-score');
        // update score

        let updateScore = currentScore + 1;
        setTextElementById('curent-score', updateScore);
        removeBackground(expectedKey);
        continueGame();
       
    }
    else{
        

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        
       const currentLife = getTextElementById('current-life');
       if(currentLife !== 0){
        let updateLife = currentLife - 1;
        setTextElementById('current-life', updateLife);
       
       }else{
        
        gameOver();
        
        
       }
        
    }
}
// keptured keyboard key
document.addEventListener('keyup', handleEvent);


function continueGame(){
  
   let alphabet = getRandomAlphabet();
   const result = document.getElementById('result');
   result.innerHTML = alphabet;
   setBackgroundColor(alphabet);
   

   
}

function play(){
    hideElements('home');
    shouElements('game-section');

    setTextElementById('current-life', 5)
    continueGame();
    
}

function gameOver(){
    hideElements('game-section');
    shouElements('score-section');
    const score = getTextElementById('curent-score');
    setTextElementById('score-value', score)
    setTextElementById('curent-score', 0)
    const currentAlphabet = document.getElementById('result');
    const currentText = currentAlphabet.innerText;
    removeBackground(currentText);
   

    
}


