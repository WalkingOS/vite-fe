The goal of this exercise is to achieve uniform card heights and implement a button click event within each card. The card heights should be constrained to match the maximum height of any card present on the page. Additionally, each card should contain a button that, upon being clicked, triggers an alert displaying the headline of the respective card.

To accomplish this, follow these steps:

Card Height Constraint:

Using JavaScript, identify all the card elements within the <ul> list.
Determine the maximum height among all the cards.
Apply this maximum height value to each card's style attribute to ensure uniformity.
Button Click Event:

For each card, find the button element within the card's content.
Attach a click event listener to each button.
Inside the event listener, retrieve the headline text from the clicked card.
Use this headline text to display an alert to the user.

Advanced: Function to set card heights dynamically based on window size -> Listen to the window event and resize the cards
