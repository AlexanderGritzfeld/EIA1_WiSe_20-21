/*ah shit here we go again */
//gut definieren wir erstmal die Sounds
var drumPad = [];
drumPad[0] = new Audio("./assets/A.mp3");
drumPad[1] = new Audio("./assets/C.mp3");
drumPad[2] = new Audio("./assets/F.mp3");
drumPad[3] = new Audio("./assets/G.mp3");
drumPad[4] = new Audio("./assets/hihat.mp3");
drumPad[5] = new Audio("./assets/kick.mp3");
drumPad[6] = new Audio("./assets/laugh-1.mp3");
drumPad[7] = new Audio("./assets/laugh-2.mp3");
drumPad[8] = new Audio("./assets/snare.mp3");
//Eventlistener (erstmal nur vom Drum Pad)
document.querySelector("#pad1").addEventListener("click", function () {
    playAudio(0);
});
document.querySelector("#pad2").addEventListener("click", function () {
    playAudio(1);
});
document.querySelector("#pad3").addEventListener("click", function () {
    playAudio(2);
});
document.querySelector("#pad4").addEventListener("click", function () {
    playAudio(3);
});
document.querySelector("#pad5").addEventListener("click", function () {
    playAudio(4);
});
document.querySelector("#pad6").addEventListener("click", function () {
    playAudio(5);
});
document.querySelector("#pad7").addEventListener("click", function () {
    playAudio(6);
});
document.querySelector("#pad8").addEventListener("click", function () {
    playAudio(7);
});
document.querySelector("#pad9").addEventListener("click", function () {
    playAudio(8);
});
//Funktion, die aufgelöst werden soll
function playAudio(i) {
    drumPad[i].play();
}
;
//jetzt kommen wir zum Teil B
document.querySelector("#playbutton").addEventListener("click", function () {
    setInterval(function () {
        playKnopf();
    }, 500);
});
//die Funktion für den PlayButton
function playKnopf() {
    drumPad[5].play();
    drumPad[8].play();
    drumPad[4].play();
}
//jetzt soll, wenn man den Play Button drückt dieser verschwinden und der Stop-Button auftauchen (und umgekehrt)
/*zunächst einmal definiere ich dat, damit ich es später einfacher habe. Ich kann mir dann nämlich
"document.get..." zu scripten sparen */
var myPlayBtn = document.getElementById("play");
var myStopBtn = document.getElementById("stop");
/*Event bei welcher meiner Funktion (die später kommt) sagt, welche Werte sie nehmen soll beim Klick auf dem speziellen Element */
myPlayBtn.addEventListener("click", function () {
    toggleClasses(this, myStopBtn);
});
//nochmal dasselbe nur umgekehrt
myStopBtn.addEventListener("click", function () {
    toggleClasses(this, myPlayBtn);
});
//die eigentliche Funktion, die dahinter steckt
function toggleClasses(firstHTMLElement, secondHTMLElement) {
    firstHTMLElement.classList.add("is-hidden"); //fügt definierten ersten Element Klasse hinzu --> verschwindet
    secondHTMLElement.classList.remove("is-hidden"); //entfernt von zweitem Element Klasse --> ploppt auf
    console.log("Hallo?");
}
//Schalter für Record-Button
//# sourceMappingURL=typecript8.js.map