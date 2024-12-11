// This function listens to pressed keys on the keyboard and plays audio if the pressed key is valid. 
// It also transitions by adding the playing css class
window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-text="${e.key.toUpperCase()}"]`);
    const key = document.querySelector(`.key[data-text="${e.key.toUpperCase()}"]`);
   
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  });

// This function removes transition after a few seconds
  function removeEffect(e) {
    if (!e.propertyName) return;
    this.classList.remove("playing");
  }

// This function listens to transitionend and removes the class playing once done.
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeEffect)
  );

// This function listens to pressed keys on the keyboard and plays audio if the pressed key is valid. 
// It also transitions by adding the playing css class
  window.addEventListener("click", function (e) {
    const button_clicked = document.querySelector(`audio[data-text="${e.target.innerHTML}"]`);
    const key = document.querySelector(`.key[data-text="${e.target.innerHTML}"]`);

    if (!button_clicked) return;
    button_clicked.currentTime= 0;
    button_clicked.play();
    key.classList.add("playing");
   
  });