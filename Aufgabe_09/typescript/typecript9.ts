/*ah shit here we go again */
namespace L09 { //damit es nicht rummeckert, dass ich Namen schon vergeben habe
//gut definieren wir erstmal die Sounds
let drumPad: HTMLAudioElement [] = [];
drumPad[0] = new Audio("./assets/smw_coin.wav");
drumPad[1] = new Audio("./assets/smw_power-up_appears.wav");
drumPad[2] = new Audio("./assets/smw_power-up.wav");
drumPad[3] = new Audio("./assets/smw_jump.wav");
drumPad[4] = new Audio("./assets/smw_spin_jump.wav");
drumPad[5] = new Audio("./assets/smw_spring_jump.wav");
drumPad[6] = new Audio("./assets/smw_stomp_koopa_kid.wav");
drumPad[7] = new Audio("./assets/smw_pipe.wav");
drumPad[8] = new Audio("./assets/smw_1-up.wav");
//Sounds stammen von hier https://themushroomkingdom.net/media/smw/wav

//Funktion, die aufgelöst werden soll
function playAudio(thesound: number): void {
    drumPad [thesound].play();
}

//Eventlistener (erstmal nur vom Drum Pad)
document.querySelector("#pad1").addEventListener("click", function(): void {
    playAudio(0);
    recordAudio(0); //brauchen wir später für den Record-Button
});
document.querySelector("#pad2").addEventListener("click", function(): void {
    playAudio(1);
    recordAudio(1);
});
document.querySelector("#pad3").addEventListener("click", function(): void {
    playAudio(2);
    recordAudio(2);
});
document.querySelector("#pad4").addEventListener("click", function(): void {
    playAudio(3);
    recordAudio(3);
});
document.querySelector("#pad5").addEventListener("click", function(): void {
    playAudio(4);
    recordAudio(4);
});
document.querySelector("#pad6").addEventListener("click", function(): void {
    playAudio(5);
    recordAudio(5);
});
document.querySelector("#pad7").addEventListener("click", function(): void {
    playAudio(6);
    recordAudio(6);
});
document.querySelector("#pad8").addEventListener("click", function(): void {
    playAudio(7);
    recordAudio(7);
});
document.querySelector("#pad9").addEventListener("click", function(): void {
    playAudio(8);
    recordAudio(8);
});

//das Array für die Standarttonabfolge
let myArray: number[] = [3, 4, 5];

//jetzt soll, wenn man den Play Button drückt dieser verschwinden und der Stop-Button auftauchen (und umgekehrt)

/*zunächst einmal definiere ich dat, damit ich es später einfacher habe. Ich kann mir dann nämlich
"document.get..." zu scripten sparen */
const myPlayBtn: HTMLElement = document.getElementById("myPlayBtn");
const myStopBtn: HTMLElement = document.getElementById("myStopBtn");
const myRecBtn: HTMLElement = document.getElementById("myRecBtn");
const myTrashBtn: HTMLElement = document.getElementById("myTrashBtn");

/*Event bei welcher meiner Funktion (die später kommt) sagt, welche Werte sie nehmen soll beim Klick auf dem speziellen Element */
myPlayBtn.addEventListener("click", function (): void {
    toggleClasses(this, myStopBtn); 
    playSchleife(true); //für später im Code; sagt bei Knopfdruck, das Schleife spielen soll
});
//nochmal dasselbe nur umgekehrt
myStopBtn.addEventListener("click", function (): void {
    toggleClasses(this, myPlayBtn); 
    playSchleife(false); //für später im Code; sagt bei Knopfdruck, das Schleife nicht spielen soll
});

//die eigentliche Funktion, die dahinter steckt
function toggleClasses( firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void { //mit Platzhaltern, die von den Eventlistener befüllt werden
    firstHTMLElement.classList.add("is-hidden"); //fügt definierten ersten Element Klasse hinzu --> verschwindet
    secondHTMLElement.classList.remove("is-hidden"); //entfernt von zweitem Element Klasse --> ploppt auf
}

//definieren und typisieren globale Variablen, die wir gleich brauchen werden
let myInterval: number;
let i: number = 0;

//Funktion für Play/ Stop-Button (spielt Samples)
function playSchleife (b: boolean): void {
    //boolean setzten wir durch Knopfdruck auf Play/ Stop fest
    if (b == true) {
    myInterval = setInterval(function(): void {
        if (i < myArray.length) { //geht Sounds durch, solange i < Länge des Beats /der Töne ist
            playAudio(myArray[i]);
            i++; //+1 bei jedem Durchlauf
        }
        else {
            i = 0;
        }
    // tslint:disable-next-line: align
    }, 500);
    }
    else {
        clearInterval(myInterval); //Aus w3schools: "The clearInterval() method clears a timer set with the setInterval() method." Was das heißt? ¯\_(ツ)_/¯
    }
}

//Schalter für Record-Button (wünscht mir Glück)
let booleanRec: boolean;
function recordAudio(index: number): void {
if (booleanRec == true) {
    myArray.push(index);
}
}

//Trash-Button --> sorgt dafür, dass der Beat auf Null gesetzt wird (hoffentlich)
myTrashBtn.addEventListener("click", function (): void {
    myArray = [];
});

//Wechsel von Aufnehmen zu Nicht-Aufnehmen und andersrum
myRecBtn.addEventListener("click", function(): void {
    //wenn auf Klick die Klasse "inactive" besteht, dann soll diese durch "active" ersetzt werden
    if (myRecBtn.classList.contains("inactive")) {
        myRecBtn.classList.remove("inactive");
        myRecBtn.classList.add("active");
        //zusätzlich soll der boolean auf true wechseln --> nimmt auf (siehe recordAudio Funktion)
        booleanRec = true;
    }
    else {
        //dasselbe nur umgekehrt
        myRecBtn.classList.remove("active");
        myRecBtn.classList.add("inactive");
        booleanRec = false;
    }
});
}