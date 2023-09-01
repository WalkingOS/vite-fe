export const Sync = () => {
  // normal

  logger();
  console.log("1");
  console.log("2");
  console.log("3");
  logger();

  function logger() {
    console.log("0");
  }
};

// async
export const Timeout = () => {
  // --> log 1 -> setTimeout -> log 2 -> log 3

  console.log("1");

  // focus management
  setTimeout(() => {
    console.log("3");
  }, 0);

  console.log("2");
};

export const Interval = () => {
  /*   setInterval(() => {
    console.log("3");
  }, 500); */

  let time = 0;
  setInterval(() => {
    console.log(++time);
  }, 500);
};

// pattern
export const Callback = () => {
  // Ez Callback
  function message() {
    console.log("hey bro");
  }

  /*   function getLogger(resolve) {
    resolve();
  }

  getLogger(message); */

  /**
   * Async Callback
   */

  function getDelayedLogger(message) {
    setTimeout(() => {
      console.log("timeout");
      message();
    }, 1500);
  }

  getDelayedLogger(message);
};

export const CustomPromise = () => {
  // simple
  const promise = new Promise(() => {
    // if 200er fetch
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  });

  promise
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => console.log(err));

  // .catch((err) => console.log(err));

  // callback exp.:
  /*   const clbck = new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved!");
    }, 500);
  }); */

  /*   clbck.then((res) => console.log(res));
   */
};

// await keyword
export const AwaitFetch = () => {
  async function getTodos() {
    try {
      const promise = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      // const data = await promise.json();
      console.log(promise);
    } catch (err) {
      console.log(err);
    }
  }

  getTodos();

  // try catch
};
