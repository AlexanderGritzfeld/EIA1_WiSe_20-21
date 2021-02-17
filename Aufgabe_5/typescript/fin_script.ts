
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

/*Interface
interface memoryL {
    content: HTMLElement;
} */

let k1: HTMLElement;
let k2: HTMLElement;
let k3: HTMLElement;
let k4: HTMLElement;
let k5: HTMLElement;
let k6: HTMLElement;
let k7: HTMLElement;
let k8: HTMLElement;
let memoryL: HTMLElement[] = [k1, k2, k3, k4, k5, k6, k7, k8];





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
        //console.log("leicht");
        k2.classList.add("rot");
        k1.classList.add("zebra");
        break;
    case "m":
        //console.log("mittel");
        break;    
}//Ende switch case
}//Ende function verarbeite

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
document.querySelector(".chatchat").addEventListener("click", function(): void {
console.log(cCheck);
});



} //Ende namespace
