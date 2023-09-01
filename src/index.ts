import {
  AwaitFetch,
  Callback,
  CustomPromise,
  Interval,
  Timeout,
} from "./helpers/Async";
import "./style.scss";

function init() {
  /*   
    foo1();
    foo2(); 
  */
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  // Sync();
  //Timeout();
  // Interval();
  // Callback();
  // CustomPromise();
  AwaitFetch();

  const main = document.querySelector("#main");

  if (main) {
    main.innerHTML = `Let's go`;
  }
});
