function activateKey(event) {

  var key =     event.type == 'click' ? event.target.dataset['key'] : event.keyCode;
  var button =  document.querySelector(`button[data-key="${key}"]`);
  var audio =   document.querySelector(`audio[data-key="${key}"]`);

  if (!button) return;

  button.classList.add('is-active');
  var intervalID = setTimeout(() => { button.classList.remove('is-active'); }, 150);

  audio.currentTime = 0;
  audio.play();
}

document.addEventListener('keydown', activateKey);
document.addEventListener('click', activateKey);