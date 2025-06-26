// 논리연산자 (AND, OR, NOT) 

// and -> &&
console.log(true && true); //T
console.log(false && true); //F
console.log(false && false); //F

const userId = 'Ghost';
const userPw = '1234';
const inputId = 'Ghost';
const inputPw = '0000';
if(userId === inputId && userPw === inputPw) console.log('로그인 성공');
else console.log('로그인 실패');

// or -> ||
console.log(true || true); //T
console.log(false || true); //T
console.log(false || false); //F

// not -> !
console.log(!true); //F
console.log(!false); //T
console.log(!!true); //T

// ko - 100, en = 80, math = 50
// 평균이 70점이상이면 합격, 단 한 과목이라도 60점 미만이면 불합격

const ko =100;
const en =80;
const math=50;
const avg = (ko+en+math)/3;
if(avg>=70){
    if(ko>=60 && en>=60 &&  math>=60) console.log('합격입니다.');
    else console.log('불합격입니다.');
}
else console.log('불합격입니다.');

//ver2.
if(ko<60 || en<60 || math<60) console.log('불합격입니다.');
else if(avg >= 70) console.log('합격입니다.');
else console.log('불합격입니다.');