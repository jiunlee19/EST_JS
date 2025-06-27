const num1 = '123';
const num2 = 123;
const num3 = 'hello';

let result = '';

// num은 숫자입니까?
isNaN(num1) ? result = 'not number' : result = 'is number'; // false
console.log(result);
isNaN(num2) ? result = 'not number' : result = 'is number'; // false
console.log(result);
isNaN(num3) ? result = 'not number' : result = 'is number'; // true
console.log(result);

console.log(Number.isNaN(num1)); // false
console.log(Number.isNaN(num2)); // false
console.log(Number.isNaN(num3)); // false