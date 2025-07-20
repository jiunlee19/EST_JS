function solution(n) {
    //최소공배수 구하기
    const max = n>6 ? n : 6;
    for(let i = max; i < 600; i += max){
        if(i%6===0 && i%n===0) return i/6;   
    }
}
console.log(solution(6));
console.log(solution(10));
console.log(solution(4));