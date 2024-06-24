let homescore=0;
let guestscore=0;
let homeScore=document.getElementById("home-score");
let guestScore=document.getElementById("guest-score");

function homeapoint() {
    homescore=homescore+1;
    homeScore.textContent=homescore;
}

function hometwopoints() {
    homescore=homescore+2;
    homeScore.textContent=homescore;
}

function homethreepoints() {
    homescore=homescore+3;
    homeScore.textContent=homescore;
}

function guestapoint() {
    guestscore=guestscore+1;
    guestScore.textContent=guestscore;
}

function guesttwopoints() {
    guestscore=guestscore+2;
    guestScore.textContent=guestscore;
}

function guestthreepoints() {
    guestscore=guestscore+3;
    guestScore.textContent=guestscore;
}

function reset() {
    guestscore=0;
    homescore=0;
    guestScore.textContent=guestscore;
    homeScore.textContent=homescore;
}