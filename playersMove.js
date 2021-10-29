function playersMove(cellclicked){
  var cellvalue = cellclicked.getAttribute("data-cellclicked");
  var playerOne = true;;
  var Winner = false;

/* while(Winner != true)
 {*/
   

  if(playerOne == true)
  {
   document.getElementById(cellvalue).innerHTML='X';
  }
  else
  {
   document.getElementById(cellvalue).innerHTML='O';
  }
  //Winner = checkWinner();
 /*}*/
}

function checkWinner(){
  var winner = true;
  return winner;
}
