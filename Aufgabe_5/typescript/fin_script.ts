
namespace fin { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

let cCheck: string;    

//Definition/ einfachere Deklaration von HTML-Elementen

//Pop-Up für Schwierigkeiten
let challenge: HTMLElement;

//Knöpfe für Schwierigkeiten
let cBttn: HTMLElement;

let leicht: HTMLElement;
let mittel: HTMLElement;
let schwierig: HTMLElement;

//16 Karten rechts    
let set2: HTMLElement;

//Reihen von Karten
let is12: HTMLElement;
let is16: HTMLElement;

//Karten an sich

let k1: HTMLElement;
let k2: HTMLElement;
let k3: HTMLElement;
let k4: HTMLElement;
let k5: HTMLElement;
let k6: HTMLElement;
let k7: HTMLElement;
let k8: HTMLElement;
let k9: HTMLElement;
let k10: HTMLElement;
let k11: HTMLElement;
let k12: HTMLElement;
let k13: HTMLElement;
let k14: HTMLElement;
let k15: HTMLElement;
let k16: HTMLElement;
let k17: HTMLElement;
let k18: HTMLElement;
let k19: HTMLElement;
let k20: HTMLElement;
let k21: HTMLElement;
let k22: HTMLElement;
let k23: HTMLElement;
let k24: HTMLElement;
let k25: HTMLElement;
let k26: HTMLElement;
let k27: HTMLElement;
let k28: HTMLElement;
let k29: HTMLElement;
let k30: HTMLElement;
let k31: HTMLElement;
let k32: HTMLElement;

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

let memoryL: HTMLElement[] = [k1, k2, k3, k4, k5, k6, k7, k8];

let memoryM: HTMLElement[] = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16];

let memoryS: HTMLElement[] = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31, k32];

//dazugehörige Fraben, Piktogramme und Sätze

let farbeOderSoL: string[] = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis"];

let farbeOderSoM: string[] = ["rot", "rot", "lila", "lila", "pfeil_unten", "pfeil_unten", "kreis", "kreis", "hellgrün", "hellgrün", "zebra", "zebra", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2"];

let farbeOderSoS: string[] = ["rot", "rot", "lila", "lila", "hellgrün", "hellgrün", "css_defi_Teil1", "css_defi_Teil2", "html_Teil1", "html_Teil2", "rosa", "rosa", "orange", "orange", "js1_T1", "js1_t2", "js2_t1", "js2_t2", "js3_t1", "js3_t2", "js4_t1", "js4_t2", "hellblau", "hellblau", "gelb", "gelb", "dunkelgrün", "dunkelgrün", "dunkelblau", "dunkelblau", "braun", "braun"];

//Ende Definition

//Bei Klick auf Mittel sollen nur noch 8 Kartenpaare da sein
mittel.addEventListener("click", function(): void {
    set2.classList.add("is-hidden");

    cCheck = "m";
}); //Ende Mittel


//Bei Klick auf Leicht sollen 4
leicht.addEventListener("click", function(): void {
    set2.classList.add("is-hidden");
    is12.classList.add("is-hidden");
    is16.classList.add("is-hidden");

    cCheck = "l";
}); //Ende Leicht

schwierig.addEventListener("click", function(): void {
    cCheck = "s";
}); //Ende Schwierig

//Pop-Up soll verschwinden nach dem Drücken
cBttn.addEventListener("click", function(): void {
    challenge.classList.add("is-hidden");
    verarbeite(); //das stößt den Verarbeitungsprozess an

}); //Ende CBttn



//jetzt sollen die Karten-Klassen verteilen werden; basierend auf Schwierigkeit

function verarbeite(): void { //function, weil erst checken soll, wenn Wert definiert wird
switch (cCheck) {

    case "l":
        //erstmal muss das Array der Karten zufällig verteilt werden
        memoryL.sort((a, b) => 0.5 - Math.random());
        farbeOderSoL.sort((a, b) => 0.5 - Math.random());

        //und jetzt werden sie verteilt
        for (let a: number = 0; a < memoryL.length; a++) {
            memoryL[a].classList.add(farbeOderSoL[a]);
        } 
        break;
    case "m":
        //erstmal muss das Array der Karten zufällig verteilt werden
        memoryM.sort((a, b) => 0.5 - Math.random());
        farbeOderSoM.sort((a, b) => 0.5 - Math.random());

        //und jetzt werden sie verteilt
        for (let b: number = 0; b < memoryM.length; b++) {
            memoryM[b].classList.add(farbeOderSoM[b]);
        } 
        break;    
    case "s":
        //erstmal muss das Array der Karten zufällig verteilt werden
        memoryS.sort((a, b) => 0.5 - Math.random());
        farbeOderSoS.sort((a, b) => 0.5 - Math.random());

        //und jetzt werden sie verteilt
        for (let c: number = 0; c < memoryS.length; c++) {
            memoryS[c].classList.add(farbeOderSoS[c]);
        } 
        break;
}//Ende switch case
}//Ende function verarbeiten

//Wenn man eine Karte anklickt soll sie sich umdrehen
var alleKarten: NodeList = document.querySelectorAll(".karte");

for (let z: number = 0; z < alleKarten.length; z++) {
    alleKarten[z].addEventListener("click", function(): void {
        console.log("Klick");
    
//soll nur machen, nachdem man eine Schwierigkeitsstufe ausgewählt hat
        if (cCheck == "l" || cCheck == "m" || cCheck == "s") {
        for (let chance: number = 0; chance < 2; chance++) { //man darf ja zwei mal umdrehen
            console.log(chance);
            console.log(this);
            this.classList.toggle("blank");
        }//Ende for Schleife zwei mal umdrehen
    } else {
        alert("Hey! Nicht schummeln!");
    }// Ende if else
});
}


//document.querySelector(".k1" || ".k2" || ".k3" || ".k4" || ".k5" || ".k6" || ".k7" || ".k8" || ".k9" || ".k10" || ".k11" || ".k12" || ".k13" || ".k14" || ".k15" || ".k16" || ".k17" || ".k18" || ".k19" || ".k20" /* k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31" || ".k32"*/).addEventListener("click", function(): void {


//Test
document.querySelector(".chatchat").addEventListener("click", function(): void {
console.log(cCheck);
console.log(memoryL);
});



} //Ende namespace
