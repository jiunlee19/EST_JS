let a =10;
let b =5;
let c =3;

// 1. a와 b 두 수를 비교해서, 큰 수를 출력하시오. ('a'가 큽니다.)
if(a>b) console.log('a가 큽니다.');
else if(b>a) console.log('a가 큽니다.');
else console.log('같은 값입니다.');

// 2. c가 짝수인지, 홀수인지 출력하세요 ('c'는 홀수입니다.)
console.log(c % 2 === 0 ? 'c는 짝수입니다' : 'c는 홀수입니다');

// 3. b의 값에 a를 더하는 식을 쓰세요. (일반, 축약)
console.log(b=b+a);
console.log(b+=a);

// 4 b가 a의 약수인지 확인하세요 .(a를 b로 나누었을 때, 딱 떨어지면 b가 약수)
console.log(b%a ? 'a는 b의 약수입니다' : 'a는 b의 약수가 아닙니다');

// id, pw -> id가 틀리면, 'id가 틀려요;, id가 맞으면 -> pw 비교
const userId = 'Ghost';
const userPw = '1234';
const inputId = 'Ghost';
const inputPw = '0000';

if(userId === inputId) {
    console.log('id가 일치합니다.');
    if(userPw === inputPw){
        console.log('로그인 성공');
    }
    else{
        console.log('pw가 틀렸습니다.');
    }
}
else{
    console.log('id가 틀렸습니다.');
}