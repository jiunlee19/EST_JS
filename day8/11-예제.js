//생성자 함수
function Friends(name,age){
    this.name = name,
    this.age = age,
    this.sayHello = function(){
        console.log(`Hello, ${name}`);
    }
}
const ghost = new Friends('Ghost',1000);
console.log(ghost);
ghost.sayHello();

//class
class Friends2{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayGoodbye(){
        console.log(`Goodbye, ${this.name}`);
    }

    sayAge(){
        console.log(`Your age is ${this.age}`);
    }
}
const user1 = new Friends2('Irangi',500);
const user2 = new Friends2('Nuvis',30);
console.log(user1,user2);
user1.sayGoodbye();

// 템플릿 = 생성자함수, class

class Car {
    name;
    cost;
    
    cost=6
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
    sayName(){
        console.log(`이 차의 이름은 ${this.name}이고, 가격은 ${this.cost}만원입니다.`);
    }
}

const car1 = new Car('Jeep',7000);
const car2 = new Car('지바겐',10000);

//stock()
car1.sayName();
car2.sayName();
//이 차의 이름은 이고, 가격은 만원이다.