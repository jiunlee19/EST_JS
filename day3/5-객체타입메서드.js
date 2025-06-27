//Array.proptotype.method()



const fruits = ['apple','mango','banana'];
fruits[1]='cherry';
console.log(fruits);

// 추가
fruits.unshift('watermelon','lemon');
console.log(fruits);

fruits.push('grape');
console.log(fruits);

// 삭제 shift, pop
fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.slice(1,2);
console.log(fruits);
const newFruits = fruits.slice(1,2);
console.log(newFruits);
//slice는 배열에 영향주지 못한다. 꼭 변수에 저장해서 사용해야 함.

const arr1 = [1,2,3];
const arr2 = [4,5,6];
let newArr = arr1.concat(arr2);
console.log(newArr);
//문자열 메서드와 헷갈리지 말 것.
//차이: 

let whosBig = Math.max(arr1);
console.log(whosBig);
whosBig = Math.max(...arr1); // spread 연산자(전개) (중요)
console.log(whosBig);

newArr = [...arr1, ...arr2];
console.log(newArr);

const str = 'Ghost, World, Sunny';
const names = str.split(', ');
console.log(names);
const names2 = [str]; // 배열로만 감싸도 자동으로 배열로 만들어짐.
console.log(names2);

//join
// const newStr = names.toString();
const newStr = names.join(', ');
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);

const animals = ['puppy','cat','parrot','cat'];
console.log(animals.indexOf('cat'));
console.log(animals.lastIndexOf('cat'));
console.log(animals.includes('parrot'));
// String.prototype.includes('World');
// Array.prototype.includes('cat');