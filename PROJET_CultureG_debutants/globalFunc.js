//GLOBAL FUNCTION
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function randomUniqueJSON() {
    if(questionNumber == arrayObjectJSON.length - 1) questionNumber = 0
    let indexJSON = getRandomInt(0,arrayObjectJSON.length-questionNumber);
    fetchUniqueJSON = arrayObjectJSON.splice(indexJSON,1);
    arrayObjectJSON.push(fetchUniqueJSON);
    questionNumber++;
    return indexJSON;
}

function getColorGreen() {
    this.style.background = "lightgreen";
}

function getColorRed() {
    this.style.background = "tomato";
}

function getColorYellow() {
    this.style.background = "navajowhite";
}

function removeColor() {
    this.style.background = "white";
}

function showResult() {
    let good = null;
    let wrong  = null;
    if(goodAnswerCounter > 1) good = "bonnes réponses";
    else good = "bonne réponse";

    if(wrongAnswerCounter > 1) wrong = "mauvaises réponses";
    else wrong = "mauvaise réponse"

    let end = `Votre score final : \n - ${goodAnswerCounter} ${good} \n - ${wrongAnswerCounter} ${wrong}`;
    window.alert(end);
}

function homePage(){

    showResult();
    removeGiveUpButton();
    removePauseButton();
    arrayStorage.length = 0;
    console.log(arrayStorage)
    localStorage.clear;
    wrongAnswerCounter = 0
    goodAnswerCounter = 0
    clearInterval(myInterval);
    myInterval = null;
    pause = false;
    addSecond = 0, subSecond = 0;
    gameMode = 0;
    tmp.textContent = "En attente du timer...";
    paragraph.innerHTML = ('');
    fetchHome.innerHTML = homeClone.innerHTML;
    challenge_1 = document.querySelector('#button1');
    challenge_1.setAttribute("style", "background-color:white");
    challenge_1.addEventListener('mouseover', getColorRed);
    challenge_1.addEventListener('mouseout', removeColor);
    challenge_1.addEventListener('click', initC1);

    challenge_2 = document.querySelector('#button2')
    challenge_2.setAttribute("style", "background-color:white");
    challenge_2.addEventListener('mouseover', getColorRed);
    challenge_2.addEventListener('mouseout', removeColor);
    challenge_2.addEventListener('click', initC2);
}