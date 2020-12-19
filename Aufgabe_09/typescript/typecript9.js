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
    taskElement = document.querySelector("tasks");
    zähler = document.querySelector("#zähler");
    //Bei Knopfdruck wir Funktion aufgerufen, die Aufgabe hinzufügt
    hinzu.addEventListener("click", addTask);
    //aber soll ja auch durch "Enter" hizufügen, also:
    document.addEventListener("keydown", function (pressed) {
        if (pressed.keyCode === 13) {
            addTask();
        }
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=typecript9.js.map