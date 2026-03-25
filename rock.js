let playerScore = 0;
let computerScore = 0;
const options = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = options[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice) result = "Draw";
        else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = "You Win!";
            playerScore++;
        } else {
            result = "Computer Wins!";
            computerScore++;
        }
        document.getElementById('results-msg').textContent = `${result} (You: ${playerChoice} vs Comp: ${computerChoice})`;
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
    });
});
