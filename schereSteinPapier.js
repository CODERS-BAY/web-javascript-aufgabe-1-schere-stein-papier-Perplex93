var symbolComputer = Math.random()*3;
symbolComputer = Math.round(symbolComputer + 0,5);
var symbolSpieler;
var anzahlRunden = 0;
var gewinneComputer = 0;
var gewinneSpieler = 0;
var gewinnBedinung = 3;

function startbutton(){
    document.getElementById("startbild").setAttribute("src","/img/tisch.jpg");
    document.getElementById("startbutton").style.display = 'none';
    anzahlRunden = prompt("Wie viele Runden wollen Sie spielen?");
} 

symbolSpieler = getElementById("")
    if (symbolSpieler = 1){
        symbolSpieler = "Schere";
    }else if(symbolSpieler = 2){
        symbolSpieler = "Stein";
    }else if (symbolSpieler = 3){
        symbolSpieler = "Papier";
    }

function spiel(){
    if (symbolComputer = 1) {
        symbolComputer = "Schere";
    } else if(symbolComputer = 2) {
        symbolComputer = "Stein" ;
    }else if (symbolComputer = 3) {
         symbolComputer = "Papier" ;
    }
    do{
    if( symbolComputer ==  symbolSpieler ){
        alert("Unentschieden");
    };
    
    if( symbolComputer == "Schere" && symbolSpieler == "Papier" ){
        gewinneComputer++;
        alert("Computer gewinnt");
    };
    if( symbolComputer == "Papier" && symbolSpieler == "Schere" ){
        punktSpieler++;        
        alert("Du gewinnst");
    };
    
    if( symbolComputer == "Papier" && symbolSpieler == "Stein" ){
        gewinneComputer++;
        alert("Computer gewinnt");
    };
    if( symbolComputer == "Stein" && symbolSpieler == "Papier" ){
        punktSpieler++;
        alert("Du gewinnst");
    };
    
    if( symbolComputer == "Stein" && symbolSpieler == "Schere" ){
        gewinneComputer++;
        alert("Computer gewinnt");
    };
    if( symbolComputer == "Schere" && symbolSpieler == "Stein" ){
        punktSpieler++;
        alert("Du gewinnst");
    };
    }while( gewinneSpieler == gewinnBedinung || gewinneComputer == gewinnBedinung )
    if( punktSpieler == gewinnBedinung ){
        alert( "Du hast das Spiel gewonnen." );
    }
    else {
        alert( "Der Computer hat gewonnen." );
    }
}



