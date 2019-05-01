var key;
var button;

var clap =      new Audio('sounds/clap.wav');
var crash =     new Audio('sounds/crash.wav');
var hihat =     new Audio('sounds/hihat.wav');
var kick =      new Audio('sounds/kick.wav');
var openhat =   new Audio('sounds/openhat.wav');
var perc =      new Audio('sounds/perc.wav');
var ride =      new Audio('sounds/ride.wav');
var snare =     new Audio('sounds/snare.wav');
var tom =       new Audio('sounds/tom.wav');

function activateKey(event) {

  var active_el = document.querySelector('.is-active');

  if (event.type == 'click') {
    key = event.target.dataset['key'];
    button = event.target;
  } else if (event.type == 'keydown') {
    key = event.key.toLowerCase();
    button = document.querySelectorAll('button[data-key="' + key + '"]')[0];
  }

  removeActiveClass(active_el);

  if(keysList()) {
    flashActiveClass(button);
  }

  if (key == 'a') {
    play(clap);
  } else if (key == 's') {
    play(crash);
  } else if (key == 'd') {
    play(hihat);
  } else if (key == 'f') {
    play(kick);
  } else if (key == 'g') {
    play(openhat);
  } else if (key == 'h') {
    play(perc);
  } else if (key == 'j') {
    play(ride);
  } else if (key == 'k') {
    play(snare);
  } else if (key == 'l') {
    play(tom);
  }
}

function keysList() {
  return key == 'a' || key == 's' || key == 'd' || key == 'f' || key == 'g' || key == 'h' || key == 'j' || key == 'k' || key == 'l'
}

function removeActiveClass(el) {
  if (el) {
    el.classList.remove('is-active');
  }
}

function flashActiveClass(el) {
  el.classList.add('is-active');
  var intervalID = setTimeout(() => { el.classList.remove('is-active'); }, 200);
}

function play(sound) {
  if(sound.paused == false) {
    sound.cloneNode(true).play();
  } else {
    sound.play();
  }
}

document.addEventListener('keydown', activateKey);
document.addEventListener("click", activateKey);