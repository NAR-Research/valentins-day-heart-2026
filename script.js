const rain = document.getElementById("rain");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Random size
  const size = Math.random() * 8 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Random fall speed
  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = duration + "s";

  rain.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create hearts continuously
setInterval(createHeart, 120);
