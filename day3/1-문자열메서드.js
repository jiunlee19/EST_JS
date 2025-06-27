let str = 'Hello World';
console.log(str.length); // 11 공백 포함이라서

console.log(str.indexOf('l')); // 2 ,제일 앞에 있는 요소 위치 알려줌
console.log(str.lastIndexOf('l')); // 9
// 대소문자 구분한다.
// 찾을 수 없을 땐, -1 출력

console.log(str.includes('o')); // includes 포함하고 있는지 아닌지
console.log(str.includes('a'));

// substring, slice
console.log(str.slice(1,4)); // 2~4번째 글자
console.log(str.slice(4)); //5번째 부터 끝까지 글자
console.log(str.slice(-5)); //마지막에서 5번째 부터 끝까지 글자

const email = "ghost@gmail.com";
let userName = email.slice(0,-10);
console.log(userName);
console.log(email.indexOf('@'));

//userName = email.slice(0, email.indexOf("@")); //인상적인 코드

// uppercase, lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//split
const str2 = 'A.B.C';
const newStr = str2.split('.');
console.log(newStr);

let domain = email.split('@')[1];
console.log(domain);

// url 위치 추출 실습
const url = 'http://www.ghost.com/about';
const url2 = 'http://www.ghost.com/contactUs';

console.log(url.slice(url.lastIndexOf('/')+1));
console.log(url2.slice(url2.lastIndexOf('/')+1));

function where(url){
    return url.slice(url.lastIndexOf('/')+1);
}
console.log(where('http://www.ghost.com/about'));
console.log(where('http://www.ghost.com/contactUs'));

console.clear();
//---------------
//trim
const str3 = '           hello world   ';
console.log(str3.trimStart(), '-');
console.log(str3.trimEnd(), '-');
console.log(str3.trim(), '-');

//repeat
const star = "*";
console.log(star.repeat(5));

//replace
console.log(str.replace('World','Weniv'));
console.log(str.replaceAll('o','a'));
// 원본이 바뀌진 않고, 꼭 값을 어딘가에 저장해줘야 쓸 수 있다.

//padStart, padEnd
//::before, ::after와 비슷한 기능
const num = '7';
console.log(num.padStart(3,"0"));
const num2 = '27';
console.log(num2.padStart(3,"0"));

console.log(num.padEnd(5,'❤️'));

const coin = '3200';
console.log(coin.padEnd(7,'0'));

const cost = '1000';
console.log((Number(coin)-Number(cost)) *1000);
