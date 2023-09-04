import { Arrow, customLog, destructor, spread } from "./lessons/es6";
import "./style.scss";

function init() {
  /*   
    foo1();
    foo2(); 
  */
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  const main = document.querySelector("#main");

  if (main) {
    main.innerHTML = `Let's go`;
  }
  destructor();
});
