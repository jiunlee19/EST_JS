// 널리시 연산자
console.log(null ?? "hello"); // hello
console.log(undefined ?? "hello"); // hello
console.log("" ?? "hello"); //   -> 빈값이 있다고 생각한다.

const userId = null;
const userName = userId ?? "알 수 없는 사용자"; // null일 경우를 대비해서, 기본값 설정할 수 있다.

// 논리합(OR, ||): 둘 중 하나라도 참이면 참, 왼쪽 피연산자가 참이면 더 이상 평가를 진행하지 않음.
console.log("" || "논리합(오른쪽)");
console.log("" ?? "널리시(왼쪽)");
console.log(null ?? "널리시(오른쪽)");
// nullish -> 0, false, NaN, "" 와 같은 falsy 값도 유효하다.
// null, undefined만 유효하지 않다.

// let userName1 = prompt("이름을 입력하세요");
let userName1 = null;
userName1 = userName1 ?? "알 수 없는 사용자";
console.log("입력: ", userName1);

// 주의사항!
// 논리합, nullish 같이 사용하기!
const a = null;
const b = 5;
const c = 10;
//console.log(a ?? b || c); // 논리합, nullish 혼합 사용 금지 => 에러 발생
// 명시적으로 괄호 요구 => 우선순위 지정해줘야 함.
console.log((a ?? b) || c); // b || c -> 5 | 10 -> 5
console.log(a ?? (b || c)); // null ?? 5 => 5

// optional chaining
const user = {
    name: "유진",
    address: {
        country: "대한민국",
        city: "서울",
    },
};
const user2 = {
    name: "진호",
};

let user3 = null;

console.log(user.address.country); // 대한민국
console.log(user2.address); // undefined

// console.log(user2.address.country); // undefined.country -> TypeError
console.log(user2.address?.country); //undefined

// console.log(user3.name); // null.name -> TypeError
console.log(user3?.name); // undefined

// 대괄호 표기법
console.log(user2.address?.country);
console.log(user2["address"]?.city); // undefined
// console.log(user3["address"]?.city);

// nullish + 옵셔널 체이닝
const country = user2?.address?.country ?? "주소 정보 없음";
const city = user?.address?.city ?? "주소 정보 없음";
console.log("user2:", country); // 주소 정보 없음
console.log("user:", city); // 서울
