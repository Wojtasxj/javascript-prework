document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

function playGame(playerInput){
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
    const argComputerMove = randomNumber;
    printMessage('Mój ruch to: ' + getMoveName(argComputerMove));
    const argPlayerMove = playerInput
    printMessage('Twój ruch bratku to: ' + getMoveName(argPlayerMove));

    function displayResult(computerMove, playerMove) {
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

        if (playerMove === computerMove) {
            printMessage('Remis');
        } else if ((playerMove === 1 && computerMove === 3) ||
                   (playerMove === 2 && computerMove === 1) ||
                   (playerMove === 3 && computerMove === 2)) {
            printMessage('Ty wygrywasz!');
        } else {
            printMessage('Komputer wygrywa');
        }
    }
    
    displayResult(getMoveName(argComputerMove), getMoveName(argPlayerMove));
}
