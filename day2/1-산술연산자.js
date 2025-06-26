let a =10;
let b=5;

let result =a+b;
console.log(result);

result =a-b;
console.log(result);

result =a/b;
console.log(result);

result =a*b;
console.log(result);

//나머지 연산자 %
console.log(5%4);

//거듭제곱
console.log(2**3);

//산술할당연산자
a += 1;
console.log(a);
a -= 1;
console.log(a);


//단항산술연산자
let c=1;
let d=c++;
console.log(c); //2
console.log(d); //1
//c가 d에 할당이 먼저 일어나고, 연산이 일어남.

c=1;
d=++c;
let e = c--;
console.log(c); //1
console.log(d); //2
console.log(e); //2