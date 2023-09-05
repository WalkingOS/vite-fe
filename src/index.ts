import { badStuff } from "./lessons/typescript/typescript";
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

  badStuff();
});

// Higher then other element types
const foo = (atag: Element) => {
  // atag -> href einfügen
};

const div: HTMLDivElement = document.querySelector("div");

foo(div);
