// 1. num ->13 이 숫자가 10이상인지를 판별해서 '10이상이다','10이하이다 출력) 조건 절대값으로 비교)
const num1=-13;
let result ='';
Math.abs(num1)>=10 ? result ='10이상이다.' : result = '10미만이다.';
console.log(`${Math.abs(num1)}은 ${result}`);

//2. 숫자를 반올림해서 짝수/홀수 구분하여 찍기
const num2=4.6;
Math.round(num2)%2===0 ? result='짝수' : result ='홀수';
console.log(`${num2}는 ${result}`);

//3. 난수를 발생 (1-10사이의 수)해서 50이상인지, 미만인지 구분하여 찍기
const randomNumber = Math.ceil(Math.random()*10);
randomNumber>=50 ? result='50 이상입니다.' : result='50미만입니다.';
console.log(`${randomNumber}은 ${result}`);

//4. 숫자를 3제곱한 수를 구하시오.
const num3=2;
result = num3**3;
console.log(result);
console.log(Math.pow(num3,3));

const str='5.45';
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt('50px')); //숫자인 것을 빼 올 때
console.log(Number('50px')); //숫자인지 아닌지 엄격하게 검사
//isNaN 숫자인지 아닌지 검사
console.log(isNaN('333')); //false
console.log(isNaN(333)); //false

const a =3, b=10, c=5;
console.log(`max: ${Math.max(a,b,c)}, min: ${Math.min(a,b,c)}`);

const arr = ['가위','바위','보'];
console.log(arr.length);
console.log(arr[arr.length-1], arr.at(-1)); //마지막 요소 접근

// 6. sum 함수를 만드시오(숫자를 2개를 받아서 더한값을 출력하는 함수

function sum(input1, input2){
    return input1+input2;
}
console.log(sum(1,2));