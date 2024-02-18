const obj1: { [key: string]: string } = {};
const arr1: string[] = [];
[obj1.a, obj1.b, arr1[0]] = "John Smith Henderson".split(" ");
// console.log(obj, arr); // { a: 'John', b: 'Smith' } [ 'Henderson' ]

function assign(arr: number[][]) {
  const arr2: number[] = [];
  const arr3: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    [arr2[i], arr3[i]] = arr[i];
  }

  return arr2.concat(arr3);
}
// console.log(
//   assign([
//     [1, 4],
//     [2, 5],
//     [3, 6],
//   ])
// ); // [1..6]

function paramDestr1([a, b, c]: number[] = [0, 0, 0]): number[] {
  // must put "= []" if we don't pass an array
  // else get type error
  return [a, b, c];
}
function paramDestr2([a = 4, b = 5, c = 6]: number[] = []): number[] {
  return [a, b, c];
}
// console.log(paramDestr1([1, 2, 3])); // [1, 2, 3]
// console.log(paramDestr1([7, 7, 7])); // [7, 7, 7]
// console.log(paramDestr2()); // [4, 5, 6]

// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
function topSalary1(sal: { [name: string]: number }): string | null {
  if (!sal) return null;
  const sort = Object.entries(sal).sort((a, b) => b[1] - a[1]);
  // const res: string[] = [];
  return sort[0][0];

  // for (const e of sort) {
  //   if (e[1] >= sort[0][1]) {
  //     res.push(e[0]);
  //   }
  // }

  // return res;
}
function topSalary2(sal: { [name: string]: number }): string | null {
  let maxSalary = 0;
  let maxName: null | string = null;

  for (const [name, salary] of Object.entries(sal)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}
function topSalary3(sal: { [name: string]: number }): string | null {
  if (!sal) return null;

  return Object.keys(sal).reduce((prev, curr) =>
    sal[prev] >= sal[curr] ? prev : curr
  );
}
const salaries = {
  John: 100,
  Ace: 600,
  Mary: 250,
};
// console.log(topSalary3(salaries)); // Ace

function topPerson(arr: [string, number][]): string {
  return arr.reduce((prev, curr) => (prev[1] >= curr[1] ? prev : curr))[0];
}
const people: [string, number][] = [
  ["John", 100],
  ["Mary", 500],
  ["Leo", 250],
];
// console.log(topPerson(people)); // Mary

function sum(items: { x: number }[]): number {
  return items.reduce((prev, curr) => prev + curr.x, 0);
}
const objNum = [{ x: 1 }, { x: 2 }, { x: 3 }];
// console.log(sum(objNum)); // 6

const props = [
  { id: 1, word: "Fizz" },
  { id: 2, word: "Buzz" },
  { id: 3, word: "FizzBuzz" },
];
const [, , { word }] = props;
// console.log(word); // "FizzBuzz"
