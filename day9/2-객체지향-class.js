class Robot {
    constructor(name){
        //초기값 설정
        this.name = name;
    }// 클래스 하나에 생성자 하나만 사용 가능
    introduce(){
        console.log(`삐빅- 저는 ${this.name}입니다.`);
    }
    move(){
        console.log(`${this.name}이 이동 중입니다.`);
    }
}

const robot1 = new Robot("오르미봇");
const robot2 = new Robot("위니브봇");

console.log(robot1);
console.log(robot2);
robot1.introduce();
robot2.introduce();
robot1.move();

// 클래스 상속
// 기존 클래스와 기능을 그대로 물려받고, 자기만의 기능이나 속성을 추가하는 것
// 기존 클래스:  부모클래스, 기반 클래스
// 상속 받는 클래스 : 자식 클래스, 파생 클래스

class babyRobot extends Robot {
    constructor(name, age){
        super(name); //호출하지 않으면 에러
        //부모의 초기값을 super로 가져와야 함.
        this.age = age;
        this.company = "위니브";
    }// constructor 생략 가능 => super(...args) 호출해줌.

    // 오버라이딩 : 이미 있던 메서드를 다시 정의하는 것. 
    introduce(){
        console.log(`삐빅- 저는 ${this.company}의 ${this.name}입니다.`);
    }
}

const BabyRobot = new babyRobot("베이비오르미",10);
console.log(BabyRobot);
BabyRobot.introduce();