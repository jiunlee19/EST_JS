//while문
let i =4;
while(i<10){
    console.log(i);
    i++;
}
console.log('while문이 끝났습니다');

// do...while
let j =4;
do{
    console.log(j);
    j++;
} while(j<10);
//while문 안에 조건이 false여도 한 번 실행하고 끝남
console.log('while문이 끝났습니다');

// do-while, continue
let k=1;
do{
    if(k===5) {
        k+=2;
        continue;
    }
    console.log(k);
    k+=2;
} while(k<10);