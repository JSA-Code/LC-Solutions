// let user = {};
// let arr = [];
// [user.name, user.surname, arr[0]] = "John Smith Henderson".split(" ");

// // console.log(user.name); // John
// // console.log(user.surname); // Smith
// // console.log(arr); // ["Henderson"]

// const arr1 = [
//   [1, 4],
//   [2, 5],
//   [3, 6],
// ];
// const arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//   [arr2[i]] = arr1[i];
// }

// // console.log(arr1); // [[1], [2], [3]];
// // console.log(arr2); // [ 1, 2, 3 ]

// const obj = { hey: 10 };

// const arr: number[] = [1, 2, 3];
// function test1([a, b, c]: number[] = arr): void {
//   // must put "= []" if we don't pass an array
//   // else get type error
//   console.log(a, b, c);
// }

// function test2([a = 4, b = 5, c = 6]: number[] = []): void {
//   console.log(a, b, c);
// }

// test1(); // 1 2 3
// test1([7, 7, 7]); // 7 7 7
// test2(); // 4 5 6

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
// const people: [string, number][] = [
//   ["John", 100],
//   ["Mary", 500],
//   ["Leo", 250],
// ];

// console.log(topPerson(people)); // Mary

function sum(items: { x: number }[]): number {
  return items.reduce((prev, curr) => prev + curr.x, 0);
}
const obj = [{ x: 1 }, { x: 2 }, { x: 3 }];

// console.log(sum(obj)); // 6

const props = [
  { id: 1, word: "Fizz" },
  { id: 2, word: "Buzz" },
  { id: 3, word: "FizzBuzz" },
];

const [, , { word }] = props;

console.log(word); // "FizzBuzz"
