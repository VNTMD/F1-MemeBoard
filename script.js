function playSound(name) {
  const audio = new Audio(`sounds/${name}.wav`);
  audio.play();
}