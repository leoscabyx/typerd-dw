/* 
Ejercicio: Typer D


*/


console.group("Typer D");

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function randomWords(arr) {
    // console.log(Math.random() * (arr.length - 1));
    let indiceAleatorio = Math.round(Math.random() * (arr.length - 1));
    console.log(indiceAleatorio);
    return arr[indiceAleatorio];
}

// randomWords(words)

let palabraAleatoria = randomWords(words);
let time = 10;
let score = 0;

function addToDOM(wordAleatoria) {
    $h1 = document.querySelector('#randomWord');
    // $timeSpan = document.querySelector('#timeSpan');
    $h1.textContent = wordAleatoria;
    // setInterval(() => {
    //     time -= 1;
    //     timeSpan.textContent = time + 's';
    // }, 1000)
}

addToDOM(palabraAleatoria);

$inputText = document.querySelector('input[type="text"]');

$inputText.addEventListener('input', (e) => {
    // console.log($inputText.value);
    let palabraIngresada = $inputText.value;
    console.log(palabraIngresada === palabraAleatoria);
    if(palabraIngresada === palabraAleatoria){
        time += 3;
        $inputText.value = '';
        palabraAleatoria = randomWords(words);
        addToDOM(palabraAleatoria);
        updateScore();
    }
})

let timeInterval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo() {
    if(time === 0) {
        clearInterval(timeInterval);
        gameOver();
        return
    }
    $timeSpan = document.querySelector('#timeSpan');
    time -= 1;
    timeSpan.textContent = time + 's';

}

function updateScore() {
    score += 1;
    $score = document.querySelector('#score');
    $score.textContent = score
}

function gameOver() {
    $endGameOver = document.querySelector('#end-game-container');
    $main = document.querySelector('.main');

    $h3 = document.createElement('h3');
    $h3.textContent = 'El juego ha terminado';
    $p = document.createElement('p');
    $p.textContent = `Puntaje final: ${score}`;
    $button = document.createElement('button');
    $button.textContent = 'Volvé a empezar';
    $button.setAttribute('onclick', 'location.reload()');

    $endGameOver.appendChild($h3);
    $endGameOver.appendChild($p);
    $endGameOver.appendChild($button);

    $main.style.display = 'none';
    $endGameOver.style.display = 'flex';
    setTimeout(()=> $endGameOver.style.opacity = 1, 2000 )
}



console.groupEnd();


