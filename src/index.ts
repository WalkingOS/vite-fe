import "./style.css";

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
});
