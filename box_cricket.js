const text = "Step into the cage where cricket gets wild! Welcome to BOX CRICKET, the fast-paced, high energy version of the gentleman's game.Walls become boundaries,reflexes rule the game, and every ball sparks excitement. It's not about how long you play-It's about how bold you play. Quick runs,sharp catches,nonstop action-game on!"; 
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 0.1); 
  }
}


window.onload = typeEffect;