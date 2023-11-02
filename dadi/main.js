const btn = document.getElementById("playBtn");
const yourMessage = document.getElementById("yourResult");
const pcMessage = document.getElementById("pcResult");
btn.addEventListener("click", function() {
    const playerNumber = Math.floor(Math.random() * 6) + 1;
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    yourMessage.innerHTML = ( `Il tuo risultato è ${playerNumber}` );
    pcMessage.innerHTML = ( `Il risultato dell'avversario è ${pcNumber}` );
    if (playerNumber > pcNumber) {
        document.getElementById("endGame").innerHTML = ("Hai vinto!");
        document.getElementById("endGame").style.color = "green";
    } else if (playerNumber < pcNumber){
        document.getElementById("endGame").innerHTML = ("Hai perso!");
        document.getElementById("endGame").style.color = "red";
    } else {
        document.getElementById("endGame").innerHTML = ("Pareggio!");
        document.getElementById("endGame").style.color = "inherit";
    }
});