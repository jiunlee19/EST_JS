// 1. 생성자 함수
function Friends(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello ${name}`);
    }
}

//인스턴스(객체) 생성 - new 키워드 사용!
const binky = new Friends("Binky",20);
console.log(binky);

// 단점 : 객체 만들 때 마다, sayHello 같은 메서드들이 하나씩 새로 생성된다. (동일한 기능하는 동일한 함수) -> 메모리 낭비, 관리 어려움

// 메서드는 Prototype을 이용해서 따로 빼서 관리하는 방법 권장

//2. 생성자함수 + prototype
function Friends2(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello ${name}`);
    }
}
Friends2.prototype.sayHello = function(){
    console.log(`Hello ${this.name}`);
} //객체마다 메서드가 중복 생성되지 않고, 공통으로 공유한다.
//단점 : 구문의 분산으로 전체 구조 파악이 어렵다.

// 3. 클래스: 객체를 여러 개 만들 때 구조와 기능을 한눈에 파악하기 쉬운 방식으로 정리해주는 문법!
// ex. 객체 만들기 위한 청사진, 설계도, 붕어빵틀

class Friends3 {
    constructor(name, age){
        this.name = name;
        thist.age = age;
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}