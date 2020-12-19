// Eine zusätzliche Aufgabe, in der wir eine Anwendung programmieren sollen, welche uns helfen soll nicht mit unseren Aufgabe überfordert zu sein
namespace L09 { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

    //Index
    let index: number = 0;

    //Interface für Objekte der Aufgabe(n)
    interface Aufgabe {
    content: string; //Was drinne steht
    status: boolean; //für dat Häkchen
}
//und jetzt lasst uns doch spaßeshalber ein paar Aufgaben erstellen7
    let dieAufgaben: Aufgabe[]  = [
{
    content: "Schöne Feiertage haben.",
    status: false
},
{
    content: "Dieser Aufgabe als gut empfinden. :)",
    status: true
}
];
//jetzt definieren wir/ beziehen uns auf HTMLElemente
    let newtask: HTMLInputElement;
    let hinzu: HTMLElement;
    let taskElement: HTMLElement;
    let zähler: HTMLElement;
}