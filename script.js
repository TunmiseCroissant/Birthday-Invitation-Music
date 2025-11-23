  bgMusic = document.getElementById("bgMusic")
  
  function playMusic() {
    bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
    document.removeEventListener("click", playMusic);
    document.removeEventListener("keydown", playMusic);
  }

  playMusic()

  document.addEventListener("click", playMusic);
  document.addEventListener("keydown", playMusic);