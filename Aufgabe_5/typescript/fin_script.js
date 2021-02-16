var fin;
(function (fin) {
    var cCheck;
    //Definition/ einfachere Deklaration von HTML-Elementen
    //Pop-Up für Schwierigkeiten
    var challenge;
    //Knöpfe für Schwierigkeiten
    var cBttn;
    var leicht;
    var mittel;
    var schwierig;
    //16 Karten rechts    
    var set2;
    //Reihen von Karten
    var is12;
    var is16;
    /*Karten an sich
    let karte: HTMLElement; */
    challenge = document.querySelector(".challenge");
    cBttn = document.querySelector(".cBttn");
    leicht = document.getElementById("leicht");
    mittel = document.getElementById("mittel");
    schwierig = document.getElementById("schwierig");
    set2 = document.querySelector(".set2");
    is12 = document.querySelector(".is12");
    is16 = document.querySelector(".is16");
    //karte = document.querySelector(".karte");
    //Ende Definition
    //Bei Klick auf Mittel sollen nur noch 8 Kartenpaare da sein
    mittel.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        cCheck = 2;
    }); //Ende Mittel
    //Bei Klick auf Leicht sollen 4
    leicht.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        is12.classList.add("is-hidden");
        is16.classList.add("is-hidden");
        cCheck = 1;
    }); //Ende Leicht
    schwierig.addEventListener("click", function () {
        cCheck = 3;
    }); //Ende Schwierig
    //Pop-Up soll verschwinden nach dem Drücken
    cBttn.addEventListener("click", function () {
        challenge.classList.add("is-hidden");
    }); //Ende CBttn
    document.querySelector(".chatchat").addEventListener("click", function () {
        console.log(cCheck);
    });
})(fin || (fin = {})); //Ende namespace
//# sourceMappingURL=fin_script.js.map