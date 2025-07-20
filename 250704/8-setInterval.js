// 몇초에 한 번 반복하겠다.
function sayHello(name){
    console.log(`Hello ${name}`);
}
const timerId = setInterval(sayHello,1000,'ghost');
clearInterval(timerId);


function sayBye(name){
    console.log(`Good-bye ${name}`)
}
setTimeout(sayBye,3000,'ghost');

const timer = setTimeout(sayBye, 3000, "Irangi");
clearTimeout(timer);