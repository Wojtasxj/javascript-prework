{
    const playRock = () => {
        playGame(1);
    };
    
    const playPaper = () => {
        playGame(2);
    };
    
    const playScissors = () => {
        playGame(3);
    };
    
    document.getElementById('play-rock').addEventListener('click', playRock);
    document.getElementById('play-paper').addEventListener('click', playPaper);
    document.getElementById('play-scissors').addEventListener('click', playScissors);
    
    function playGame(playerMove){
        clearMessages();
    
        function getMoveName(argMoveId){
            switch(argMoveId){
                case 1:
                    return 'kamień';
                case 2:
                    return 'papier';
                case 3:
                    return 'nożyce';
                default:
                    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                    return 'nieznany ruch';
            }
        }
    
        const randomNumber = Math.floor(Math.random() * 3 + 1);
    
        function displayResult(randomNumber, playerMove) {
            printMessage('Zagrałem ' + getMoveName(randomNumber) + ', a Ty ' + getMoveName(playerMove));
    
            if (playerMove === randomNumber) {
                printMessage('Remis');
            } else if ((playerMove === 1 && randomNumber === 3) ||
                    (playerMove === 2 && randomNumber === 1) ||
                    (playerMove === 3 && randomNumber === 2)) {
                printMessage('Ty wygrywasz!');
            } else {
                printMessage('Komputer wygrywa');
            }
        }
        
        displayResult(randomNumber, playerMove);
    }
}