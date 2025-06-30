/*
for(초기화;조건식(참또는거짓);중감식){
    //코드
}
*/

const users = ['Daniel','Don','donald','Micheal'];
for (let i=0; i<users.length; i++){
    console.log(users[i]);
}

// 1~10 더한 값 구하는 합을 구하는 코드
let sum=0;
for(let i=1;i<=10;i++){
    sum += i;
}
console.log(sum);

// 1부터 20까지 수 중에서 짝수만 출력하기
for(let i=1;i<=20;i++){
    if(i%2===0) console.log(i);
}

// 구구단출력(5단)
let dan;
for(let i =2;i<=9;i++){
    console.log(`${dan}단입니다.`);
    for(let j=1;j<=9;j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}