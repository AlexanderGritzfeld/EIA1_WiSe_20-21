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
console.log("Die Emission von Afrika ist: " + africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + Math.round(africa18 / gesamt18 * 100) + "%");
//# sourceMappingURL=script.js.map