
let scores, roundScore, activePlayer, gamePlaying;

const diceDOM = document.querySelector('.dice');
const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const player0Pannel = document.querySelector('.player-0-panel');
const player1Pannel = document.querySelector('.player-1-panel');

initNewGame();

function initNewGame() {
    gamePlaying = true;
    diceDOM.style.display = 'none';

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    player0Pannel.classList.remove('winner', 'active');
    player1Pannel.classList.remove('winner', 'active');
    player0Pannel.classList.add('active');
};

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
    
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
    
        document.getElementById('score-' +  activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >=20) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            
            diceDOM.style.display = 'none';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', initNewGame);

function nextPlayer() {
    diceDOM.style.display = 'none';
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    current0.textContent = '0';
    current1.textContent = '0';

    player0Pannel.classList.toggle('active');
    player1Pannel.classList.toggle('active');
};

