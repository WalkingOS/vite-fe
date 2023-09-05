// why typescript is good:

/**
 * - Detecting errors in code without running it
 * - So: When its compiled -> it shoud be fine // no runtime erros
 */

export const badStuff = () => {
  /** Lets take a look to type checking */

  const a = () => {
    if ("" == 0) {
    }

    if (null === undefined) {
    }

    if ("false") {
    }

    if (42) {
    }

    if ("" == []) {
    }

    if (0 == false) {
    }

    /*     const foo = { name: "Alex" };
    const foo2 = { name: "Alex" };

    if (foo == foo2) {
    } */
  };

  const b = (x) => {
    if (1 < x < 2) {
      return "true";
    }
  };

  const c = () => {
    const obj = { width: 10, height: 15 };
    const area = obj.width * obj.height;
    console.log(area);
  };

  // functions and parameters in Javascript
  const d = (string: string) => {
    return string + "an other string";
  };

  const foo = d(() => ({ obj: "did you assume my type?" }));

  // We can do it better
  // -> lets change .js to .ts
};
