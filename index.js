function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("playing");

  setTimeout(function() {
    activeButton.classList.remove("playing");
  }, 100);

}

function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("./sounds/clap.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("./sounds/hihat.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio('./sounds/kick.mp3');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('./sounds/openhat.mp3');
      tom4.play();
      break;

    case "g":
      var snare = new Audio('./sounds/boom.mp3');
      snare.play();
      break;

    case "h":
      var crash = new Audio('./sounds/ride.mp3');
      crash.play();
      break;

    case "j":
      var kick = new Audio('./sounds/snare.mp3');
      kick.play();
      break;
    case "k":
      var kick = new Audio('./sounds/tom.mp3');
      kick.play();
      break;
    case "l":
      var kick = new Audio('./sounds/tink.mp3');
      kick.play();
      break;

    default:
      console.log(key);

  }
}

var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

var keysOnClick = document.querySelectorAll('.btns');

for (var i = 0; i < keysOnClick.length; i++) {
  document.querySelectorAll(".btns")[i].addEventListener("click", function() {
    var idForAudios = this.id;
    makeSound(idForAudios);
    buttonAnimation(idForAudios);

  });

}
