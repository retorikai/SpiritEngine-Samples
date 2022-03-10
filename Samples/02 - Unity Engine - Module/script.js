import SpiritEngine from "https://cdn.retorik.ai/spiritengine/sdk/alpha/spiritengine.js";
//const SpiritEngine = require('retorik-spiritengine')

var licence = 'your-licence-here';
licence='K0vi08nY6JDn68ZF5ByDt8THzbxVoGFSJEJ67b5UsCJDchQ01V2J2RuiNr8iDzxGyT1Ablcz1hn5sRAQuR8UUJ!lFpRlx2goKdpLc+LJ8XDby+H2kMeCbaj!7SI6ZpCVo!89SrDuGxAOJZZcg1JlvX3X9byqD8OhqWPSRgjuNVFj+IU2G3dbe75sE5M2DCGizI5FbnsgpYdcjghZbacJE6kuxP2cyDMDrJif9R6Qn7DTFItzYHkeaZQJq70JWlmeMLu1Er51iyc5OwdmCNWEwW2pDC7htQmRDh27ZQ4Mw03VqOprlh8yIq361aU3ZTHRUcO9XuuWEbLaUO47fjmCZw=='
const animationLocation = "https://cdn.retorik.ai/spiritengine/Jean-Pierre/";

window.spiritEngine = new SpiritEngine(licence, animationLocation);

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
