// Eine zusätzliche Aufgabe, in der wir eine Anwendung programmieren sollen, welche uns helfen soll nicht mit unseren Aufgabe überfordert zu sein
var L09;
(function (L09) {
    /*Index
    let index: number = 0; */
    //und jetzt lasst uns doch spaßeshalber ein paar Aufgaben erstellen
    var dieAufgaben = [
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
    var add;
    var hinzu;
    var taskElement;
    var zähler;
    add = document.querySelector("#add");
    hinzu = document.querySelector("#hinzu");
    taskElement = document.querySelector(".tasks");
    zähler = document.querySelector("#zähler");
    //Bei Knopfdruck wir Funktion aufgerufen, die Aufgabe hinzufügt
    hinzu.addEventListener("click", addTask);
    //aber soll ja auch durch "Enter" hizufügen, also:
    document.addEventListener("keydown", function (pressed) {
        if (pressed.keyCode === 13) { //keyCode scheint veraltet zu sein, aber was soll ich sonst nehmen?
            addTask();
        }
    });
    //das sollte jetzt die Aufgaben hinzufügen, aber noch nicht darstellen
    function addTask() {
        console.log("Du hast geklickt/ gedrückt");
        if (add.value != "") { //wenn das Eingabefeld nicht leer ist, solst du folgendes machen
            var newContent = add.value;
            console.log("In dem Feld stand was, also arbeite ich weiter");
            var newAufgabe = {
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
    function zeigeAufgaben() {
        taskElement.innerHTML = ""; //das macht, das nicht bei jeder neuen Aufgabe, die vorherigen Aufgaben mitdazukommen
        console.log("zeigeAufgaben wird ausgeführt");
        var _loop_1 = function (i) {
            console.log("Bedingung ist erfüllt");
            var todos = document.createElement("div"); //der "Rahmen"
            todos.classList.add("taskElement");
            todos.innerHTML =
                dieAufgaben[i].content +
                    "<span class='delete fas fa-trash'></span><span class='checkbox " +
                    dieAufgaben[i].status +
                    "'><i class='fas fa-check'></i></span>";
            todos.querySelector(".checkbox").addEventListener("click", function () {
                wechselStatus(i);
            });
            taskElement.appendChild(todos); //das bringt irgendwie alles zum laufen, also, dass die html Elemente erzeugt werden
        };
        /* taskElement.innerHTML = ""; */ //was macht das?
        for (var i = 0; i < dieAufgaben.length; i++) {
            _loop_1(i);
        }
        function wechselStatus(i) {
            dieAufgaben[i].status = !dieAufgaben[i].status;
            zeigeAufgaben();
        }
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=typecript9.js.map