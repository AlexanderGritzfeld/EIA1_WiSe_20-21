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
    var k1;
    var k2;
    var k3;
    var k4;
    var k5;
    var k6;
    var k7;
    var k8;
    var k9;
    var k10;
    var k11;
    var k12;
    var k13;
    var k14;
    var k15;
    var k16;
    var k17;
    var k18;
    var k19;
    var k20;
    var k21;
    var k22;
    var k23;
    var k24;
    var k25;
    var k26;
    var k27;
    var k28;
    var k29;
    var k30;
    var k31;
    var k32;
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
    k3 = document.querySelector(".k3");
    k4 = document.querySelector(".k4");
    k5 = document.querySelector(".k5");
    k6 = document.querySelector(".k6");
    k7 = document.querySelector(".k7");
    k8 = document.querySelector(".k8");
    k9 = document.querySelector(".k9");
    k10 = document.querySelector(".k10");
    k11 = document.querySelector(".k11");
    k12 = document.querySelector(".k12");
    k13 = document.querySelector(".k13");
    k14 = document.querySelector(".k14");
    k15 = document.querySelector(".k15");
    k16 = document.querySelector(".k16");
    k17 = document.querySelector(".k17");
    k18 = document.querySelector(".k18");
    k19 = document.querySelector(".k19");
    k20 = document.querySelector(".k20");
    k21 = document.querySelector(".k21");
    k22 = document.querySelector(".k22");
    k23 = document.querySelector(".k23");
    k24 = document.querySelector(".k24");
    k25 = document.querySelector(".k25");
    k26 = document.querySelector(".k26");
    k27 = document.querySelector(".k27");
    k28 = document.querySelector(".k28");
    k29 = document.querySelector(".k29");
    k30 = document.querySelector(".k30");
    k31 = document.querySelector(".k31");
    k32 = document.querySelector(".k32");
    //Die Kartensets
    var memoryL = [k1, k2, k3, k4, k5, k6, k7, k8];
    var memoryM = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16];
    var memoryS = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31, k32];
    //dazugehörige Fraben, Piktogramme und Sätze
    var farbeOderSoL = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis"];
    var farbeOderSoM = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis", "hellgrün", "hellgrün", "zebra", "zebra", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2"];
    var farbeOderSoS = ["rot", "rot", "lila", "lila", "hellgrün", "hellgrün", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2", "rosa", "rosa", "orange", "orange", "js1_T1", "js1_t2", "js2_t1", "js2_t2", "js3_t1", "js3_t2", "js4_t1", "js4_t2", "hellblau", "hellblau", "gelb", "gelb", "dunkelgrün", "dunkelgrün", "dunkelblau", "dunkelblau", "braun", "braun"];
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
                //erstmal muss das Array der Karten zufällig verteilt werden
                memoryL.sort(function (a, b) { return 0.5 - Math.random(); });
                farbeOderSoL.sort(function (a, b) { return 0.5 - Math.random(); });
                //und jetzt werden sie verteilt
                for (var a = 0; a < memoryL.length; a++) {
                    memoryL[a].classList.add(farbeOderSoL[a]);
                }
                break;
            case "m":
                //erstmal muss das Array der Karten zufällig verteilt werden
                memoryM.sort(function (a, b) { return 0.5 - Math.random(); });
                farbeOderSoM.sort(function (a, b) { return 0.5 - Math.random(); });
                //und jetzt werden sie verteilt
                for (var b = 0; b < memoryM.length; b++) {
                    memoryM[b].classList.add(farbeOderSoM[b]);
                }
                break;
            case "s":
                //erstmal muss das Array der Karten zufällig verteilt werden
                memoryS.sort(function (a, b) { return 0.5 - Math.random(); });
                farbeOderSoS.sort(function (a, b) { return 0.5 - Math.random(); });
                //und jetzt werden sie verteilt
                for (var c = 0; c < memoryS.length; c++) {
                    memoryS[c].classList.add(farbeOderSoS[c]);
                }
                break;
        } //Ende switch case
    } //Ende function verarbeiten
    //Wenn man eine Karte anklickt soll sie sich umdrehen
    var alleKarten = document.querySelectorAll(".karte");
    for (var z = 0; z < alleKarten.length; z++) {
        alleKarten[z].addEventListener("click", function () {
            console.log("Klick");
            //soll nur machen, nachdem man eine Schwierigkeitsstufe ausgewählt hat
            if (cCheck == "l" || cCheck == "m" || cCheck == "s") {
                for (var chance = 0; chance < 2; chance++) { //man darf ja zwei mal umdrehen
                    console.log(chance);
                    console.log(this);
                    this.classList.toggle("blank");
                } //Ende for Schleife zwei mal umdrehen
            }
            else {
                alert("Hey! Nicht schummeln!");
            } // Ende if else
        });
    }
    //document.querySelector(".k1" || ".k2" || ".k3" || ".k4" || ".k5" || ".k6" || ".k7" || ".k8" || ".k9" || ".k10" || ".k11" || ".k12" || ".k13" || ".k14" || ".k15" || ".k16" || ".k17" || ".k18" || ".k19" || ".k20" /* k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31" || ".k32"*/).addEventListener("click", function(): void {
    //Test
    document.querySelector(".chatchat").addEventListener("click", function () {
        console.log(cCheck);
        console.log(memoryL);
    });
})(fin || (fin = {})); //Ende namespace
//# sourceMappingURL=fin_script.js.map