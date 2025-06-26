const num = 1234.567;
const num2 = 123.456;

console.log(Math.abs(-5)); //abs() - 절댓값

console.log(Math.ceil(num)); //ceil() - 올림
console.log(Math.ceil(num2));

console.log(Math.floor(num)); // floor() - 내림

console.log(Math.round(num)); // round() - 반올림
console.log(Math.round(num2));

console.log(Math.trunc(num));// trunc() - 소수점 이하 버리기
// floor() vs trunc() : 
console.log(Math.floor(-2.5)); // 3
console.log(Math.trunc(-2.5)); // 2

console.log(Math.max(10,2,5,4)); //max() - 최댓값 찾아줌
console.log(Math.min(10,2,5,4)); //min() - 최솟값 찾아줌

console.log(Math.pow(2,3)); //pow() - 거듭제곱

console.clear();
//연산자 vs 계산을 해주는 메서드

let randomNumber = Math.floor(Math.random() * 3); // random() - 0~1 사이 난수 생성 함수
// ceil() - 1~n 사이 난수 생성 가능
// floor() - 0~n-1 사이 난수 생성 가능
console.log(randomNumber);



//rsp의 변수에 '가위','바위','보'를 배열데이터로 넣기
const rsp = ['가위','바위','보'];
let randNum = Math.floor(Math.random() * rsp.length);
console.log(rsp[randNum]);

console.log(rsp[rsp.length-1]); // 마지막 요소 출력
console.log(rsp.at(-1)); //뒤에서 1번째, rsp[-1]는 사용불가

console.clear();
//-----------
console.log(Number(num)); //데이터타입 number
console.log(parseInt(num)); //정수
console.log(parseFloat(num)); //실수