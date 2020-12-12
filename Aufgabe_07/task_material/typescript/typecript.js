/*ah shit here we go again */
//gut definieren wir erstmal die Sounds
var drumPad0 = [];
drumPad0[0] = new Audio('./assets/A.mp3');
drumPad0[1] = new Audio('./assets/C.mp3');
drumPad0[2] = new Audio('./assets/F.mp3');
drumPad0[3] = new Audio('./assets/G.mp3');
drumPad0[4] = new Audio('./assets/hihat.mp3');
drumPad0[5] = new Audio('./assets/kick.mp3');
drumPad0[6] = new Audio('./assets/laugh-1.mp3');
drumPad0[7] = new Audio('./assets/laugh-2.mp3');
drumPad0[8] = new Audio('./assets/snare.mp3');
//Eventlistener (erstmal nur vom Drum Pad)
document.querySelector('#pad1').addEventListener('click', function () {
    playSound(0);
});
document.querySelector('#pad2').addEventListener('click', function () {
    playSound(1);
});
document.querySelector('#pad3').addEventListener('click', function () {
    playSound(2);
});
document.querySelector('#pad4').addEventListener('click', function () {
    playSound(3);
});
document.querySelector('#pad5').addEventListener('click', function () {
    playSound(4);
});
document.querySelector('#pad6').addEventListener('click', function () {
    playSound(5);
});
document.querySelector('#pad7').addEventListener('click', function () {
    playSound(6);
});
document.querySelector('#pad8').addEventListener('click', function () {
    playSound(7);
});
document.querySelector('#pad9').addEventListener('click', function () {
    playSound(8);
});
//Funktion, die aufgelöst werden soll
function playSound(i) {
    drumPad0[i].play();
}
;
//jetzt kommen wir zum Teil B
document.querySelector('#playbutton').addEventListener('click', function () {
    setInterval(function () {
        playButton();
    }, 500);
});
//die Funktion für den PlayButton
function playButton() {
    drumPad0[5].play();
    drumPad0[8].play();
    drumPad0[4].play();
}
;
//# sourceMappingURL=typecript.js.map