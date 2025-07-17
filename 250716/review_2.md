1. constructor()는 클래스의 어떤 상황에서 실행되는 메서드인가요?

-   클래스를 통해 인스턴스를 생성할 때 실행된다.

2. 아래 코드에서 this는 무엇을 가리킬까요?

```js
const obj = {
    name: "Weniv",
    getName: function () {
        return this.name;
    },
};
console.log(obj.getName());
```

-   obj 객체

3. fetch API는 기본적으로 어떤 객체를 반환하나요?

-   Promise 객체

4. 다음 중 실제 데이터를 JSON으로 파싱하는 코드로 알맞은 것은?

```js
fetch("url").then((response) => ____);
```

-   response.json()
-   JSON.parse()와 .json()의 차이는 무엇인가???

5. 다음 코드에서 new Set()을 사용하는 주된 목적은?

```js
const arr = ["apple", "banana", "apple"];
const unique = [...new Set(arr)];
```

-   중복된 요소 제거

6. 클로저에 대한 설명으로 옳지 않은 것은?
   A. 함수가 외부 변수에 접근할 수 있게 한다
   B. 메모리 누수 위험이 전혀 없다
   C. 내부 함수가 외부 함수의 변수를 참조한다
   D. 데이터 은닉에 활용할 수 있다

-   B
-   어떻게 하면 메모리 누수가 생길까???
-   잘못 사용하면, 참조 해지되지 않아 메모리 누수생긴다.

7. debounce 함수는 어떤 상황에서 주로 사용될까요?
   A. 실시간 마우스 위치 추적
   B. 스크롤 이벤트 처리
   C. 버튼 클릭 이벤트
   D. 자동완성 검색창 입력 처리

-   D
-   실시간 처리 말고

8. 다음 코드의 실행 결과를 순서대로 작성하세요

```js
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
});

console.log(4);
```

-   1 4 3 2

=============헷갈릴만한 내용===============

9. 다음 코드의 출력 결과는?

```js
console.log(typeof null);
```

-   object, 초기 설계 오류다.

10. 다음 코드의 실행 결과는?

```js
console.log([] + []);
```

-   빈 문자열, +는 문자열 연산이라서 [].toString() => ""
    => "" + "" = ""

11. 다음 코드의 실행 결과는?

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

-   true false
-   왼쪽부터 연산하기 때문
    (1<2 = true => 1)(1<3 = true)
    (3>2 = true => 1)(1>1 = false)

12. 다음 코드의 실행 결과는?

```js
console.log(NaN === NaN);
```

-   false
-   NaN는 자기자신과도 다른 유일한
-   isNaN() 또는 Number.isNaN() 사용

13. 다음 코드의 실행 결과는?

```js
console.log("5" + 1);
console.log("5" - 1);
```

-   "51", 4
-   -   : 문자열이 하나라도 있으면, 문자열 연결
-   -   : 항상 숫자로 변환 후 연산

14. 다음 코드의 실행 결과는?

```js
console.log(typeof typeof 123);
```

-   String

15. 다음 코드의 실행 결과는?

```js
console.log(!!"false" == !!"true");
```

-   true
-   !!"false" => !false => true
-   !!"true" => !false => true

16. 다음 코드의 실행 결과는?

```js
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
```

-   빈 배열 []

17.

```js
const a = [];
const b = [];

console.log(a == b);
console.log(a === b);
```

-   false false
-   배열은 참조데이터라서

18. forEach 대신 for...of 루프가 특히 유용한 상황은 언제일까요?

-   continue, break와 같은 중단이 필요할때
-   비동기 함수에서 사용할 때(forEach는 기다려주지 않는다 콜백은 제어가 어려움)
-   코드를 더 직관적이고 명확하게 사용하고 싶을떄
    => 조건 분기 + 비동기 처리 + 흐름 제어가 필요한 반복문의 경우에 유용하다.
