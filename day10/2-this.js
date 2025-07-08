// this = 동적키워드
// 호출방식에 따라 바뀐다.

// 1. 전역 this
console.log("전역 범위: ", this); // window 객체

// 2. 일반함수 안:
function func1() {
    console.log("일반 함수: ", this);
}
func1(); // window 객체

// 3. 객체 메서드 내
const obj1 = {
    name: "객체1",
    func1() {
        console.log("객체 메서드: ", this);
    },
};
obj1.func1(); //obj1

// 4. 객체 메서드 내 일반 함수
const obj2 = {
    name: "객체2",
    func2() {
        // console.log("객체 메서드", this);
        function inner() {
            console.log("내부 함수: ", this);
        }
        inner();
    },
};
obj2.func2(); // window 객체
// 객체 메서드 안에 있는 일반 함수도 일반 함수라,
// this가 window 객체를 가르킨다.

// 5. 객체 메서드 내 화살표 함수 this
const obj3 = {
    name: "객체3",
    func2() {
        // console.log("객체 메서드", this);
        const inner = () => {
            console.log("화살표 함수: ", this);
        };
        inner();
    },
};
obj3.func2(); //obj3
// 화살표 함수는 this를 가지지 않음.
// 상위 스코프의 this(객체)를 그대로 가져옴
// 장점 : this가 예측 가능하게 동작한다

// 6-1. new 이용해 생성한 생성자 함수 this
function Friends(name) {
    //this는 이미 새로운 인스턴스를 가리킴
    console.log("생성자 함수: ", this); // {}
    this.name = name;
    console.log("생성자 함수: ", this); // {name}
    this.sayHello = function () {
        console.log(`Hello ${this.name}`);
    };
    console.log("생성자 함수: ", this); // {name, sayHello()}

    // return this; 엔진이 자동으로 완성된 객체를 반환합니다.
}
// 인스턴스가 생성되는 동시에 this는 생성된 인스턴스를 가리키게 된다!
const friend1 = new Friends("경현");

/* 
생성자 함수
1. 빈 객체 생성 - 속성이 없는 완전히 비어있는 상태 {}
2. this 바인딩: 
3. 
*/

// 6-2. new 키워드 없이 호출할 때
const friend2 = Friends("유진"); // undefined
console.log("new 없이 만든 인스턴스: ", friend2); // undefined
console.log(window.name); // 전역변수 오염

// 생성자 함수, 일반 함수에서의 this 결정 방식이 다르다!

// 7. 클래스 this
class Friends2 {
    constructor(name) {
        this.name = name;
        console.log(this);
    }
    // console.log(this);
    // 클래스 바디: 생성자, 메서드 정의, 필드 선언 등
    // 실행문은 올 수 없음

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}

const friends3 = new Friends2("빙키");
console.log(friends3.name); // 빙키

// 7. event핸들러 this
const $button = document.querySelector("#button");

$button.addEventListener("click", function () {
    console.log("이벤트 핸들러: ", this); //이벤트 핸들러가 일어난 DOM
    console.log("이벤트 핸들러: ", this.tagName);
});

$button.addEventListener("click", () => {
    console.log("이벤트 핸들러: ", this); //이벤트 핸들러 상위요소 window
});

//=============================
/* 호출방식에 따른 this가 가리키는 것
- (생성자 함수, 클래스)new 키워드로 호출됐다면 => this는 새로운 인스턴스
- 객체의 메서드 호출 => 메서드가 속한 객체
- 화살표 함수 => 상위스코프의 this를 그대로 받음
- 이벤트 핸들러 안 => 일반 함수(DOM요소),화살표함수(상위스코프)
- 그 외 일반 함수 호출 => window 객체(strict mode에서 undefined)
*/
