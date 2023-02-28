const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;

function randomSquare(){ //selects the random square where the mole will be.
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => { //score
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;}
    })
})


function moveMole(){ //timer
    timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);