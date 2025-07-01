function solution(dots) {
    const x=[];
    const y=[];
    let answer = 0;
    
    for(let i=0;i<dots.length-1;i++){
        for(let j=i+1;j<dots.length;j++){
            x.push(dots[i][0] - dots[j][0]);
            y.push(dots[i][1] - dots[j][1]);
        }
    }
    // console.log(x);
    // console.log(y);
    for(let i=0;i<3;i++){
        if(x[i]/y[i] === x[x.length-i-1]/y[y.length-i-1]) return 1;
    }
    return 0;   
}
console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]));
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]));