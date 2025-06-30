// accumulator누적값, currentValue 배열요소
const numbers = [1,2,3,4,5];
const total = numbers.reduce(
    (a,c) => a + c, 0
    //0a+1c =1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
);
console.log(total);
// 누적연산할 때 자주 사용

const numbers2 = [10,23,15,3,2,12,30,42,50];
//홀수번째 인덱스값만 더한 결과를 출력하시오. 80
const total2= numbers2.filter((_, idx) => idx%2 === 1)
.reduce((a,c)=> a+c, 0);
console.log(total2);

//오답노트
const numbers3 = [10,23,15,3,2,12,30,42,50];
//홀수번째 인덱스값만 더한 결과를 출력하시오. 80
const total3 = numbers3.filter((_, idx) => idx%2 === 1)
//idx/2===1이라고 해서 [15]만 자꾸 출력됐다.
//idx%2===1로 고쳐서 홀수번째 인덱스의 값들을 제대로 구할 수 있었다.
.reduce((a,c)=> a+c, 0);
console.log(total2);

let arr = Array(10); //[ <10 empty items> ]
arr = Array(10).fill(0).map((_,i)=>i+1);

console.log(arr);

function sumNumbers(number){
    return Array(number)
    .fill(0)
    .map((_,i)=> i+1)
    .reduce((a,c)=> a+c, 0);
}
console.log(sumNumbers(100));
console.log(sumNumbers(50));