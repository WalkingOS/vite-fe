const Button = () => {};

export default Button;

/*
 * @param buttons - array of card-buttons
 * this adds an alert functionality that contains the card headline on click of a button
 */
export function headlineOnClick(buttons) {
  const headlines = document.querySelectorAll(".card-headline");

  buttons.forEach((button, i) => {
    const message = headlines[i].textContent;
    button.addEventListener("click", () => {
      window.alert(message);
    });
  });
}
