function random() {
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;


  if (randomNumber1 === 1) {
    return document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    return document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    return document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    return document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    return document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  } else{
    return document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }


}

function random2() {
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;


  if (randomNumber1 === 1) {
    return document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    return document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    return document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    return document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    return document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  } else{
    return document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }


}
