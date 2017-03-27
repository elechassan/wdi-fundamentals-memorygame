console.log("JS file is connected to HTML! Woo!")
var cardOne   = "queen" ;
var cardTwo   = "queen" ;
var cardThree = "king" ;
var cardFour  = "king" ; 
 
  // alert winning message
/*if (cardOne === cardTwo) {
	alert('You found a match!');	
} else {
  alert('Sorry, try again.');
}*/
// creating cards arrayn to hold string values 
//for cards
var cards = ["king", "queen", "king", "queen"]; 
    //select div in the Html documents 
var gameBoard = document.getElementById('game-board');
//create an array that will push new created elements to the original div as child and assing class name to them.
function createCard() {
    for (var i = 0; i < cards.length; i++) {
        var cardSet = document.createElement("div");
        cardSet.className = "cards";
        gameBoard.appendChild(cardSet);
        cardSet.setAttribute("data-card", cards[i]);
        cardSet.addEventListener("click", isTwoCards);
    }
};
var cardsInPlay = [];

function isTwoCards() {
    // assign pic to the Html element depends on the attribute value.
    if (this.getAttribute("data-card") === "queen") {
        this.innerHTML = '<img src= "https://ih0.redbubble.net/image.105649178.1187/sticker,375x360.png" alt="Queen of Diamonds"/>';
    } if (this.getAttribute("data-card") === "king") {
        this.innerHTML = '<img src="http://images.drstockphoto.com/0/w1024/king-of-spades.jpg" alt="King of Spades"/>';
    }
    cardsInPlay.push(this.getAttribute("data-card"));
    if (cardsInPlay.length === 2) {//check the number of played times.
      isMatch();//move to th ismatch() function
      cardsInPlay = [];
    }
};

  
function isMatch(cards)  {
    if (cardsInPlay[0] === cardsInPlay[1]) {//cchek if both played cards have the same value
        alert('You found a match!');// print this alert if values are equal.
    } else {
        alert('Sorry, try again.');// print this alert if values are not equals.
    }
};

createCard();// play again.


