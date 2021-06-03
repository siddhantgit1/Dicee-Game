var randonNumber1 = Math.floor(Math.random() * 6) +1; //1-6

var randomDiceImage = "dice" + randonNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randonNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randonNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if(randonNumber1 > randonNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins 🎉";
}else if(randonNumber2 > randonNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🎉"
}else {
  document.querySelector("h1").innerHTML = "Draw 😂"
}
