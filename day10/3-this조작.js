// 1. call(): 호출과 동시 this를 바꿔주는 방법
const user = {
    name: "빙키",
    sayName() {
        console.log(this);
        console.log(`내 이름은 ${this.name}`);
        //this.sayHell(); TypeError! 왜냐면 bot 객체 안에는 sayHello()메서드가 없으니까
    },
};

const bot = {
    name: "빙키봇",
};

user.sayName(); // sayName() 속 this => user 객체
user.sayName.call(bot); // sayName() 속 this => bot 객체

// 2. apply()
// call 과 동일하게 동작하지만, 인자를 배열로 받는다는 차이만 있다
function introduce(age, hobby) {
    console.log(`내 이름은 ${this.name}, ${age}살, 취미는 ${hobby}`);
}
introduce(20, "요가"); // name => undefined
const person = { name: "채준" };
introduce.call(person, 20, "요가");
introduce.apply(person, [20, "요가"]); //인자를 배열로 전달

// 3. bind
const user2 = {
    name: "빙키2",
    sayName() {
        console.log(`내 이름은 ${this.name}`);
    },
};
const guest = { name: "게스트" };
// this를 객체 guest로 고정!된 새로운 함수 생성됨.
const bindFunc = user2.sayName.bind(guest);
bindFunc();
// 이벤트핸들러나 콜백함수에서 많이 사용
// this 고정 => 안전하고 예측이 가능해서

// call /apply/ bind -> 명시적 this 바인딩
