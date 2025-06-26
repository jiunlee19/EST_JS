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