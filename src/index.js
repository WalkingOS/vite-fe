// index.ts

import "./style.scss";

function init() {
    /*   
      foo1();
      foo2(); 
    */
}

//Using JavaScript, identify all the card elements within the <ul> list:  


//Determine the maximum height among all the cards:

//schleife für ein array

function determineMaxHeight(cards){
  let maxHeight = 0; //Variable um die endgültige maxHöhe zu speichern
  cards.forEach((card) => {
    const cardHeight = card.clientHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });
  return maxHeight;
}

//Apply this maximum height value to each card's style attribute to ensure uniformity.

// Anpassen der Karten auf die maximale Höhe

function applyMaxHeight(cards, maxHeight){
  cards.forEach((card) => {
    card.style.height = maxHeight + 'px';
  });
}
  

document.addEventListener("DOMContentLoaded", () => {
    init();

    const main = document.querySelector("#main");

    if (main) {
        main.innerHTML = `Let's go`;
    }

    
    const cards = document.querySelectorAll(".card");
    applyMaxHeight(cards, determineMaxHeight(cards));
    
  
    

// For each card, find the button element within the card's content.

const button = card.querySelector(".card-button");

// Attach a click event listener to each button.

if (button) {
    button.addEventListener("click", function() {

// Inside the event listener, retrieve the headline text from the clicked card.
// Überschriftstext der Karte abrufen
        const headline = card.querySelector(".card-headline");
        if (headline) {
            const headlineText = headline.textContent;            

// Use this headline text to display an alert to the user.
// Alert mit Überschriftstext anzeigen
            alert(headlineText);
        }
      

    });
}
    });


window.addEventListener("resize", adjustCardHeights);



 