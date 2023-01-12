const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
// ========================================================

interface IHuman {
  readonly name: string;
  readonly age: number;

  greet(): void;
}

interface IWarrior {
  readonly level: number;
  readonly healthPoint?: number;

  warCry(phrase: string): void;
}

class Warrior implements IHuman, IWarrior {
  constructor(public name: string, public age: number, public level:number) {}
  greet(): void {
    console.log("Hi, my name is " + this.name);
  }
  warCry(phrase: string): void {
    this.greet();
    console.log(phrase + "Let's battle!!");
  }
}

const warrior = new Warrior("Sam", 28, 80);
warrior.age = 30;
console.log(warrior);
warrior.warCry("AAAAAAA!!");


type AddFunc = (n1: number, n2: number) => number;

let add1: AddFunc;

add1 = (n1:number, n2: number) => {
  return n1 + n2;
}
// ===================================================
// interface Person {
//   name: string;
//   [x: string]: string;
// }

// const user: Person = {
//   name: 'Alex',
//   gender: 'MAN',
//   country: 'Ukraine',
//   lang: 'ua'
// }

// interface IPerson  {
//   firstName: string;
//   lastName: string;
// }

// const addFullName = <T extends IPerson>(person: T) => {
//   return {
//     ...person,
//     fullName: `${person.firstName} ${person.lastName}`,
//   }
// };

// console.log(addFullName({
//   firstName: 'Alex',
//   lastName: 'Cat',
//   age: 35
// }))

// interface IUser <T>{
//   id: T;
//   name: string;
//   active: boolean;
// }

// const mango: IUser<number> = {
//   id: 55,
//   name: 'Max',
//   active: true,
// };
// const poly: IUser<string> = {
//   id: 'afesdfd',
//   name: 'Max',
//   active: true,
// };

// console.log(mango,poly)

// type TAnimationState = "playing" | "paused";
// type THttpState = 'request' | 'success' | 'error';

// class State<S> {
//   private state;

//   constructor(initialState: S) {
//     this.state = initialState;
//   }

//   getState = () => {
//     return this.state;
//   }
//   setState (newState: S) {
//     this.state = newState;
//   };

// }

// const animationState = new State<TAnimationState>("playing");
// animationState.setState("paused");

// const httpState = new State<THttpState>("success");
// httpState.setState("request");

// 1)
function getPromise(): Promise<Array<number | string>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

// 2)
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'color' | 'name'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// 3)
function merge <T extends object, Y extends object> (objA: T, objB: Y) {
  return Object.assign(objA, objB);
}

// 4)
interface IComponent {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<IComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}