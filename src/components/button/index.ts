const Button = () => {};

export default Button;

/*
 * @param cards - array of cards
 * this iterates over array of cards and adds an alert functionality that contains the card headline on click of a button
 */
export function headlineOnClick(cards) {
  cards.forEach((card) => {
    const headline = card.querySelector(".card-headline");
    const button = card.querySelector(".card-button");
    if (headline) {
      const message = headline.textContent;
      button.addEventListener("click", () => {
        window.alert(message);
      });
    }
  });
}
