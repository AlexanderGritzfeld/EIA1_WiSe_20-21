// Eine zusätzliche Aufgabe, in der wir eine Anwendung programmieren sollen, welche uns helfen soll nicht mit unseren Aufgabe überfordert zu sein
namespace L09 { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

    /*Index
    let index: number = 0; */

    //Interface für Objekte der Aufgabe(n)
    interface Aufgabe {
    content: string; //Was drinne steht
    status: boolean; //für dat Häkchen
}
//und jetzt lasst uns doch spaßeshalber ein paar Aufgaben erstellen
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
    let add: HTMLInputElement;
    let hinzu: HTMLElement;
    let taskElement: HTMLElement;
    let zähler: HTMLElement;
    
    add = document.querySelector("#add");
    hinzu = document.querySelector("#hinzu");
    taskElement = document.querySelector(".tasks");
    zähler = document.querySelector("#zähler");

    //Bei Knopfdruck wir Funktion aufgerufen, die Aufgabe hinzufügt
    hinzu.addEventListener("click", addTask);
    
    //aber soll ja auch durch "Enter" hizufügen, also:
    document.addEventListener("keydown", function (pressed: KeyboardEvent): void {
        if (pressed.keyCode === 13) { //keyCode scheint veraltet zu sein, aber was soll ich sonst nehmen?
            addTask();
        }
    });

    //das sollte jetzt die Aufgaben hinzufügen, aber noch nicht darstellen
    function addTask(): void {
        console.log("Du hast geklickt/ gedrückt");
        if (add.value != "") { //wenn das Eingabefeld nicht leer ist, solst du folgendes machen
            let newContent: string = add.value;
            console.log("In dem Feld stand was, also arbeite ich weiter");
            const newAufgabe: Aufgabe = {
                content: newContent,
                status: false
            };
            dieAufgaben.push(newAufgabe); //das fügt die neue Aufgabe zum Array hinzu
            add.value = ""; //setzt Input-Feld wieder leer
            zeigeAufgaben(); //soll Funktion abspielen, welche unsere neue Aufgabe zeigen soll
            console.log(dieAufgaben[2].content);
        }
    }
    //Funktion zum Anmzeigen der Aufgaben
    function zeigeAufgaben(): void {
        taskElement.innerHTML = ""; //das macht, das nicht bei jeder neuen Aufgabe, die vorherigen Aufgaben mitdazukommen
        console.log("zeigeAufgaben wird ausgeführt");
        /* taskElement.innerHTML = ""; */ //was macht das?
        for (let i: number = 0; i < dieAufgaben.length; i++) {
            console.log("Bedingung ist erfüllt");
            let todos: HTMLElement = document.createElement("div"); //der "Rahmen"
            todos.classList.add("taskElement");
            todos.innerHTML =
            dieAufgaben[i].content +
            "<span class='delete fas fa-trash'></span><span class='checkbox " + //der Mülleimer und die Checkboc
            dieAufgaben[i].status +
            "'><i class='fas fa-check'></i></span>"; //das Häkchen

            todos.querySelector(".checkbox").addEventListener("click", function (): void {
                wechselStatus(i);
            });
            

            taskElement.appendChild(todos); //das bringt irgendwie alles zum laufen, also, dass die html Elemente erzeugt werden
        }
        function wechselStatus(i: number): void {
            if (dieAufgaben[i].status == false) {
                console.log(dieAufgaben[i].status);
            }
        }
    }
}
