//Definition der Variabeln
var africa08 : number = 1028;
var africa18 : number = 1235.5;

var southamerica08 : number = 1132.6;
var southamerica18 : number = 1261.5;

var europe08 : number = 4965.7;
var europe18 : number = 4209.3;

var northamerica08 : number = 6600.4;
var northamerica18 : number = 6035.6;

var asia08 : number = 12954.7;
var asia18 : number = 16274.1;

var australia08 : number = 1993;
var australia18 : number = 2100.5;

var gesamt08 : number = africa08 + southamerica08 + europe08 + northamerica08 + asia08 +australia08;
var gesamt18 : number = africa18 + southamerica18 + europe18 + northamerica18 + asia18 +australia18;

//Die Konsolenausgabe stört ja niemanden, oder?
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

document.querySelector('.europe').innerHTML=