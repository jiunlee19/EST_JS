//1. filter로 짝수만 추출
const arr1 = [1,2,3,4,5,6];
console.log(arr1.filter(x => x%2 === 0));

//2. map으로 각 요소 제곱 만들기
const arr2 = [1,2,3,4];
console.log(arr2.map(x => x**3));

//3. sort로 내림차순 정렬
const arr3 = [5,2,9,1];
console.log(arr3.sort((a,b)=> a-b));

//4. reduce로 모든 값의 합 구하기
const arr4 = [1,2,3,4,5];
console.log(arr4.reduce((a,c)=>a+c));

//5. some으로 0보다 작은 값이 있는지 확인
const arr5=[3,-1,5,7];
console.log(arr5.some(x=> x<0) ? '0보다 작은 수가 있습니다' : '0보다 작은 수가 없습니다.');

//6. every로 모두 3보다 큰지 확인
const arr6=[4,5,6];
console.log(arr6.every(x=>x>3) ? '모두 3보다 큽니다' : '3보다 작은 수가 있습니다');

//7. forEach로 요소 출력
function solution(names){
    names.forEach((name) => console.log(name));
}
solution(['Irangi','Camel','Shoopa']);
//forEach는 리턴하기 위해서라기 보다는 반복작업을 위한 거라.
//forEach 돌린 값을 바로 리턴하는게 잘못된 것이다???

//8. filter와 map 조합
//Ghost는 60점 이상인 점수만 2배로 만들어 새로운 배열을 만들기. 
function solution2(scores){
    const result = scores.filter(x => x>=60).map(x=> x*2);
    return result;
}
console.log(solution2([50,60,70,80]));
//[120,140,160]

//9.filter로 모음 제거
const vowels = ['a','e','i','o','u'];
function solution3(my_string){
    return my_string
    .split('')
    .filter(x => !vowels.includes(x))
    .join('');
}
console.log(solution3('beautiful')); //'btfl'

//10. for문을 사용해 1부터 5까지 출력하세요.
for(let i=1;i<6;i++){
    console.log(i);
}

//11. for문으로 1-10 중 3의 배수만 배열에 담아 출력하세요.
let arr7=[];
for(let i=1;i<11;i++){
    if(i%3===0) arr7.push(i);
}
console.log(arr7);