//größtenteils von Aufgabe 09/10 rüberkopiert
namespace L11 { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

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
    let zählerErledigt: HTMLElement;
    let zählerNoch: HTMLElement;
    let artyomKnopf: HTMLElement;

    //Artyom muss definiert werden?
    declare var Artyom: any;
    
    add = document.querySelector("#add");
    hinzu = document.querySelector("#hinzu");
    taskElement = document.querySelector(".tasks");
    zähler = document.querySelector("#zähler");
    zählerErledigt = document.querySelector("#zählerErledigt");
    zählerNoch = document.querySelector("#zählerNoch");
    artyomKnopf = document.querySelector("#artyomKnopf");

    //Bei Knopfdruck wir Funktion aufgerufen, die Aufgabe hinzufügt
    hinzu.addEventListener("click", addTask);
    
    //aber soll ja auch durch "Enter" hizufügen, also:
    document.addEventListener("keydown", function (pressed: KeyboardEvent): void {
        if (pressed.keyCode === 13) { //keyCode scheint veraltet zu sein, aber was soll ich sonst nehmen?
            addTask();
        }
    });
    //führt Artyom aus/ sagt ihm er soll sich bereit halten
    artyomKnopf.addEventListener("click", artyom);

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
        let counter: number = 0;
        for (var i: number = 0; i < dieAufgaben.length; ++i) {
            if (dieAufgaben[i].status == false) {
                counter++;
            }
        }
        zähler.innerHTML = "<i>" + dieAufgaben.length + "<i> Aufgaben sind";
        if (dieAufgaben.length == 1) {
                zähler.innerHTML = "<i>" + dieAufgaben.length + "</i> Aufgabe ist";
            }
        zählerNoch.innerHTML = "<i>" + counter + "<i> Aufgaben sind";   
        if (counter == 1) {
            zählerNoch.innerHTML = "<i>" + counter + "</i> Aufgabe ist";
        }
        zählerErledigt.innerHTML = "<i>" + (dieAufgaben.length - counter) + "<i> Aufgaben sind";
        if ((dieAufgaben.length - counter) == 1) {
            zählerErledigt.innerHTML = "<i>" + (dieAufgaben.length - counter) + "</i> Aufgabe ist";
        } 
        }
    //Versuchen wir uns mal an die Spracheingabe

    function artyom(): void {
        const artyom: any = new Artyom();

        artyom.addCommands({
            //Schlüsselwörter, auf die er hört
            indexes: ["erstelle Aufgabe *", "erstelle eine neue Aufgabe *", "add new task *"],
            smart: true, //soll mithören und das gesagt dann später in string umwandeln
            //und dass soll er machen
            action: function (i: number, wildcard: string): void {
                const newVoiceAufgabe: Aufgabe = {
                    content: wildcard, //das, was nach dem Schlüsselwort folgt
                    status: false   
                };
                dieAufgaben.unshift(newVoiceAufgabe);
                zeigeAufgaben();
            }
        });
//jetzt legen wir ein paar Sachen für den Artyom fest- so z.B. ob man immer die Berechtigung geben soll usw...
        function startPermaArtyom(): void {
            artyom.fatality();

            setTimeout(function (): void {
                artyom
                .initialize({
                    lang: "de-DE",
                    continous: true,
                    listen: true,
                    interimResult: true,
                    debug: false
                });
            },         250);
        }
        startPermaArtyom();
    }
}