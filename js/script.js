document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

/*dodane do implementacji guzikow*/
function playGame(playerInput){
    /* funkcja argMoveId -> getMoveName */
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
                return 'nożyce';
            } else { 
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    /* losowanie ruchu komputera */

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = randomNumber;
    printMessage('Mój ruch to: ' + getMoveName(argComputerMove));

    /* pobranie ruchu gracza */

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);*/
    let  argPlayerMove = playerInput
    printMessage('Twój ruch bratku to: ' + getMoveName(argPlayerMove));

    /* sprawdzenie w konsoli */
    console.log('moves:', argComputerMove, argPlayerMove);

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
