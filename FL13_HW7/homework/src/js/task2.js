function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (confirm('Do you want to play a game?') === true) {

    const MAX_PRIZE = 100;
    const MIDDLE_PRIZE = 50;
    const MIN_PRIZE = 25;

    let val = startGame([MAX_PRIZE, MIDDLE_PRIZE, MIN_PRIZE]);

    alert('Thank you for your participation. Your prize is: ' + val + ' $');

} else {
    alert('You did not become a billionaire, but can.');
}

function startGame(piseConfig) {
    let i = 1;
    let prise = 0;
    let cicle = true;

    while (cicle === true) {
        prise += playGame(piseConfig, i, prise) * i;

        if (prise !== 0) {
            alert('Congratulation, you won! Your prize is: ' + prise + ' $.');
        } else {
            alert('Thank you for your participation. Your prize is: 0 $');
        }

        if (!confirm('Do you want to play again?')) {
            return prise;
        }
        i++;
    }
}

function playGame(piseConfig, i, prise) {

    const MAX_RAND = 5;
    const GAME_CICLE = 4;

    let ballNum = randomNum(0, MAX_RAND * i);
    let countOfTry = 1;

    while (countOfTry < GAME_CICLE) {
        let userAnswer = prompt(
            'Choose a roulette pocket number from 0 to ' + MAX_RAND * i +
            '\nAttempts left: ' + (GAME_CICLE - countOfTry) +
            '\nTotal prize: ' + prise +
            '\nPossible prize on current attempt: ' + piseConfig[countOfTry - 1] * i
        );

        if (Number(userAnswer) === ballNum) {
            return piseConfig[countOfTry - 1]
        }
        countOfTry++;
    }

    return 0;
}



