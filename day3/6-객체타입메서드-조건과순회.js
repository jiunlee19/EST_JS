sum(3,4); //호이스팅하니까, 정상작동
// console.log(evenCheck(3)); // const 변수는 호이스팅 일어나지만, TDZ


// 선언적 함수, 함수선언식
function sum(a,b){
    return a+b;
}
// sum(3,4);

//함수표현식 (변수 안에다가 만드는 함수)
//1
const evenCheck = function(number){
    return (number%2)===0 ? 'even' : 'odd';
}
// console.log(evenCheck(3));

//2 화살표함수
const sum2 = (a,b) => {
    return a+b;
}
// return값이 하나일때, return과 {}를 생략할 수 있다.
// 1과 2의 차이점 => this ???


//실습
function getRandomValue(value){
    return Math.floor(Math.random() * value + 1);
}
console.log(getRandomValue(10));
console.log(getRandomValue(255));

const newRandomValue1 = function(value){
    return Math.floor(Math.random() * value +1 );
}
console.log(newRandomValue1(10));
console.log(newRandomValue1(255));

const newRandomValue2 = (value) => {
    return Math.floor(Math.random() * value + 1);
}
console.log(newRandomValue2(10));
console.log(newRandomValue2(255));

//실습2
const arr = [10,20,30,40,50];

// find
const bigger20 = arr.find(x => x >= 20);
console.log(`20이상인 수는 ${bigger20}`);
//includes vs find ???

const bigger30 = arr.findIndex(x => x >= 30);
console.log(`30이상인 수는 ${bigger30}`);

const bigger40 = arr.find(function(x){
    return x >= 40;
});
console.log(`40이상인 수는 ${bigger40}`);

const numbers = [15,20,17,3,80];
console.log(numbers.find(x=>x>=20));

//filter
const over20 = numbers.filter(number => number >= 20);
console.log(over20);

const oddNums = numbers.filter(number => number%2 === 1);
console.log(oddNums);
// filter -> 검색기, 조건에 맞는 값만 반환

// map -> 조건을 적용해서 새로운 배열로 반환
const doubleNums = numbers.map( number => number*2);
console.log(doubleNums);

// filter와 map 자주 같이 사용한다.