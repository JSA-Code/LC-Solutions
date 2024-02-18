const objHey: { [key: string]: number } = {};
// console.log(objHey?.["hey"]++);

// console.log((12.245).toFixed(1));

function camelize(str: string): string {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
// console.log(camelize("background-color") === "backgroundColor");
// console.log(camelize("list-style-image") === "listStyleImage");
// console.log(camelize("-webkit-transition") === "WebkitTransition");

const arrNum: number[] = [7, 6, 5, 3, 8, 1];
function filterRange1(arr: number[], a: number, b: number): number[] {
  const list: number[] = [];

  for (const i of arr) {
    if (i >= a && i <= b) {
      list.push(i);
    }
  }
  return list;
}
function filterRange2(arr: number[], a: number, b: number): number[] {
  return arr.filter((item) => item >= a && item <= b);
}
// console.log(filterRange2(arrNum, 1, 4));
// console.log(arrNum);

function filterRangeInPlace(arr: number[], a: number, b: number): void {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
// filterRangeInPlace(arrNum, 1, 4);
// console.log(arrNum);

function copySorted(arr: string[]): string[] {
  return arr.slice().sort();
}
const arrStr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arrStr)); // CSS, HTML, JavaScript
// console.log(arrStr); // HTML, JavaScript, CSS (no changes)

function sortByAge(arr: { name: string; age: number }[]): void {
  arr.sort((a, b) => a.age - b.age);
}
const arrUser = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];
// sortByAge(arrUser);
// console.log(arrUser);

function getAverageAge(arr: { name: string; age: number }[]): number {
  // why can't we access props inside params? (a.name or a.age)? I know we can use obj destructure
  return arr.reduce((prev, curr) => prev + curr.age, 0) / arr.length;
}

// ! DO NOT USE, shows initial value structure must be same within return value of callback function
function getExampleObject(arr: { name: string; age: number }[]): number {
  const totalAge = arr.reduce(
    (prev, curr) => {
      return { name: "Ace", age: prev.age + curr.age };
    },
    { name: "Ace", age: 0 }
  ).age;

  return totalAge / arr.length;
}
// console.log(
//   getAverageAge(arrUser)
// ); // (25 + 30 + 29) / 3 = 28

function unique(arr: string[]): string[] {
  return arr.filter((item, index) => index === arr.indexOf(item));
}
const strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// console.log(unique(strings));

const users1 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
function groupById1(arr: { id: string; name: string; age: number }[]): {
  [id: string]: { id: string; name: string; age: number };
} {
  return arr.reduce((prev, curr) => {
    prev[curr.id] = curr;
    return prev;
  }, {} as { [id: string]: { id: string; name: string; age: number } });
}

// ! DO NOT USE, shows diff b/w creating a whole new obj versus assigning curr to prev dynamic prop
function groupById2(arr: { id: string; name: string; age: number }[]): {
  [id: string]: { id: string; name: string; age: number };
} {
  return arr.reduce((prev, curr) => {
    prev[curr.id] = { id: curr.id, name: curr.name, age: curr.age };
    return prev;
  }, {} as { [id: string]: { id: string; name: string; age: number } });
}

// ! DO NOT USE, can do obj destructure in param
function groupById3(arr: { id: string; name: string; age: number }[]): {
  [id: string]: { id: string; name: string; age: number };
} {
  return arr.reduce((prev, { id, name, age }) => {
    prev[id] = { id, name, age };
    return prev;
  }, {} as { [id: string]: { id: string; name: string; age: number } });
}
// console.log(groupById3(users1));
