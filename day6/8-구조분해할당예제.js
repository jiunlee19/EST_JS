// 구조분해할당 예제
// 총점, 평균, 최고점수
function calcScores(arr){
    const total = arr.reduce((a,b)=>a+b);
    const avg = total/arr.length;
    const top = Math.max(...arr);
    return [total, avg, top];
}
const [total, average, top] = calcScores([100,50,25,32,70]);
console.log(`점수의 합계는 ${total}이고, 평균은 ${average}이고, 1등점수는 ${top}이다.`);

// 객체 구조분해할당 예제
import {user1, user2} from '../datas/users.js';
// <script src="" type="module"></script>

// 키 값으로 추출해 올 수 있음
const {name, age, skills="No skills"} = user1;
console.log(name, age, skills);
const {name:newName, age:newAge, skills:newSkills="No skills"} = user2;
console.log(newName, newAge, newSkills);