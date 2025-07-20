function solution(babbling) {
    var answer = 0;
    
    const isValid = ['aya','ye','woo','ma'];
    let cnt =0;
    
    babbling.forEach(x => {
        console.log(x);
        isValid.forEach(y=>{
            if(x.includes(y)) x=x.replace(y,' ');
        })
        if(x.trim().length === 0) {
            cnt++;
            console.log('++');
        }
    })
    return cnt;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));