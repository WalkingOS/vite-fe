// ES6

/**
 * Arrow function
 */

export const Arrow = () => {
  // old:
  function add(a, b) {
    return a + b;
  }

  add(2, 5);

  // new:

  /*   const addNew = (a, b) => {
    return a + b;
  }; */

  const addNew = (a, b) => a + b;

  addNew(2, 5);

  // no param:
  const logSmth = () => console.log("smth");

  // single param (without parentheses):
  const isPositiv = (number) => number >= 0;

  // single param -> often in array functions
  const nums = [1, 2, 3];

  nums.map((num) => num * 2);

  // object literal
  const createPerson = (name, age) => ({
    name,
    age,
  });

  // anonym functions:
  document.addEventListener("click", () => {
    console.log("click");
  });

  // this:

  // with normal function -> will work
  const obj0 = {
    value: 42,
    normal: function () {
      return this.value * 2;
    },
  };

  // obj0.normal(); // logs 84

  // in objects -> will not be work (not bound to obj -> has surrounding context)
  const obj = {
    value: 42,
    arrow: () => this.value * 2,
  };

  // in classes
  class Person {
    constructor(name) {
      this.name = name;
    }

    arrowPrint() {
      setTimeout(() => {
        console.log("arrow: ", this.name);
      }, 200);
    }

    normalPrint() {
      setTimeout(function () {
        console.log("normal: ", this.name);
      }, 300);
    }
  }

  const person = new Person("Osman");
  person.arrowPrint();
  person.normalPrint();
};

/**
 * Rest Parameter
 */

export const customLog = (a, b, ...c) => {
  c.forEach((param) => {
    console.log(param);
  });
};

/**
 * spread operator
 */

// CARE FOR MUTATION!!

export const spread = () => {
  const spread1 = () => {
    /** old but maybe gold: */

    /*     const odd = [1, 3, 5];
    const combined = [2, 4, 6].concat(odd);

    console.log(combined); */

    // or

    // for (let i = 0; i < odd.length; i++) {
    //   combined.push(odd[i]);
    // }

    const odd = [1, 3, 5];

    // new with spreading:
    const combined = [2, 4, 6, ...odd];
    console.log("a", combined);
  };

  /**
   * if you have to work with a mutating array function you can work with the spreaded array / copied array;
   * see: https://javascript.plainenglish.io/array-methods-in-javascript-mutating-vs-non-mutating-c8a291344e2d
   */
  const avoidMutation = () => {
    const badEx = [2, 10, 9, 4, 1];

    badEx.sort((a, b) => a - b);
    console.log("bad: ", badEx);

    console.log("-----------");

    const good = [2, 10, 9, 4, 1];

    const copiedGood = [...good];
    //const sorted = [...good].sort((a, b) => a - b);
    const sorted = copiedGood.sort((a, b) => a - b);

    console.log("good: ", sorted);
    console.log("original array: ", good);
  };
  avoidMutation();
};

/**
 * you can use template literal if you want to add javascript in your string
 */

export const templateLiterals = () => {
  // get a link to a search
  const getSearchHref = () => {
    const url = "https://www.google.com/";

    const searchParam = "What is a template literal";

    // old:
    // return url + "search?q=" + searchParam;

    // new:
    return `${url}search?q=${searchParam}`;
  };

  // compose an innerhtml
  const getInnerHtml = () => {
    const user = {
      firstName: "Osman",
      lastName: "Minaz",
      age: "18",
    };

    const { firstName, lastName } = user;

    return `
        <div class="profile">
          <span>${firstName}</span>
          <span>${lastName}</span>
        </div>
      `;
  };
};

/**
 * destructor
 */

export const destructor = () => {
  const destr1 = () => {
    const user = {
      firstName: "Osman",
      lastName: "Minaz",
      age: "18",
      skills: {
        web: {
          programming: ["java", "javascript"],
          design: ["figma"],
        },
      },
    };

    // old
    console.log(user.skills.web.programming);
    console.log(user.skills.web.design);

    const programming2 = user.skills.web.programming;
    const design2 = user.skills.web.design;

    console.log(programming2);
    console.log(design2);

    // with descructor

    const { programming, design } = user.skills.web;
    console.log(programming);
    console.log(design);
  };

  // destr1();

  const destr2 = () => {
    const user = {
      firstName: "Osman",
      lastName: "Minaz",
      age: "18",
    };

    const getUserName = (user) => {
      return {
        name: user.firstName + " " + user.lastName,
        id: Math.random(),
      };
    };

    /*     const userName = getUserName(user);
    const name = userName.name;

    console.log(name); // log: Osman Minaz */

    const { name, id } = getUserName(user);

    console.log(name, id);
  };

  // destr2();

  const destr3 = () => {
    const user = {
      firstName: "Osman",
      lastName: "Minaz",
      age: "18",
    };

    const getUserName = (user) => {
      const name = user.firstName + " " + user.lastName;
      return [name, Math.random()];
    };

    const [Foo, ident] = getUserName(user);

    console.log("LOG", Foo, ident);
  };

  destr3();
};
