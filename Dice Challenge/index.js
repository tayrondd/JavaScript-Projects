
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var whoWon = 0;
var tex;

if (randomNumber1 > randomNumber2){
    whoWon = 1;
    text = "Player 1 Wins!";
    document.querySelectorAll("p")[0].textContent += " 🚩";
}
else if ( randomNumber1 < randomNumber2){
    whoWon = 2
    text = "Player 2 Wins!";
    document.querySelectorAll("p")[1].textContent += " 🚩";

}
else{
    whoWon = 3;
    text = "Draw!";
    document.querySelectorAll("p")[0].textContent += " 🚩";
    document.querySelectorAll("p")[1].textContent += " 🚩";
}


// for testing purpose only
console.log(randomNumber1);
console.log(randomNumber2);
console.log(whoWon)
// end

document.querySelector("h1").textContent = text;
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");