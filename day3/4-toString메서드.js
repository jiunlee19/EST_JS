let str = "123";
const num = 123;

console.log(num+'');
console.log(num.toString());
console.log((123).toString());

const arr = ['a','b','c'];
console.log(arr.toString());

console.log(true.toString());

// object 
const user = {mbti:'INFJ', bloodType:'B'};
console.log(user.toString()); // [object Object]
// toString()은 타입을 문자열로만 바꿔줌. 객체타입을 문자열로 그대로 반환.
// 때문에 원하는 값을 얻기 위해서는 JSON 필요
console.log(JSON.stringify(user)); //JSON객체로 객체타입데이터를 문자열로 변환할 수 있다.

console.log(num.toString(16));
//랜덤한 RGB 값을 구해서 -> 16진수로 변환하기
const r = Math.floor(Math.random()*256).toString(16);
const g = Math.floor(Math.random()*256).toString(16);
const b = Math.floor(Math.random()*256).toString(16);

const hexColor = `#${createHexValue()}`;
console.log(hexColor);

function getRandomHex(){
    return Math.floor(Math.random()*256)
    .toString(16)
    .padStart(2, '0');
}

function createHexValue(){
    return getRandomHex() + getRandomHex() + getRandomHex();
}

console.clear();

const num2 =123.456;
const newNum = num2.toFixed(2);
console.log(newNum);