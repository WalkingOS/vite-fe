export const Basic = () => {
  /* Example 1: Defining types */
  /** */

  let name: string = "John";
  let lastName: string = "Doe";

  const age: number = 30;
  const isStudent: boolean = true;

  console.log(age, name, isStudent);

  // so name is a let. Lets try to change it:
  name = 123;

  // so lets try it for lastName (seems not to be typed):
  lastName = 123;

  /* Example 2: Array */
  /** */

  // in javascript everything is okay
  const foo = [2, "bas"];
  const array = ["a", 1, () => {}, { obj: "" }, ...foo];

  // but we can do it better:
  const array2: string[] = ["a", "b"];
  const array3: string[] = ["a", "b"];

  // lets try to concat the arrays.
  array2.concat(array3);

  // or spread
  const concat: string[] = [...array2, ...array3];
  console.log(concat);

  /* Example 3: Object */
  /** */

  // lets create an object and hover over the object name :)
  const user: IUser = {
    name: "Osman",
    lastName: "Minaz",
    age: 25,
    skills: {
      programming: {
        language: ["javascript", "java"],
      },
      design: ["figma"],
    },
  };

  // object is a higher type then IUser -> thats why this is working:

  const boo = (irgendwas: Object) => {
    console.log(irgendwas);
  };

  boo(user);

  /* Example 4: Interfaces */
  /** */

  interface IUser {
    name: string;
    lastName: string;
    age: number;
    skills: ISkills;
  }

  interface ISkills {
    programming: IProgramming;
    design: string[];
  }

  interface IProgramming {
    language: string[];
  }

  // const userArray: IUser[] = [user, user];

  // lets flat this up:

  /* Example 5: functions */
  /** */

  /**
   * This function can give you the whole user name
   *
   * @param user - user object as IUser
   * @returns string as a string
   * */

  const getUserName = (user: IUser): string => {
    const userName = user.name;
    return `${userName}${lastName}`;
  };

  const logUserName = (user: IUser): void => {
    console.log(user);
  };

  logUserName(user);

  getUserName(user);

  /**
   * Example 6: HTMLElement
   * */

  {
    // Higher then other element types

    const foo = (atag: Element) => {
      // atag -> href einfügen
    };

    const div = document.querySelector("div") as HTMLDivElement;

    foo(div);
  }

  // TYPECASTING ERKLÄREN UND WAS UNKNOWN DAMIT ZU TUN HAT :)

  /**
   * Primitive types:
   * -> number, string, boolean, void, undefined, null
   *
   * Object types:
   * -> Interface, Class, Enum, Array, Tuple
   *
   * Other types:
   * -> any, object, unkown, never
   */
};
