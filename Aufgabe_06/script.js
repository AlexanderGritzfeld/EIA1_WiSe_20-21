//Definition der Variabeln
var africa08 = 1028;
var africa18 = 1235.5;
var southamerica08 = 1132.6;
var southamerica18 = 1261.5;
var europe08 = 4965.7;
var europe18 = 4209.3;
var northamerica08 = 6600.4;
var northamerica18 = 6035.6;
var asia08 = 12954.7;
var asia18 = 16274.1;
var australia08 = 1993;
var australia18 = 2100.5;
var gesamt08 = africa08 + southamerica08 + europe08 + northamerica08 + asia08 + australia08;
var gesamt18 = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;
/* Die Konsolenausgabe der letzten Aufgabe (Mit einigen mathematischen Denkfehlern, wie ich feststellen musste...)

console.log("Die Emission von Afrika ist: " + africa18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + Math.round(africa18/gesamt18*100) + "%")
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((africa18/ africa08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(africa18 - africa08) + "kg CO2")

console.log(" ")

console.log("Die Emission von Südamerika ist: " + southamerica18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + Math.round(southamerica18/gesamt18*100) + "%")
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((southamerica18/ southamerica08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(southamerica18 - southamerica08) + "kg CO2")

console.log(" ")

console.log("Die Emission von Europa ist: " + europe18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + Math.round(europe18/gesamt18*100) + "%")
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((europe18/ europe08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(europe18 - europe08) + "kg CO2")

console.log(" ")

console.log("Die Emission von Nordamerika ist: " + northamerica18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + Math.round(northamerica18/gesamt18*100) + "%")
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((northamerica18/ northamerica08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(northamerica18 - northamerica08) + "kg CO2")

console.log(" ")

console.log("Die Emission von Asien ist: " + asia18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + Math.round(asia18/gesamt18*100) + "%")
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((asia18/ asia08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(asia18 - asia08) + "kg CO2")

console.log(" ")

console.log("Die Emission von Australien ist: " + australia18 + "kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + Math.round(australia18/gesamt18*100) + "%")
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission zu " + Math.round(((australia18/ australia08)-1)*100) + "% verändert")
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(australia18 - australia08) + "kg CO2")

Konsolenausgabe Ende */
//Jetzt beginnt das Programmieren! *Reibt sich die Hände*
//Erstmal die EventListener/ Also die, die die Funktion zum laufen bringen
window.addEventListener('load', function () {
    document.querySelector("#europe").addEventListener("click", function () {
        domManipulator("europe", europe08, europe18);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#northamerica").addEventListener("click", function () {
        domManipulator("northamerica", northamerica08, northamerica18);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#southamerica").addEventListener("click", function () {
        domManipulator("southamerica", southamerica08, southamerica18);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#africa").addEventListener("click", function () {
        domManipulator("africa", africa08, africa18);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#asia").addEventListener("click", function () {
        domManipulator("asia", asia08, asia18);
    });
});
window.addEventListener('load', function () {
    document.querySelector("#australia").addEventListener("click", function () {
        domManipulator("australia", australia08, australia18);
    });
});
//Ladies und Gentlemen, das worauf sie alle gewartet haben: Die Funktion
function domManipulator(kontinent, kontinent08, kontinent18) {
    //Der Text soll sich ändern
    document.querySelector("#titleRegion").innerHTML = kontinent;
    document.querySelector("#titleRegion2").innerHTML = kontinent;
    //Und jetzt die Zahlen
    document.querySelector("#emission").innerHTML = kontinent18.toFixed(2) + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = (100 / (gesamt18 / kontinent18)).toFixed(2) + "%";
    document.querySelector("#wachstumsrate").innerHTML = (((kontinent18 / kontinent08) - 1) * 100).toFixed(2) + "%";
    document.querySelector("#wachstumZahl").innerHTML = (kontinent18 - kontinent08).toFixed(2) + " kg CO2";
    //Schließlich noch das Diagramm
    document.querySelector(".chart").setAttribute("style", "height: " + (100 / (gesamt18 / kontinent18)).toFixed(2) + "%");
}
//# sourceMappingURL=script.js.map