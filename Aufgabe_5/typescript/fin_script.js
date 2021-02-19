var fin;
(function (fin) {
    var cCheck; //Kontrollwert ob und welche Schwierigkeit ausgewählt wurde
    var chance = 2; //Zähler für Anzahl der Versuche (startet bei 2 damit der Spieler nicht als erstes dran ist)
    var tempKarte1 = null; //Ein Platzhelter für ausgewählte Karten
    var tempKarte2 = null;
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
    var paareINSG = null; //Wert wird dann bei Auswahl der Schwierigkeit vergeben
    var paareCOM = 0;
    var paareMensch = 0;
    //dazugehörige Fraben, Piktogramme und Sätze
    var farbeOderSoL = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis"];
    var farbeOderSoM = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis", "hellgrün", "hellgrün", "zebra", "zebra", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2"];
    var farbeOderSoS = ["rot", "rot", "lila", "lila", "hellgrün", "hellgrün", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2", "rosa", "rosa", "orange", "orange", "js1_T1", "js1_t2", "js2_t1", "js2_t2", "js3_t1", "js3_t2", "js4_t1", "js4_t2", "hellblau", "hellblau", "gelb", "gelb", "dunkelgrün", "dunkelgrün", "dunkelblau", "dunkelblau", "braun", "braun"];
    //Ende Definition
    //Bei Klick auf Mittel sollen nur noch 8 Kartenpaare da sein
    mittel.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        cCheck = "m";
        paareINSG = 8;
    }); //Ende Mittel
    //Bei Klick auf Leicht sollen 4
    leicht.addEventListener("click", function () {
        set2.classList.add("is-hidden");
        is12.classList.add("is-hidden");
        is16.classList.add("is-hidden");
        cCheck = "l";
        paareINSG = 4;
    }); //Ende Leicht
    schwierig.addEventListener("click", function () {
        cCheck = "s";
        paareINSG = 16;
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
                COM1();
                break;
            case "m":
                //erstmal muss das Array der Karten zufällig verteilt werden
                memoryM.sort(function (a, b) { return 0.5 - Math.random(); });
                farbeOderSoM.sort(function (a, b) { return 0.5 - Math.random(); });
                //und jetzt werden sie verteilt
                for (var b = 0; b < memoryM.length; b++) {
                    memoryM[b].classList.add(farbeOderSoM[b]);
                }
                COM1();
                break;
            case "s":
                //erstmal muss das Array der Karten zufällig verteilt werden
                memoryS.sort(function (a, b) { return 0.5 - Math.random(); });
                farbeOderSoS.sort(function (a, b) { return 0.5 - Math.random(); });
                //und jetzt werden sie verteilt
                for (var c = 0; c < memoryS.length; c++) {
                    memoryS[c].classList.add(farbeOderSoS[c]);
                }
                COM1();
                break;
        } //Ende switch case
    } //Ende function verarbeiten
    //Funktion, womit der COM seinen Zug macht
    function COM1() {
        /*if (paareINSG == 0) { //falls keine Karten mehr verfügbar sind
                   console.log("Keine Karten mehr da!");
                   console.log("Du hast " + paareMensch + " Paare!");
                   console.log("Und ich habe " + paareCOM + " Paare!");
               } else { */
        switch (cCheck) { //je nachdem welche Schwierigkeit ausgewählt wurde
            case "l":
                tempKarte1 = memoryL[Math.floor(Math.random() * memoryL.length)];
                if (tempKarte1.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                    tempKarte1 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                    if (paareINSG != 0) {
                        COM1(); //...er soll es nochmal probieren
                    }
                }
                else { //Ende if Karte berets weg vom Feld
                    tempKarte1.classList.remove("blank");
                    console.log(tempKarte1);
                    setTimeout(function COM2() {
                        tempKarte2 = memoryL[Math.floor(Math.random() * memoryL.length)];
                        if (tempKarte2.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                            tempKarte2 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                            COM2(); //...soll es nochmal probieren
                        }
                        else { //Ende if Karte berets weg vom Feld
                            if (tempKarte2 == tempKarte1) { //er darf nicht ein und die selbe Karte zwei Mal wählen
                                tempKarte2 = null;
                                COM2();
                            } //Ende Check hat er ein und die selbe Karte zwei mal gewählt
                            // setTimeout( function (): void { //soll kurz warten, damit Mensch auch vergewissern kann
                            tempKarte2.classList.remove("blank");
                            console.log(tempKarte2);
                            setTimeout(function () {
                                console.log("Check COM");
                                if ( //wenn beide Karten gleich sind
                                tempKarte1.classList.contains("braun") && tempKarte2.classList.contains("braun") ||
                                    tempKarte1.classList.contains("css_defi_Teil1") && tempKarte2.classList.contains("css_defi_Teil2") ||
                                    tempKarte1.classList.contains("css_defi_Teil2") && tempKarte2.classList.contains("css_defi_Teil1") ||
                                    tempKarte1.classList.contains("dunkelblau") && tempKarte2.classList.contains("dunkelblau") ||
                                    tempKarte1.classList.contains("dunkelgrün") && tempKarte2.classList.contains("dunkelgrün") ||
                                    tempKarte1.classList.contains("gelb") && tempKarte2.classList.contains("gelb") ||
                                    tempKarte1.classList.contains("hellblau") && tempKarte2.classList.contains("hellblau") ||
                                    tempKarte1.classList.contains("hellgrün") && tempKarte2.classList.contains("hellgrün") ||
                                    tempKarte1.classList.contains("html_Teil1") && tempKarte2.classList.contains("html_Teil2") ||
                                    tempKarte1.classList.contains("html_Teil2") && tempKarte2.classList.contains("html_Teil1") ||
                                    tempKarte1.classList.contains("js1_T1") && tempKarte2.classList.contains("js1_t2") ||
                                    tempKarte1.classList.contains("js1_t2") && tempKarte2.classList.contains("js1_T1") ||
                                    tempKarte1.classList.contains("js2_t1") && tempKarte2.classList.contains("js2_t2") ||
                                    tempKarte1.classList.contains("js2_t2") && tempKarte2.classList.contains("js2_t1") ||
                                    tempKarte1.classList.contains("js3_t1") && tempKarte2.classList.contains("js3_t2") ||
                                    tempKarte1.classList.contains("js3_t2") && tempKarte2.classList.contains("js3_t1") ||
                                    tempKarte1.classList.contains("js4_t1") && tempKarte2.classList.contains("js4_t2") ||
                                    tempKarte1.classList.contains("js4_t2") && tempKarte2.classList.contains("js4_t1") ||
                                    tempKarte1.classList.contains("lila") && tempKarte2.classList.contains("lila") ||
                                    tempKarte1.classList.contains("orange") && tempKarte2.classList.contains("orange") ||
                                    tempKarte1.classList.contains("rosa") && tempKarte2.classList.contains("rosa") ||
                                    tempKarte1.classList.contains("rot") && tempKarte2.classList.contains("rot") ||
                                    tempKarte1.classList.contains("kreis") && tempKarte2.classList.contains("kreis") ||
                                    tempKarte1.classList.contains("zebra") && tempKarte2.classList.contains("zebra") ||
                                    tempKarte1.classList.contains("pfeil_unten") && tempKarte2.classList.contains("pfeil_unten")) {
                                    //lässt Karten verschwinden    
                                    tempKarte1.classList.add("is-hidden");
                                    tempKarte2.classList.add("is-hidden");
                                    console.log("Ha jetzt habe ich ein richtiges Paar!");
                                    paareINSG--;
                                    paareCOM++;
                                    if (paareINSG == 0) { //falls keine Karten mehr verfügbar sind
                                        console.log("Keine Karten mehr da!");
                                        console.log("Du hast " + paareMensch + " Paare!");
                                        console.log("Und ich habe " + paareCOM + " Paare!");
                                    }
                                    COM1(); //...soll es nochmal probieren
                                } //Ende if Bedingung unter der gleich
                                else { //wenn nicht gleich
                                    //Karten wieder umdrehen
                                    tempKarte1.classList.add("blank");
                                    tempKarte2.classList.add("blank");
                                    tempKarte1 = null;
                                    tempKarte2 = null;
                                    chance = 0;
                                } //Ende else nicht gleich COM
                            }, 1000); //Ende anonyme Funktion TimeOut
                        } // Ende else Karte2 nicht bereits weg vom Feld
                    }, 500);
                } //Ende else Karten nicht weg vom Feld
                break;
            case "m":
                tempKarte1 = memoryM[Math.floor(Math.random() * memoryM.length)];
                if (tempKarte1.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                    tempKarte1 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                    if (paareINSG != 0) { //falls es noch überhaupt Karten gibt
                        COM1(); //...er soll es nochmal probieren
                    }
                }
                else { //Ende if Karte berets weg vom Feld
                    tempKarte1.classList.remove("blank");
                    console.log(tempKarte1);
                    setTimeout(function COM2() {
                        tempKarte2 = memoryM[Math.floor(Math.random() * memoryM.length)];
                        if (tempKarte2.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                            tempKarte2 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                            COM2(); //...soll es nochmal probieren
                        }
                        else { //Ende if Karte berets weg vom Feld
                            if (tempKarte2 == tempKarte1) { //er darf nicht ein und die selbe Karte zwei Mal wählen
                                tempKarte2 = null;
                                COM2();
                            } //Ende Check hat er ein und die selbe Karte zwei mal gewählt
                            // setTimeout( function (): void { //soll kurz warten, damit Mensch auch vergewissern kann
                            tempKarte2.classList.remove("blank");
                            console.log(tempKarte2);
                            setTimeout(function () {
                                console.log("Check COM");
                                if ( //wenn beide Karten gleich sind
                                tempKarte1.classList.contains("braun") && tempKarte2.classList.contains("braun") ||
                                    tempKarte1.classList.contains("css_defi_Teil1") && tempKarte2.classList.contains("css_defi_Teil2") ||
                                    tempKarte1.classList.contains("css_defi_Teil2") && tempKarte2.classList.contains("css_defi_Teil1") ||
                                    tempKarte1.classList.contains("dunkelblau") && tempKarte2.classList.contains("dunkelblau") ||
                                    tempKarte1.classList.contains("dunkelgrün") && tempKarte2.classList.contains("dunkelgrün") ||
                                    tempKarte1.classList.contains("gelb") && tempKarte2.classList.contains("gelb") ||
                                    tempKarte1.classList.contains("hellblau") && tempKarte2.classList.contains("hellblau") ||
                                    tempKarte1.classList.contains("hellgrün") && tempKarte2.classList.contains("hellgrün") ||
                                    tempKarte1.classList.contains("html_Teil1") && tempKarte2.classList.contains("html_Teil2") ||
                                    tempKarte1.classList.contains("html_Teil2") && tempKarte2.classList.contains("html_Teil1") ||
                                    tempKarte1.classList.contains("js1_T1") && tempKarte2.classList.contains("js1_t2") ||
                                    tempKarte1.classList.contains("js1_t2") && tempKarte2.classList.contains("js1_T1") ||
                                    tempKarte1.classList.contains("js2_t1") && tempKarte2.classList.contains("js2_t2") ||
                                    tempKarte1.classList.contains("js2_t2") && tempKarte2.classList.contains("js2_t1") ||
                                    tempKarte1.classList.contains("js3_t1") && tempKarte2.classList.contains("js3_t2") ||
                                    tempKarte1.classList.contains("js3_t2") && tempKarte2.classList.contains("js3_t1") ||
                                    tempKarte1.classList.contains("js4_t1") && tempKarte2.classList.contains("js4_t2") ||
                                    tempKarte1.classList.contains("js4_t2") && tempKarte2.classList.contains("js4_t1") ||
                                    tempKarte1.classList.contains("lila") && tempKarte2.classList.contains("lila") ||
                                    tempKarte1.classList.contains("orange") && tempKarte2.classList.contains("orange") ||
                                    tempKarte1.classList.contains("rosa") && tempKarte2.classList.contains("rosa") ||
                                    tempKarte1.classList.contains("rot") && tempKarte2.classList.contains("rot") ||
                                    tempKarte1.classList.contains("kreis") && tempKarte2.classList.contains("kreis") ||
                                    tempKarte1.classList.contains("zebra") && tempKarte2.classList.contains("zebra") ||
                                    tempKarte1.classList.contains("pfeil_unten") && tempKarte2.classList.contains("pfeil_unten")) {
                                    //lässt Karten verschwinden    
                                    tempKarte1.classList.add("is-hidden");
                                    tempKarte2.classList.add("is-hidden");
                                    console.log("Ha jetzt habe ich ein richtiges Paar!");
                                    paareINSG--;
                                    paareCOM++;
                                    if (paareINSG == 0) { //falls keine Karten mehr verfügbar sind
                                        console.log("Keine Karten mehr da!");
                                        console.log("Du hast " + paareMensch + " Paare!");
                                        console.log("Und ich habe " + paareCOM + " Paare!");
                                    }
                                    COM1(); //...soll es nochmal probieren
                                } //Ende if Bedingung unter der gleich
                                else { //wenn nicht gleich
                                    //Karten wieder umdrehen
                                    tempKarte1.classList.add("blank");
                                    tempKarte2.classList.add("blank");
                                    tempKarte1 = null;
                                    tempKarte2 = null;
                                    chance = 0;
                                } //Ende else nicht gleich COM
                            }, 1000); //Ende anonyme Funktion TimeOut
                        } // Ende else Karte2 nicht bereits weg vom Feld
                    }, 500);
                } //Ende else Karten nicht weg vom Feld
                break;
            case "s":
                tempKarte1 = memoryS[Math.floor(Math.random() * memoryS.length)];
                if (tempKarte1.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                    tempKarte1 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                    if (paareINSG != 0) { //falls es noch überhaupt Karten gibt
                        COM1(); //...er soll es nochmal probieren
                    }
                }
                else { //Ende if Karte berets weg vom Feld
                    tempKarte1.classList.remove("blank");
                    console.log(tempKarte1);
                    setTimeout(function COM2() {
                        tempKarte2 = memoryS[Math.floor(Math.random() * memoryS.length)];
                        if (tempKarte2.classList.contains("is-hidden")) { //Ist Karte bereits weg vom Feld?
                            tempKarte2 = null; //wenn ja dann klatschen wir dem COM auf die Hände, sagen NEIN! und...
                            COM2(); //...soll es nochmal probieren
                        }
                        else { //Ende if Karte berets weg vom Feld
                            if (tempKarte2 == tempKarte1) { //er darf nicht ein und die selbe Karte zwei Mal wählen
                                tempKarte2 = null;
                                COM2();
                            } //Ende Check hat er ein und die selbe Karte zwei mal gewählt
                            // setTimeout( function (): void { //soll kurz warten, damit Mensch auch vergewissern kann
                            tempKarte2.classList.remove("blank");
                            console.log(tempKarte2);
                            setTimeout(function () {
                                console.log("Check COM");
                                if ( //wenn beide Karten gleich sind
                                tempKarte1.classList.contains("braun") && tempKarte2.classList.contains("braun") ||
                                    tempKarte1.classList.contains("css_defi_Teil1") && tempKarte2.classList.contains("css_defi_Teil2") ||
                                    tempKarte1.classList.contains("css_defi_Teil2") && tempKarte2.classList.contains("css_defi_Teil1") ||
                                    tempKarte1.classList.contains("dunkelblau") && tempKarte2.classList.contains("dunkelblau") ||
                                    tempKarte1.classList.contains("dunkelgrün") && tempKarte2.classList.contains("dunkelgrün") ||
                                    tempKarte1.classList.contains("gelb") && tempKarte2.classList.contains("gelb") ||
                                    tempKarte1.classList.contains("hellblau") && tempKarte2.classList.contains("hellblau") ||
                                    tempKarte1.classList.contains("hellgrün") && tempKarte2.classList.contains("hellgrün") ||
                                    tempKarte1.classList.contains("html_Teil1") && tempKarte2.classList.contains("html_Teil2") ||
                                    tempKarte1.classList.contains("html_Teil2") && tempKarte2.classList.contains("html_Teil1") ||
                                    tempKarte1.classList.contains("js1_T1") && tempKarte2.classList.contains("js1_t2") ||
                                    tempKarte1.classList.contains("js1_t2") && tempKarte2.classList.contains("js1_T1") ||
                                    tempKarte1.classList.contains("js2_t1") && tempKarte2.classList.contains("js2_t2") ||
                                    tempKarte1.classList.contains("js2_t2") && tempKarte2.classList.contains("js2_t1") ||
                                    tempKarte1.classList.contains("js3_t1") && tempKarte2.classList.contains("js3_t2") ||
                                    tempKarte1.classList.contains("js3_t2") && tempKarte2.classList.contains("js3_t1") ||
                                    tempKarte1.classList.contains("js4_t1") && tempKarte2.classList.contains("js4_t2") ||
                                    tempKarte1.classList.contains("js4_t2") && tempKarte2.classList.contains("js4_t1") ||
                                    tempKarte1.classList.contains("lila") && tempKarte2.classList.contains("lila") ||
                                    tempKarte1.classList.contains("orange") && tempKarte2.classList.contains("orange") ||
                                    tempKarte1.classList.contains("rosa") && tempKarte2.classList.contains("rosa") ||
                                    tempKarte1.classList.contains("rot") && tempKarte2.classList.contains("rot") ||
                                    tempKarte1.classList.contains("kreis") && tempKarte2.classList.contains("kreis") ||
                                    tempKarte1.classList.contains("zebra") && tempKarte2.classList.contains("zebra") ||
                                    tempKarte1.classList.contains("pfeil_unten") && tempKarte2.classList.contains("pfeil_unten")) {
                                    //lässt Karten verschwinden    
                                    tempKarte1.classList.add("is-hidden");
                                    tempKarte2.classList.add("is-hidden");
                                    console.log("Ha jetzt habe ich ein richtiges Paar!");
                                    paareINSG--;
                                    paareCOM++;
                                    if (paareINSG == 0) { //falls keine Karten mehr verfügbar sind
                                        console.log("Keine Karten mehr da!");
                                        console.log("Du hast " + paareMensch + " Paare!");
                                        console.log("Und ich habe " + paareCOM + " Paare!");
                                        //das Sieger Pop-Up taucht auf und soll individualisiert werden
                                        document.querySelector(".sieger").classList.remove("is-hidden");
                                        if (paareMensch > paareCOM) {
                                            document.querySelector(".sieger_text").innerHTML =
                                                "Du hast " + paareMensch + " Paare und der COM hat " + paareCOM + " Paar(e)!" +
                                                    " </dr> " + "Glückwunsch! Du hast gewonnen!";
                                        } //Ende if Mensch gewonnen
                                        if (paareMensch == paareCOM) {
                                            document.querySelector(".sieger_text").innerHTML =
                                                "Du hast " + paareMensch + " Paare und der COM hat " + paareCOM + " Paare!" +
                                                    " </dr> " + "Gleichstand!";
                                        } //Ende if Gleichstand
                                        if (paareMensch < paareCOM) {
                                            document.querySelector(".sieger_text").innerHTML =
                                                "Du hast " + paareMensch + " Paar(e) und der COM hat " + paareCOM + " Paare!" +
                                                    " </dr> " + "Schade! Vielleicht beim nächsten Mal?";
                                        } // Ende Niederlage Mensch
                                    } // Ende if keine Karten mehr verfügbar sind
                                    COM1(); //...soll es nochmal probieren
                                } //Ende if Bedingung unter der gleich
                                else { //wenn nicht gleich
                                    //Karten wieder umdrehen
                                    tempKarte1.classList.add("blank");
                                    tempKarte2.classList.add("blank");
                                    tempKarte1 = null;
                                    tempKarte2 = null;
                                    chance = 0;
                                } //Ende else nicht gleich COM
                            }, 1000); //Ende anonyme Funktion TimeOut
                        } // Ende else Karte2 nicht bereits weg vom Feld
                    }, 500);
                } //Ende else Karten nicht weg vom Feld
                break;
        } // Ende switch case
    } //Ende Funktion COM1
    //Wenn man eine Karte anklickt soll sie sich umdrehen
    var alleKarten = document.querySelectorAll(".karte");
    //wir können nicht querySelector nehmen, da dieser nur erstes zutreffende Objekt nimmt
    //also querySelectorAll und da dieser eine NodeList ausgibt --> alle Elemente in for Schleife auswählen
    for (var z = 0; z < alleKarten.length; z++) {
        alleKarten[z].addEventListener("click", function () {
            //soll nur machen, nachdem man eine Schwierigkeitsstufe ausgewählt hat
            if (cCheck == "l" || cCheck == "m" || cCheck == "s") {
                //darf auswählen wenn er weniger als ein mal schon probiert hat in der Runde
                if (chance < 1) {
                    this.classList.remove("blank"); //werden umgedreht
                    tempKarte1 = this;
                    chance++;
                    console.log(chance);
                    console.log(tempKarte1);
                } // Ende Bedingung weniger als zwei mal
            } // Ende Check Schwierigkeit
            else {
                alert("Hände weg! Nicht schummeln!");
            } // Ende else
        }); //Ende EventListener Karte 1
    } //Ende for Schleife EventListener
    //Zweite Karte (VORSICHT WITZ: Nicht verwechseln mit Gelb-Rote Karte)
    for (var z = 0; z < alleKarten.length; z++) {
        alleKarten[z].addEventListener("click", function () {
            if (this != tempKarte1) {
                if (cCheck == "l" || cCheck == "m" || cCheck == "s") {
                    //darf auswählen wenn er weniger als ein mal schon probiert hat in der Runde
                    if (chance == 1) { //wenn ein mal geklickt hat
                        this.classList.remove("blank");
                        tempKarte2 = this;
                        chance++;
                        console.log(chance);
                        console.log(tempKarte2);
                        setTimeout(function () {
                            console.log("Check Mensch");
                            if ( //wenn beide Karten gleich sind
                            tempKarte1.classList.contains("braun") && tempKarte2.classList.contains("braun") ||
                                tempKarte1.classList.contains("css_defi_Teil1") && tempKarte2.classList.contains("css_defi_Teil2") ||
                                tempKarte1.classList.contains("css_defi_Teil2") && tempKarte2.classList.contains("css_defi_Teil1") ||
                                tempKarte1.classList.contains("dunkelblau") && tempKarte2.classList.contains("dunkelblau") ||
                                tempKarte1.classList.contains("dunkelgrün") && tempKarte2.classList.contains("dunkelgrün") ||
                                tempKarte1.classList.contains("gelb") && tempKarte2.classList.contains("gelb") ||
                                tempKarte1.classList.contains("hellblau") && tempKarte2.classList.contains("hellblau") ||
                                tempKarte1.classList.contains("hellgrün") && tempKarte2.classList.contains("hellgrün") ||
                                tempKarte1.classList.contains("html_Teil1") && tempKarte2.classList.contains("html_Teil2") ||
                                tempKarte1.classList.contains("html_Teil2") && tempKarte2.classList.contains("html_Teil1") ||
                                tempKarte1.classList.contains("js1_T1") && tempKarte2.classList.contains("js1_t2") ||
                                tempKarte1.classList.contains("js1_t2") && tempKarte2.classList.contains("js1_T1") ||
                                tempKarte1.classList.contains("js2_t1") && tempKarte2.classList.contains("js2_t2") ||
                                tempKarte1.classList.contains("js2_t2") && tempKarte2.classList.contains("js2_t1") ||
                                tempKarte1.classList.contains("js3_t1") && tempKarte2.classList.contains("js3_t2") ||
                                tempKarte1.classList.contains("js3_t2") && tempKarte2.classList.contains("js3_t1") ||
                                tempKarte1.classList.contains("js4_t1") && tempKarte2.classList.contains("js4_t2") ||
                                tempKarte1.classList.contains("js4_t2") && tempKarte2.classList.contains("js4_t1") ||
                                tempKarte1.classList.contains("lila") && tempKarte2.classList.contains("lila") ||
                                tempKarte1.classList.contains("orange") && tempKarte2.classList.contains("orange") ||
                                tempKarte1.classList.contains("rosa") && tempKarte2.classList.contains("rosa") ||
                                tempKarte1.classList.contains("rot") && tempKarte2.classList.contains("rot") ||
                                tempKarte1.classList.contains("kreis") && tempKarte2.classList.contains("kreis") ||
                                tempKarte1.classList.contains("zebra") && tempKarte2.classList.contains("zebra") ||
                                tempKarte1.classList.contains("pfeil_unten") && tempKarte2.classList.contains("pfeil_unten")) {
                                //lässt Karten verschwinden    
                                tempKarte1.classList.add("is-hidden");
                                tempKarte2.classList.add("is-hidden");
                                console.log("Toll!");
                                paareINSG--;
                                paareMensch++;
                                if (paareINSG == 0) {
                                    console.log("Das war das letzte Paar!");
                                    console.log("Du hast " + paareMensch + " Paare!");
                                    console.log("Und ich habe " + paareCOM + " Paare!");
                                    //das Sieger Pop-Up taucht auf und soll individualisiert werden
                                    document.querySelector(".sieger").classList.remove("is-hidden");
                                    if (paareMensch > paareCOM) {
                                        document.querySelector(".sieger_text").innerHTML =
                                            "Du hast " + paareMensch + " Paare und der COM hat " + paareCOM + " Paar(e)!" +
                                                " </dr> " + "Glückwunsch! Du hast gewonnen!";
                                    } //Ende if Mensch gewonnen
                                    if (paareMensch == paareCOM) {
                                        document.querySelector(".sieger_text").innerHTML =
                                            "Du hast " + paareMensch + " Paare und der COM hat " + paareCOM + " Paare!" +
                                                " </dr> " + "Gleichstand!";
                                    } //Ende if Gleichstand
                                    if (paareMensch < paareCOM) {
                                        document.querySelector(".sieger_text").innerHTML =
                                            "Du hast " + paareMensch + " Paar(e) und der COM hat " + paareCOM + " Paare!" +
                                                " </dr> " + "Schade! Vielleicht beim nächsten Mal?";
                                    } // Ende Niederlage Mensch
                                } // Ende if keine Karten mehr da
                                chance = 0;
                            } //Ende if gleich
                            else { //wenn nicht gleich
                                //Karten wieder umdrehen
                                tempKarte1.classList.add("blank");
                                tempKarte2.classList.add("blank");
                                tempKarte1 = null;
                                tempKarte2 = null;
                                console.log("COM ist dran");
                                COM1();
                            } //Ende else nicht gleich Mensch
                        }, 1000); //Ende setTimeout Mensch
                    } //Ende Bedingung ==1
                } // Ende Check Schwierigkeit
            } //Ende if !=tempKarte1
        }); //Ende EventListener Karte 2
    } //Ende for EventListener
    //wird der Refresh_bttn gedrückt wird die Seite neu geladen
    document.getElementById("refresh_bttn").addEventListener("click", function () {
        location.reload();
    });
})(fin || (fin = {})); //Ende namespace
//# sourceMappingURL=fin_script.js.map