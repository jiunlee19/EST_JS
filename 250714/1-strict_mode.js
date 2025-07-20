// 엄격모드
// 코드 맨 위에 "use strict;"를 추가
// 해당 스코프 내에서 적용

// 1. 변수 선언 강제
// 2. 삭제 불가능한 속성 삭제 시 오류
// 3. 중복 매개변수 금지
// 4. this 동작 변화
// 자동으로 엄격모드가 적용되는 경우: ES6 모듈, 클래스
// 장점(4)
// Typescript: 엄격모드 적용돼있음.

// 1. 변수 선언 강제
function func1() {
    "use strict";
    let x;
    // 엄격 모드 : 선언 부분 없으면, Reference error
    // 일반 모드: 선언 부분 없어도, x가 전역변수로 선언되어 에러가 없다.
    x = 10;
    console.log(x);
}
func1();
// console.log(window.x);

// 2. 삭제 불가능한 속성 삭제 시 오류
function func2() {
    "use strict";
    // delete Object.prototype;
    // 엄격모드 : type error
    // 일반모드 : 에러 없음. 위험함.
}
func2();

// 3. 중복 매개변수 금지
// function sum(a, a) {
//     "use strict";
// console.log(a);
// 일반모드: 4 출력됨. 덮어씌워져서 의도하지 않은 동작이 실행.
// 엄격모드: syntax error
// }
// sum(2, 4);

// 4. this 동작 변화
function func3() {
    "use strict";
    console.log(this);
    // 일반모드: window 객체
    // 엄격모드: undefined 강제
}
func3();

// 자동으로 엄격모드가 적용되는 경우: ES6 모듈, 클래스

// 장점
// 1. 안정성 향상
// 의도하지 않은 동작 사전 예방
// 2. 가독성 향상
// 중복 매개변수 선언 불가,
// 3. 성능 향상
// 코드 최적화에 도움줄 수 있고, 이는 성능 향상도 가능
// 4. 디버깅 용이

// Typescript: 엄격모드 적용돼있음.
