const text = "Get ready for the ultimate bidding showdown! The IPL AUCTION is back, where strategy meets adrenaline. Franchises battle fiercely to grab the biggest stars, uncover hidden gems, and build their dream teams. Every paddle raise could change the game - fortunes rise, hearts race, and legends are made.Let the bidding war begin!"; 
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 0.1); 
  }
}


window.onload = typeEffect;