// Map 과 Set

// 1. Map: 키-값 쌍을 저장하는 자료구조.
// key: 숫자, 불리언, 배열, 객체 까지도 가능하다.
// 키가 어떤 자료형이든 될 수 있어 유연하다.

let m = new Map();
console.log(m);

// 값 설정
m.set("하나", 1);
m.set(1, "하나");
m.set(true, "참");
m.set([1, 2], "배열");

// 값 가져오기
console.log(m);
console.log(m.get("하나"));
console.log(m.get(1));
console.log(m.get(true));
console.log(m.get()); //undefined
// 참조형이라서 [1,2] 값의 내용이 같아도 다른 것임
const key = [2, 3];
m.set(key, "배열");
console.log(m.get(key)); // 배열

// 존재 여부 확인
console.log(m.has("하나")); // true
console.log(m.has("둘")); // false

// 삭제
m.delete("하나");
// m.clear();// 전체 삭제
console.log(m);

// 객체의 size
console.log(m.size);

const m2 = new Map();
m2.set("name", "라이캣");
m2.set("age", 10);

for (const [key, value] of m2) {
    console.log(`${key}: ${value}`);
}

// 2. set()
// 중복되지 않은 값을 저장하는 자료 구조
// 중복은 자동 제거
let s = new Set("apple", "banana");
console.log(s);

let s2 = new Set([1, 2, 3, 4]);
console.log(s2);

let s3 = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log(s3);

// 값 추가 add
let s4 = new Set();

s4.forEach((value) => {
    console.log(value);
});

//

// 집합 연산
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "kiwi"]);

console.log(setA);
console.log([...setA]);
console.log([...setB]);
