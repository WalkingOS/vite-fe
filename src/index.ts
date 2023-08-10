import "./style.scss";
import { headlineOnClick } from "./components/button/index";

function init() {
  /*   
    foo1();
    foo2(); 
  */
}

/*
 * @param cards - Array of cards
 * @returns maxHeight of all cards that are displayed on the page as Integer
 * this iterates over array of cards and reads the height of each card to get the maximum height of all cards
 */
function getMaxHeight(cards) {
  let maxHeight = 0;
  cards.forEach((card) => {
    const cardHeight = card.offsetHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });
  return maxHeight;
}

/*
 * @param cards - Array of cards
 * @param height - height value which the card height should be set to
 * this iterates over array of cards and sets the height of each card to the given input
 */
function setEqualHeight(cards, height) {
  cards.forEach((card) => {
    card.style.minHeight = `${height}px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  const main = document.querySelector("#main");

  if (main) {
    main.innerHTML = `Let's go`;
  }

  const cards = document.querySelectorAll(".card");
  const maxHeight = getMaxHeight(cards);
  setEqualHeight(cards, maxHeight);

  const buttons = document.querySelectorAll(".card-button");
  headlineOnClick(buttons);

  window.addEventListener("resize", () => {
    const maxHeight = getMaxHeight(cards);
    setEqualHeight(cards, maxHeight);
  });
});
