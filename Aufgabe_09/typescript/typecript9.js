// Eine zusätzliche Aufgabe, in der wir eine Anwendung programmieren sollen, welche uns helfen soll nicht mit unseren Aufgabe überfordert zu sein
var L09;
(function (L09) {
    //Index
    var index = 0;
    //und jetzt lasst uns doch spaßeshalber ein paar Aufgaben erstellen7
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
    var newtask;
    var hinzu;
    var taskElement;
    var zähler;
    newtask = document.querySelector("#newtask");
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
    //Funktion zum Anmzeigen der Aufgaben
    function zeigeAufgaben() {
        for (var i = 0; i < dieAufgaben.length; i++) {
            var todos = document.createElement("div"); //der "Rahmen"
            todos.classList.add("taskElement");
        }
    }
    //das sollte jetzt die Aufgaben hinzufügen, aber noch nicht darstellen
    function addTask() {
        if (newtask.value != "") { //wenn das Eingabefeld nicht leer ist, solst du folgendes machen
            var newContent = newtask.value;
            var newAufgabe = {
                content: newContent,
                status: false
            };
            dieAufgaben.push(newAufgabe); //das fügt die neue Aufgabe zum Array hinzu
            newtask.value = ""; //setzt Input-Feld wieder leer
            zeigeAufgaben(); //soll Funktion abspielen, welche unsere neue Aufgabe zeigen soll
        }
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=typecript9.js.map