
function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let numerSum = (numer1*denom2) + (numer2*denom1);
    let denomSum = (denom1*denom2);
    for(let i=Math.min(numerSum,denomSum) ;i>=1 ;i--){
        if(numerSum%i === 0 && denomSum%i === 0){
            return [numerSum/i, denomSum/i];
            
    }}
    
}

console.log(solution(1,2,3,4));
console.log(solution(9,2,1,3));