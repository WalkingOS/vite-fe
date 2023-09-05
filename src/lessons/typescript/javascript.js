// why javascript is bad

export const badStuff = () => {

  /** truthy / falsy in javascript */

  const a = () => {
    // nicht gleicht -> false
    if ("" == 0) {
      // true
    }

    if (null == undefined) {
      // true
    }

    if ("foo") {
      // true
    }

    if (42) {
      // true
    }

    if ("" == []) {
      // true
    }

    if (0 == false) {
      // true
    }

    const foo = { name: "Alex" };
    const foo2 = { name: "Alex" };

    if (foo == foo2) {
    }
  };

  const b = (x) => {
    if (1 < x < 2) {
      return "true";
    }
  };

  // 1. 1 < x => false / true 
  // 2. (false / true ) < 2
  // 3. -> true

  const c = () => {
    const obj = { width: 10, height: 15 };
    const area = obj.width * obj.heigth;
    console.log(area); // 150 ??
  };

  // functions and parameters in Javascript
  const d = (string) => {
    return string + "an other string"
  };

  d("this is") // this is an other string

  const foo = d(()=>({obj: "did you assume my type?"}))

  // We can do it better
  // -> lets change .js to .ts
};
