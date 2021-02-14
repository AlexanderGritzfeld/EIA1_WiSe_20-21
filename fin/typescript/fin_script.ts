//größtenteils von Aufgabe 09 rüberkopiert
namespace L10 { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

    //Interface für Objekte der Aufgabe(n)
    interface Aufgabe {
    content: string; //Was drinne steht
    status: boolean; //für dat Häkchen
}
//Array für die Aufgaben mit dem Typ des Interfaces
    let dieAufgaben: Aufgabe[]  = [];

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
        /*console.log("Du hast geklickt/ gedrückt");*/
        if (add.value != "") { //wenn das Eingabefeld nicht leer ist, solst du folgendes machen
            let newContent: string = add.value;
            /* console.log("In dem Feld stand was, also arbeite ich weiter")*/
            const newAufgabe: Aufgabe = {
                content: newContent,
                status: false
            };
            dieAufgaben.unshift(newAufgabe); //das fügt die neue Aufgabe zum Array hinzu
            add.value = ""; //setzt Input-Feld wieder leer
            zeigeAufgaben(); //soll Funktion abspielen, welche unsere neue Aufgabe zeigen soll
            /* console.log("test: " + dieAufgaben[2].content);*/
        }
    }
    //Funktion zum Anzeigen der Aufgaben
    function zeigeAufgaben(): void {
        taskElement.innerHTML = ""; //das macht, das nicht bei jeder neuen Aufgabe, die vorherigen Aufgaben mitdazukommen
        /* console.log("test: zeigeAufgaben wird ausgeführt"); */
        for (let i: number = 0; i < dieAufgaben.length; i++) {
            /* console.log("test: Bedingung ist erfüllt"); */
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
            
            todos.querySelector(".delete").addEventListener("click", function (): void {
                bringDenMüllNachDraußen(i);
            });

            taskElement.appendChild(todos); //das bringt alles zum laufen, also, dass die html Elemente erzeugt werden
        }

        langsamHabeIchGenugVonDieserAufgabe();
        
    }

    function bringDenMüllNachDraußen(i: number): void {
            dieAufgaben.splice(i, 1); //entfernt die ausgewählte Aufgabe im Array
            zeigeAufgaben(); //hierdurch wir das in html übernommen
    }

    function wechselStatus(i: number): void {
                /*console.log("test: " + dieAufgaben[i].status); */
                dieAufgaben[i].status = !dieAufgaben[i].status; //switcht boolean
                zeigeAufgaben(); //dadurch wird true/ false auch im html Code übertragen
        }

        //der Zähler, der die Aufgaben trackt
    function langsamHabeIchGenugVonDieserAufgabe(): void {
            zähler.innerHTML = "<i>" + dieAufgaben.length + "</i> Aufgaben sind"; //italic, weil wenn ich <p> nehme bricht der mir in der Zeile weg
            if (dieAufgaben.length == 1) {
                zähler.innerHTML = "<i>" + dieAufgaben.length + "</i> Aufgabe ist";
            }
        }
}
