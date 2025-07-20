// HTTP -> 200,404, 500, 알 수 없는 에러
const statusCode = undefined;
switch(statusCode){
    case 200:
        console.log('성공입니다.');
        break;
    case 404:
        console.log('페이지를 찾을 수 없습니다.');
        break;
    case 500:
        console.log('서버 오류입니다.');
        break;
    default:
        console.log('알 수 없는 오류입니다.');
        break;
}
//case 안에 break문 필수

// 1. user의 role을 판단해서 출력하는 구문을 만드시오.
// admin -> 관리자님 안녕하세요
// user -> 회원님 안녕하세요
// guest -> 게스트 화면입니다.
// 페이지를 보는 권한이 없습니다.

const userRole = 'admin';
switch(userRole){
    case('admin'):
        console.log('관리자님 안녕하세요');
        break;
    case('user'):
        console.log('회원님 안녕하세요');
        break;
    case('guest'):
        console.log('게스트 화면입니다');
        break;
    default:
        console.log('페이지를 볼 수 있는 권한이 없습니다');
}

// Date객체 
const today = new Date();
console.log(today.toISOString().split('T')[0]);
//date.toString()하면 내용이 바뀜.
//toISOString() 사용해야함. 처음 봄.
const year = today.getFullYear();
const month = (today.getMonth()+1).toString().padStart(2,'0');
const date = today.getDate().toString().padStart(2,'0');
const day = today.getDay();



console.log(year, month, date, day);

//1
let week = '';
switch(parseInt(day)){
    case 0: 
        week ='Sunday'; break;
    case 1: 
        week='Monday'; break;
    case 2:
        week='Tuesday'; break;
    case 3: 
        week='Wednesday'; break;
    case 4: 
        week='Thursday'; break;
    case 5: 
        week='Friday'; break;
    case 6: 
        week='Saturday';
};
console.log(`Today is ${week}`);

//2
const weekArr =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const day2 = weekArr[today.getDay()];
console.log(day2);

const hours = today.getHours();
const minutes = today.getMinutes();

const hours12 = message =Math.trunc(hours%12||12).toString().padStart(2,'0');
const min12 = minutes.toString().padStart(2,'0');
const ampm = hours>=12 ? 'pm' :'am';

console.log(`${hours12}:${min12} ${ampm}`);