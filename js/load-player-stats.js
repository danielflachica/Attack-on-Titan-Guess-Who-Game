var playerImg = document.getElementById('player-char-img');
var playerName = document.getElementById('player-char-name');
var images = [
	"img/eren_yeager.jpeg",
	"img/mikasa_ackerman.jpeg",
	"img/armin_arlert.jpeg",
	"img/reiner_braun.png",
	"img/jean_kirstein.png",
    "img/marco_bodt.png",
    "img/connie_springer.jpeg",
    "img/sahsa_blouse.jpeg",
    "img/historia_reiss.jpeg",
    "img/ymir.jpeg",
    "img/floch_forster.jpeg",
    "img/erwin_smith.png",
    "img/hange_zoe.jpeg",
    "img/mike_zacharias.jpeg",
    "img/moblit_berner.png",
    "img/levi_ackerman.jpeg",
    "img/petra_rai.jpeg",
    "img/porco_galliard.jpeg",
    "img/falco_grice.jpeg",
    "img/gabi_braun.jpeg",
    "img/zeke_yeager.jpeg",
    "img/bertoldt_hoover.png",
    "img/annie_leonhart.png",
    "img/pieck_finger.jpeg",
];
var names = [
	"Eren Yeager",
    "Mikasa Ackerman",
    "Armin Arlert",
    "Reiner Braun",
    "Jean Kirstein",
    "Marco Bodt",
    "Connie Springer",
    "Sasha Blouse",
    "Historia Reiss",
    "Ymir",
    "Floch Forster",
    "Erwin Smith",
    "Hange Zoe",
    "Mike Zacharius",
    "Moblit Berner",
    "Levi Ackerman",
    "Petra Rai",
    "Porco Galliard",
    "Falco Grice",
    "Gabi Braun",
    "Zeke Yeager",
    "Bertoldt Hoover",
    "Annie Leonhart",
    "Pieck Finger",
];

var i = Math.floor(Math.random() * images.length) + 1

playerImg.src = images[i-1];
playerName.innerHTML = names[i-1];