const userInput = Math.ceil(Math.random() * 100);
let result = '';

// 1. 입력한 나이에 따라 성인/미성년자 출력하기
if(userInput > 19) result='성인';
else result = '미성년자';
console.log(`${userInput}세, ${result}입니다.`);

// 2. 숫자를 입력하면 짝수인지 홀수인지 출력하기
if(userInput%2) result='홀수';
else result='짝수'
console.log(`${userInput}은 ${result}입니다.`);

// 3. 사용자 점수에 따라 등급(A~F) 나누기
if(userInput>=90) result='A';
else if(userInput>=70) result='B';
else if(userInput>=50) result='C';
else if(userInput>=30) result='D';
else if(userInput<10) result ='F';
console.log(`당신의 이번 학기 등급은 ${result}입니다.`);

// 4. 사용자 이름이 특정 이름인지 확인하고 인사 출력하기
const userName = 'Ghost';
if (userName==='Ghost'){
    console.log(`안녕하세요. ${userName}님!`);
}
else console.log('누구세요?');

// 5. 입력한 수가 0보다 크면 "양수", 0이면 "0", 아니면 "음수" 출력하기
const num = -3;
if(num>0) result='양수';
else result='음수';
console.log(result);

// 6. 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기
const inputPw = '1234';
const realPw = '0000';
if(inputPw === realPw) result='성공!';
else result ='실패';
console.log(`로그인 ${result}`);

// 7. 세 개의 수 중 가장 큰 수 찾기
console.log(`25,6,26 중 가장 큰 숫자는 ${Math.max(25,6,26)}`);

// 8. 주어진 숫자가 3의 배수인지 확인하기
if(userInput%3===0) result='맞습니다.';
else result='아닙니다.';
console.log(`${userInput}은 3의 배수가 ${result}`);