var Display = function(displayElement){
  var display = displayElement;
  function setText(message){
    display.innerHTML = message;
  }
  return {setMessage: setText};
};

function isValid(button){
  return button.innerHTML.length == 0;
}

function setMark(btn, mark){
  btn.innerHTML = mark;
}

function checkForWinner(squares, players, currentTurn){
  if (squares[0].innerHTML == players[currentTurn] && squares[1].innerHTML == players[currentTurn] && squares[2].innerHTML == players[currentTurn])
      return true;
  if (squares[3].innerHTML == players[currentTurn] && squares[4].innerHTML == players[currentTurn] && squares[5].innerHTML == players[currentTurn])
      return true;
  if (squares[6].innerHTML == players[currentTurn] && squares[7].innerHTML == players[currentTurn] && squares[8].innerHTML == players[currentTurn])
      return true;
  if (squares[0].innerHTML == players[currentTurn] && squares[3].innerHTML == players[currentTurn] && squares[6].innerHTML == players[currentTurn])
      return true;
  if (squares[1].innerHTML == players[currentTurn] && squares[4].innerHTML == players[currentTurn] && squares[7].innerHTML == players[currentTurn])
      return true;
  if (squares[2].innerHTML == players[currentTurn] && squares[5].innerHTML == players[currentTurn] && squares[8].innerHTML == players[currentTurn])
      return true;
  if (squares[0].innerHTML == players[currentTurn] && squares[4].innerHTML == players[currentTurn] && squares[8].innerHTML == players[currentTurn])
      return true;
  if (squares[2].innerHTML == players[currentTurn] && squares[4].innerHTML == players[currentTurn] && squares[6].innerHTML == players[currentTurn])
      return true;

}
function isBoardFull(squares){
  for(var i = 0, len = squares.length; i < len;  i++){
    if(squares[i].innerHTML.length == 0)
      return false;
  }
  return true;
}

function main(){
  var squares = document.querySelectorAll("#game button");
  var players = ["X", "O"];
  var currentTurn = 0;
  var isGameOver = false;
  var display = new Display(document.querySelector("#gameActionDisplay"));
  display.setMessage("<br/>Joueur " + players[currentTurn] + " c'est ton tour.");
  for(var i = 0, len = squares.length; i < len;  i++){
    squares[i].addEventListener("click", function(){
      if(isGameOver)
        return;
      if(!isValid(this)){
        display.setMessage("emplacement deja utiliser par un autre joueur");
      } else {
        setMark(this, players[currentTurn]);
        isGameOver = checkForWinner(squares, players, currentTurn);

        if(isGameOver){
          display.setMessage("Joueur " + players[currentTurn] + ' a gagné!<br/><a href="index.html">Rejouer</a>');
          return;
        }
        if(isBoardFull(squares)){
          display.setMessage('Match nul!<br/><a href="index.html"> Rejouer</a>');
          return;
        }
        currentTurn = currentTurn ^ 1;
        display.setMessage("Joueur " + players[currentTurn] + " à votre tour !");
      }
    });
  }
}
main();