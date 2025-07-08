// 콜백 함수 실습
// 📌 요구사항
// 1. orderCoffee라는 함수를 작성합니다.
// 2. 첫 번째 인자로 커피 이름을, 두 번째 인자로 콜백 함수를 받습니다.
// 3. 함수 실행 시 콘솔에 커피 준비 중...을 출력한 후, 콜백 함수를 실행합니다.
// 4. 콜백 함수에 커피 이름을 인자로 전달하여 실행합니다.
// 5. 커피가 준비되었습니다: 커피 이름 출력

// 1. 
function orderCoffee(coffeeName, callback){
    console.log(`커피가 준비중...`);
    callback(coffeeName);
}

function sayCoffeName(coffeeName){
    console.log(`커피가 준비되었습니다: `,coffeeName);
}

orderCoffee('아메리카노', sayCoffeName);
// orderCoffee('아메리카노', function(coffeeName){
//     console.log(`커피가 준비되었습니다: `,coffeeName);
// });
orderCoffee('카페라떼', sayCoffeName);

// 재귀 함수 실습
// 반복문 없이 재귀 호출을 이용해 1부터 n까지의 합을 계산해봅니다.

// 🧠 재귀 함수 핵심 개념
// 재귀 함수는 두 가지 필수 요소가 있어야 합니다:

// 종료 조건: 재귀 호출을 멈추는 조건
// 재귀 조건: 자기 자신을 호출하는 부분

// 📌 요구사항
// sumUpTo라는 함수를 만듭니다.
// 인자로 받은 수까지 1부터 더한 값을 반환해야 합니다.
// 반복문 없이 재귀로 작성합니다.
// sumUpTo(5)를 실행했을 때, 15가 출력되도록 합니다.

// 2.
function sumUpTo(n){
    if(n<=0) return `다시 입력하세요`;
    if(n===1) return 1;
    return n + sumUpTo(n-1);
}
console.log('5! =',sumUpTo(5));