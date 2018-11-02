var a = 4;
var b = 3;

console.log("a: " + a)
console.log("b: " + b)

a = a + b;
b = a - b;
a = a - b;

console.log("\nAfter swap:\n")
console.log("a: " + a)
console.log("b: " + b)
