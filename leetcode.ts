// Two Sum
// Brute Force
function twoSum1(nums: number[], target: number): number[] | null {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
  return null;
}

// Map (Hash Table)
function twoSum2(nums: number[], target: number): number[] | null {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  return null;
}
// console.log(twoSum2([1, 5, 8, 6, 3], 8));

// Contains Duplicate
// Set
function containsDuplicate1(nums: number[]): boolean {
  const set = new Set(nums);
  return nums.length !== set.size;
}
// console.log(containsDuplicate1([1, 2, 3, 1]));

// Brute Force w/ Sort
function containsDuplicate2(nums: number[]): boolean {
  const sort = nums.sort();
  return sort.some((elm, i) => elm === sort[i + 1]);
}

// console.log(containsDuplicate2([1, 2, 3, 1]));

// Valid Anagram
function isAnagram1(s: string, t: string): boolean {
  return [...s].sort().join("") === [...t].sort().join("");
}
function isAnagram2(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Map
function isAnagram3(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], (map1.get(s[i]) || 0) + 1);
    map2.set(t[i], (map2.get(t[i]) || 0) + 1);
  }

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}
// console.log(isAnagram2("anagram", "nagaram"));
// console.log(isAnagram2("rat", "car"));

// Group Anagrams
// First try w/ array, DNF
function groupAnagrams1(strs: string[]): string[][] {
  const arr: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    const arrTemp: string[] = [];

    for (let j = 0; j < strs.length; j++) {
      if (strs[i].length !== strs[j].length) {
        continue;
      }

      if (i === j) {
        continue;
      }

      const comp =
        strs[i].split("").sort().join("") === strs[j].split("").sort().join("");

      if (i === j && comp) {
        arrTemp.push(strs[i], strs[j]);
      } else if (comp) {
        arrTemp.push(strs[j]);
      }
    }

    arr.push(arrTemp);
  }
  return arr;
}

// Obj
function groupAnagrams2(strs: string[]): string[][] {
  const obj: { [index: string]: string[] } = {};

  for (const str of strs) {
    const sorted = [...str].sort().join("");
    obj[sorted] ? obj[sorted].push(str) : (obj[sorted] = [str]);
  }
  return Object.values(obj);
}

// Map
function groupAnagrams3(strs: string[]): string[][] {
  const map = new Map();

  for (const str of strs) {
    const sorted = [...str].sort().join("");
    map.has(sorted) ? map.get(sorted).push(str) : map.set(sorted, [str]);
  }
  return Array.from(map.values());
}

// console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Top K Frequent Elements
function topKFrequent1(nums: number[], k: number): number[] {
  const obj: { [index: number]: number } = {};

  for (const num of nums) {
    obj[num] ? obj[num]++ : (obj[num] = 1);
  }

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const freq: number[] = [];

  for (let i = 0; i < k; i++) {
    freq.push(+sorted[i][0]);
  }

  return freq;
}
// console.log(topKFrequent1([1, 2, 2, 2, 3, 3], 2));

function topKFrequent2(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();

  for (const num of nums) {
    // w/o parentheses ( ) enclosing the OR operator ||,
    // we combine 0 + 1 instead of adding map.get(num) + 1,
    // value will always be 0 + 1 as beginning elems are undefined
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  const freq: number[] = [];

  for (let i = 0; i < k; i++) {
    freq.push(sorted[i][0]);
  }

  return freq;
}
// console.log(topKFrequent2([1, 2, 2, 2, 2, 3, 1], 3));

function topKFrequent3(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  nums.forEach((n) => map.set(n, (map.get(n) || 0) + 1));

  const freq: [number, number][] = [];
  for (const [key, value] of map) {
    freq.push([key, value]);
  }

  freq.sort((a, b) => b[1] - a[1]);

  return freq.slice(0, k).map((x) => x[0]);
}

// DO NOT USE, BROKEN
function topKFrequent4(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  // const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const freq: number[][] = [];
  for (const [key, value] of map) {
    (freq[value] ||= []).push(key);
  }

  const res: number[] = [];
  for (let i = freq.length - 1; i >= 0; i--) {
    for (const j of freq[i]) {
      res.push(j);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
}
// console.log("returns:", topKFrequent4([1, 2, 2, 3, 4, 4], 2));
// console.log("returns:", topKFrequent4([1], 1));

function topKFrequent5(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  const freq: Set<number>[] = [];

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    freq[value] = (freq[value] || new Set()).add(key);
  }

  const result: number[] = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    if (freq[i]) result.push(...freq[i]);
    if (result.length === k) break;
  }

  return result;
}
// console.log("returns:", topKFrequent5([1, 2, 2, 3, 4, 4], 2));

function topKFrequent6(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();

  nums.forEach((n) => map.set(n, (map.get(n) || 0) + 1));

  const sortedArray: [number, number][] = [...map.entries()].sort(
    (a, b) => b[1] - a[1]
  );

  const res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
}
