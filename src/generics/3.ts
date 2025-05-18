function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const a = { name: "Alice" };
const b = { age: 30 };

const merged = merge(a, b);

console.log(merged.name);
console.log(merged.age);
