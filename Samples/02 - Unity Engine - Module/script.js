import SpiritEngine from "https://cdn.retorik.ai/spiritengine/sdk/alpha/module.js";
//const SpiritEngine = require('retorik-spiritengine')

let LICENSE = 'your-licence-here'
const animationLocation = "https://cdn.retorik.ai/spiritengine/Jean-Pierre/";

window.spiritEngine = new SpiritEngine(LICENCE, animationLocation);

window.spiritEngine.render(
  document.getElementById('spiritEngine'),
  {
    onProgress: UnityProgress,
  }
);

function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) {
    return;
  }
  const loader = document.querySelector("#loader");
  if (!gameInstance.progress) {
    const progress = document.querySelector("#loader .progress");
    progress.style.display = "block";
    gameInstance.progress = progress.querySelector(".full");
    loader.querySelector(".spinner").style.display = "none";
  }
  gameInstance.progress.style.transform = `scaleX(${progress})`;
  if (progress === 1 && !gameInstance.removeTimeout) {
    gameInstance.removeTimeout = setTimeout(function () {
      loader.style.display = "none";
      welcomeMessage();
    }, 2000);
  }
}

function welcomeMessage() {
  window.spiritEngine.sendMessage(
    "Jean-Pierre",
    "Bonjour, je m'appelle Jean-Pierre. Je suis animé par le moteur d'animations Rétorik Spirit Engine."
  );
}
