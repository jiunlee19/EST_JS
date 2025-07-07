// JS함수 X, NodeJS 또는 웹브라우저에서만 사용 가능

function print(){
    console.log("3초 후에 실행되는 print함수");
}
print();
// setTimeout(print, 3000);
// 내가 지정한 시간 이후에 매개변수로 들오온 함수를 실행
console.log(1);
setTimeout(()=>{
    console.log(2);
},0); // 0이라고 해서 바로 처리하지 않음. (비동기 처리방식이 아님)
// 적어도 4ms 있다가 처리됨.
console.log(3);

function sayHello(name){
    console.log(`Hello, ${name}`);
}
setTimeout(()=>{
    sayHello('ghost');
}, 3000);
setTimeout(sayHello, 2000, "Irangi");