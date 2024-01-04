const storeButton = document.querySelectorAll("button.drum");
const arraySongPath = [
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
  "./sounds/snare.mp3",
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
];
for (let i = 0; i < storeButton.length; i++) {
  storeButton[i].addEventListener("click", function () {
    new Audio(arraySongPath[i]).play();
    animationButton(storeButton[i].innerHTML);
  });
}
/* storeButton.forEach((button, i) => {
  button.addEventListener("click", function(){
    new Audio(arraySongPath[i]).play();
  })
}) */
function singKey(key) {
  switch (key) {
    case "a":
      new Audio(arraySongPath[0]).play();
      break;
    case "s":
      new Audio(arraySongPath[1]).play();
      break;
    case "d":
      new Audio(arraySongPath[2]).play();
      break;
    case "f":
      new Audio(arraySongPath[3]).play();
      break;
    case "j":
      new Audio(arraySongPath[4]).play();
      break;
    case "k":
      new Audio(arraySongPath[5]).play();
      break;
    case "l":
      new Audio(arraySongPath[6]).play();
      break;
    default:
  }
}
document.addEventListener("keydown", function (event) {
  singKey(event.key);
  animationButton(event.key);
});

function animationButton(eventKey){
  const targerButton = document.querySelector(`.${eventKey}`);
  targerButton.classList.add("pressed");
  setTimeout(function(){
  targerButton.classList.remove("pressed");
  }, 100);
}