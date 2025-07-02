// 함수선언식 :sum
function sum (a,b){
    return a+b;
}
console.log(sum(3,5)); //결과가 리턴

// 함수표현식 : function 키워드
const sayHello = function(name){
    return `Hello ${name}`;
}
console.log(sayHello('Ghost')); //Hello Ghost

//함수표현식 / 화살표 함수
const getBig =(arr)=>{
    return Math.max(...arr);
    
}
console.log(getBig([3,5,10,12])); //가장 큰 수 출력