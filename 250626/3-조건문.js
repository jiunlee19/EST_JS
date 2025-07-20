//truthy, falsy
/* 공백이 있는 문자열 " "은 -> true,
공백이 없는 문자열 ""은 -> false */
// null -> false
// undefined -> false
if(undefined){
    console.log('true');
}
else{
    console.log('false');
}

//삼항연산자
// 조건식 ? 참일때 : 거짓일때
null ? console.log('true') : console.log('false')

let userNumber =4;
let result = userNumber%2===0 ? '짝수' : '홀수'
console.log(result);

//90점 이상 합격 / 이하 불합격
//90점 이상 'A', 70점 이상 'B', 70점 미만 '불합격'
const score = 90;
result = 0;
if(score>=90) result = 'A';
else if(score>=70) result = 'B';
else if(score>=50) result = 'C';
else result = '불합격';
console.log(result);