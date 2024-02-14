function hideElements(elementId){
    const hidden = document.getElementById(elementId);
    hidden.classList.add('hidden');

   
}
function shouElements(elementId){
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
}
function getRandomAlphabet(){
    
    const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetsString.split("");

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index]; 
    return alphabet;
    
}

function getTextElementById(textElementId){
    const element = document.getElementById(textElementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementById(elementId, value){
const element = document.getElementById(elementId);
     element.innerText = value;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackground(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}