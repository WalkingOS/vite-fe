import "./style.scss";
import { setCards, searchArticles } from "./components/cards";
import data from "./api/articles.json";

function init() {
  /*   
    foo1();
    foo2(); 
  */
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  console.log(data);
  const main = document.querySelector("#main");

  if (main) {
    main.innerHTML = setCards(data);
  }
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.querySelector("form");

  searchButton.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;
    console.log(event);
    const a = searchArticles(data, searchTerm);
    main.innerHTML = setCards(a);
  });
});
