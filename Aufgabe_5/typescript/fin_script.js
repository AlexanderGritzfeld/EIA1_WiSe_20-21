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
    //Karten an sich
    /*Interface
    interface memoryL {
        content: HTMLElement;
    } */
    var k1;
    var k2;
    var k3;
    var k4;
    var k5;
    var k6;
    var k7;
    var k8;
    var memoryL = [k1, k2, k3, k4, k5, k6, k7, k8];
    challenge = document.querySelector(".challenge");
    cBttn = document.querySelector(".cBttn");
    leicht = document.getElementById("leicht");
    mittel = document.getElementById("mittel");
    schwierig = document.getElementById("schwierig");
    set2 = document.querySelector(".set2");
    is12 = document.querySelector(".is12");
    is16 = document.querySelector(".is16");
    k1 = document.querySelector(".k1");
    k2 = document.querySelector(".k2");
    //Ende Definition
    //Bei Klick auf Mittel sollen nur noch 8 Kartenpaare da sein
    mittel.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        cCheck = "m";
    }); //Ende Mittel
    //Bei Klick auf Leicht sollen 4
    leicht.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        is12.classList.add("is-hidden");
        is16.classList.add("is-hidden");
        cCheck = "l";
    }); //Ende Leicht
    schwierig.addEventListener("click", function () {
        cCheck = "s";
    }); //Ende Schwierig
    //Pop-Up soll verschwinden nach dem Drücken
    cBttn.addEventListener("click", function () {
        challenge.classList.add("is-hidden");
        verarbeite(); //das stößt den Verarbeitungsprozess an
    }); //Ende CBttn
    //jetzt sollen die Karten-Klassen verteilen werden; basierend auf Schwierigkeit
    function verarbeite() {
        switch (cCheck) {
            case "l":
                //console.log("leicht");
                k2.classList.add("rot");
                k1.classList.add("zebra");
                break;
            case "m":
                //console.log("mittel");
                break;
        } //Ende switch case
    } //Ende function verarbeite
    /*leicht
    if (cCheck == "l") {
        console.log("Eins");
    } else {
    
        //mittel
        if (cCheck == "m") {
            k1.classList.add("red");
            k2.classList.add("zebra");
            console.log("Hallo");
        } else {
    
            //schwierig
            if (cCheck == "s") {
                console.log("Drei");
            }
        }// Ende elseM
    }//Ende elseL
    */
    //Test
    document.querySelector(".chatchat").addEventListener("click", function () {
        console.log(cCheck);
    });
})(fin || (fin = {})); //Ende namespace
//# sourceMappingURL=fin_script.js.map