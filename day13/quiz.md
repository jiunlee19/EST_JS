1. async 함수는 항상 Promise 객체를 반환한다.

-   O

2. await는 Promise가 완료될 때까지 전체 프로그램을 멈춘다.

-   X
-   await 포함 함수만 멈춘다.

3. nullish 연산자(??)와 OR 연산자(||)는 동일하게 동작한다.

-   X
-   nullish 연산자는 null, undefined 일때만 오른쪽값을 반환, 논리합 연산자은 모든 falsy값을 반환한다.

4. 옵셔널 체이닝(?.)을 사용하면 존재하지 않는 속성에 접근할 때 에러가 발생한다.

-   O
-   옵셔널 체이닝이 에러를 반환하지않고, undefined를 반환한다.

5. Map에서 키로 사용할 수 있는 데이터 타입은 문자열과 숫자뿐이다.

-   X
-   모든 데이터 타입을 키로 사용할 수 있다.

6. sessionStorage와 localStorage의 차이점은?

-   sessionStorage의 데이터는 브라우저 세션 동안만 지속됨.
-   localStorage의 데이터는 사용자가 직접 지우지 않는 이상 영구적임.

7.  다음 코드의 실행 순서는?

```js
async function run() {
    console.log("1. Start");
    const a = await new Promise((resolve) =>
        setTimeout(() => resolve("A"), 1000)
    );
    console.log("2.", a);
}
run();
console.log("3. End");
```

-   1,3,2

---

## 복습

### async/await

-   async 함수 => Promise 생성기
    -   async 키워드가 붙으면 Promise 객체를 반환
    -   return 무엇이든 Promise로 감싸짐
-   await => 일시정지 버튼
    -   Promise가 처리될 때까지 함수 실행을 일시정지
    -   전체 프로그램이 멈추는 것이 아니라 해당 함수만 멈춤
    -   await은 반드시 async 함수 안에서만 사용 가능
    -   여러 개의 await을 사용하면 순차적으로 실행됨

### Nullish 연산자

-   왼쪽 피연산자가 null 또는 undefined일때만 오른쪽 값 반환
-   모든 falsy 값(0, false, "", NaN 등)에 대해 오른쪽 피연산자 값을 반환

```
const userName = prompt("이름"); // 취소: false, 확인: ""
console.log(userName ?? "알 수 업는 사용자");
```

### 옵셔널 체이닝(?.)

-   **옵셔널 체이닝 = 안전한 속성 접근 도구**
-   객체의 속성이 존재하지 않을 때 에러 대신 undefined 반환

#### 옵셔널 체이닝(?.)+ Nullish

`const country = user?.address?.country ?? 
주소 정보 없음"`

### 스토리지 - 3가지 방법

1. localStorage - 영구적 저장
2. sessionStorage - 브라우저 세션 동안만
3. 쿠키 - 서버 통신용, 인증정보, 보안이 중요한 데이터

=> 데이터는 문자열로 저장되기 때문에 값을 다시 사용할 때는 꼭 형변환 체크하기!
=> 객체 저장할 때는 JSON.stringify()
