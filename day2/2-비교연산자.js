/* 비교연산자 */

let a =3;
let b =5;

console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

let c = '5';
console.log(c==b); //true, 값만 비교
console.log(c===b); //false, 데이터타입까지 비교
console.log(c!==b); //true, 데이터타입까지 비교

//-------------------------------------------
//만약에 입력한 값이 3 이라면, '로또당첨', 아니라면 '꽝'
let userNumber = 3;
if(userNumber === 3){
    //참이면 실행
    console.log('로또당첨');
}
else{
    //거짓이면 실행
    console.log('꽝');
}

//만약에 number가 짝수라면 '짝수', 홀수라면 '홀수'를 출력하고 싶다.
//조건식
let number = Math.floor(Math.random() * 100);

// const isEven = number%2 === 0;
const isEven = number%2;
if(!isEven){
    console.log(number, '짝수');
}
else{
    console.log(number, '홀수');
}