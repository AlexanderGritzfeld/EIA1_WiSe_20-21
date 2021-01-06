// Eine zusätzliche Aufgabe, in der wir eine Anwendung programmieren sollen, welche uns helfen soll nicht mit unseren Aufgabe überfordert zu sein
var L10;
(function (L10) {
    //Array für die Aufgaben mit dem Typ des Interfaces
    var dieAufgaben = [];
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
        /*console.log("Du hast geklickt/ gedrückt");*/
        if (add.value != "") { //wenn das Eingabefeld nicht leer ist, solst du folgendes machen
            var newContent = add.value;
            /* console.log("In dem Feld stand was, also arbeite ich weiter");*/
            var newAufgabe = {
                content: newContent,
                status: false
            };
            dieAufgaben.push(newAufgabe); //das fügt die neue Aufgabe zum Array hinzu
            add.value = ""; //setzt Input-Feld wieder leer
            zeigeAufgaben(); //soll Funktion abspielen, welche unsere neue Aufgabe zeigen soll
            /* console.log("test: " + dieAufgaben[2].content);*/
        }
    }
    //Funktion zum Anzeigen der Aufgaben
    function zeigeAufgaben() {
        taskElement.innerHTML = ""; //das macht, das nicht bei jeder neuen Aufgabe, die vorherigen Aufgaben mitdazukommen
        var _loop_1 = function (i) {
            /* console.log("test: Bedingung ist erfüllt"); */
            var todos = document.createElement("div"); //der "Rahmen"
            todos.classList.add("taskElement");
            todos.innerHTML =
                dieAufgaben[i].content +
                    "<span class='delete fas fa-trash'></span><span class='checkbox " + //der Mülleimer und die Checkboc
                    dieAufgaben[i].status +
                    "'><i class='fas fa-check'></i></span>"; //das Häkchen
            todos.querySelector(".checkbox").addEventListener("click", function () {
                wechselStatus(i);
            });
            todos.querySelector(".delete").addEventListener("click", function () {
                bringDenMüllNachDraußen(i);
            });
            taskElement.appendChild(todos); //das bringt alles zum laufen, also, dass die html Elemente erzeugt werden
        };
        /* console.log("test: zeigeAufgaben wird ausgeführt"); */
        for (var i = 0; i < dieAufgaben.length; i++) {
            _loop_1(i);
        }
        langsamHabeIchGenugVonDieserAufgabe();
    }
    function bringDenMüllNachDraußen(i) {
        dieAufgaben.splice(i, 1); //entfernt die ausgewählte Aufgabe im Array
        zeigeAufgaben(); //hierdurch wir das in html übernommen
    }
    function wechselStatus(i) {
        /*console.log("test: " + dieAufgaben[i].status); */
        dieAufgaben[i].status = !dieAufgaben[i].status; //switcht boolean
        zeigeAufgaben(); //dadurch wird true/ false auch im html Code übertragen
    }
    //der Zähler, der die Aufgaben trackt
    function langsamHabeIchGenugVonDieserAufgabe() {
        zähler.innerHTML = "<i>" + dieAufgaben.length + "</i> Aufgaben sind"; //italic, weil wenn ich <p> nehme bricht der mir in der Zeile weg
        if (dieAufgaben.length == 1) {
            zähler.innerHTML = "<i>" + dieAufgaben.length + "</i> Aufgabe ist";
        }
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=typecript9.js.map