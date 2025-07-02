// Destructuring 구조 분해 할당

const animals = ['puppy','cat','parret','lion','tiger','duck','panda'];
const numbers = [1,2,3,4,5];
const [a, b, ...rest] = animals;
//...rest 나머지 연산자(...)는 앞에 올 수 없다.

console.log(a,b,rest);

const newArray = [...animals, ...numbers];
console.log(newArray);

//변수 - a,b,c
const array2 = ['apple','mango','banana'];
const [f1,f2,f3] = array2;
console.log(f1,f2,f3);

//
function calc(a,b) {
    return [a+b, a/b, a*b];
}   

const array = calc(10,2)
console.log(array);

const [sum, div, multi = "No multiply",diff]= calc(10,2);
console.log(sum, div, multi,diff);