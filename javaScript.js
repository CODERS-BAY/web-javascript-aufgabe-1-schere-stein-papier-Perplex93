var symbolComputer = Math.random()*3;
symbolComputer = Math.round(symbolComputer + 0,5);
var gewinneComputer = 0;
var gewinneSpieler = 0;
var gewinnBedinung = 3;
var trys;
var elements = document.getElementById("game");
  

function startgame() {
    var startIMG = document.getElementsByClassName("startimg");
    for (index = 0; index < startIMG.length; ++index) {
      startIMG[index].setAttribute("src","../img/tisch.jpg");
    }
    document.getElementById("btn-start").style.display = 'none';
    document.getElementById("game").style.display = 'block';
} 

function getTrys() {
  trys = document.getElementById("try").value; 
  elements.classList.toggle("hidden");
  document.getElementById('rounds').innerHTML = trys;
}


/**
 * Values
 * schere = 1
 * stein = 2
 * papier = 3
 * 
 * Möglichkeiten
 *  user  -  comp
 * schere - schere => 1 - 1 => unentschieden
 * schere - stein  => 1 - 2 => comp
 * schere - papier => 1 - 3 => user
 * 
 * stein - schere  => 2 - 1 => user
 * stein - stein   => 2 - 2 => unentschieden
 * stein - papier  => 2 - 3 => comp
 * 
 * papier - schere => 3 - 1 => comp
 * papier - stein  => 3 - 2 => user
 * papier - papier => 3 - 3 => unentschieden
 */

function game(user) {
  
  
  // unentschieden
  if(user == symbolComputer) {
    document.getElementById('info').innerHTML = "Unentschieden";
  } else 
  // comp gewinnt
  if((user == 1 && symbolComputer == 2) || (user == 2 && symbolComputer == 3) || (user == 3 && symbolComputer == 1) ) {
    document.getElementById('info').innerHTML = "Runde geht an Computer";
    gewinneComputer++;
    document.getElementById('compResult').innerHTML = gewinneComputer;
    
  } else 
  // uSER gewinnt
  {
    document.getElementById('info').innerHTML = "Runde geht an User";
    gewinneSpieler++;
    document.getElementById('userResult').innerHTML = gewinneSpieler;
  }
  trys--;
  document.getElementById('rounds').innerHTML = trys;

  if(trys == 0) {
    elements.classList.toggle("hidden");
    if(gewinneSpieler > gewinneComputer) {
      document.getElementById('rounds').innerHTML = "Spiel vorbei. User Gewinnt";
    } else if(gewinneSpieler < gewinneComputer) {
      document.getElementById('rounds').innerHTML = "Spiel vorbei. Computer Gewinnt";
    }
    else {      
      document.getElementById('rounds').innerHTML = "Spiel vorbei. Unentschieden";
    }
  }
}

function reset() {
  location.reload(); 
}
