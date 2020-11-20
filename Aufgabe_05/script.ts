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


console.log("Die Emission von Afrika ist: " + africa18 + " kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + Math.round(africa18/gesamt18*100) + "%")