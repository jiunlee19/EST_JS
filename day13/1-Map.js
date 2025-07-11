// Map: 모든 타입을 키로 사용할 수 있는 객체
// 일반 객체 VS Map()

// 생성
const emptyMap = new Map();
console.log(emptyMap);
// 값을 추가할 때 set()

// 초기 데이터와 함께 생성, 2차원 배열(키-값 쌍)
const mapWithData = new Map([
    ["key1", "value1"], // 키와 값의 쌍의 형태로 배열에 넣는다.
    ["key2", "value2"],
]);
console.log(mapWithData);

// 객체와의 차이점 - 3가지
// 1. 크기 확인
const obj = {
    name: "위니브",
    number: 1,
};
console.log(Object.keys(obj).length);
// 일반 객체의 불편한 점
// 일반 객체의 크기를 구하는게 어렵다.
console.log(mapWithData.size);
// Map 객체는 크기 구하는게 간단하다.

// 2. 존재여부 확인
// Map 객체 - has() => O(1)???
const myMap = new Map();
myMap.set("name", "유진");

console.log(myMap.has("name")); // true
console.log(myMap.has("address")); // false

// 일반 객체 - in 연산자
console.log("name" in obj);
console.log("address" in obj);

// 3. 순회 방법 (Iterater??)
for (const [key, value] of myMap) {
    console.log([key, value]);
}
myMap.forEach((value, key) => {
    console.log(value, key);
});

// 일반 객체 - 바로 순회 가능하지 않음
// for...in
// Object.keys(),
// Object.values(),
// Object.entries(),

// 4. 변환
// 4-1. 일반 객체 -> Map()
const mapFromObject = new Map(Object.entries(obj)); // 일반객체 -> 2차원 배열
console.log(mapFromObject);
mapFromObject.set(true, "boolean");
console.log(mapFromObject);

// 4-2. Map -> 일반 객체
const newObject = Object.fromEntries(mapFromObject);
// 2차원 배열(키-값 목록) -> 객체
console.log(mapFromObject);

// 5. 순서 보장
const map = new Map();
map.set("b", 2);
map.set(1, "일");
map.set("a", 1);
console.log(map);
// 우리가 추가한 순서대로 추가됨.

const obj2 = {};
obj2["b"] = 2;
obj2[1] = "일";
obj2["a"] = 1;
console.log(obj);
// 일반 객체는 순서 예측하기 어려움
// 정렬기준???

// 차이점 정리
/* 
1. 키의 타입
- Map: 모든 데이터 타입을 키로 사용
- Object: 문자열만!

2. 순서 보장
3. 성능
- 대량의 데이터 수정하거나 삭제 등 다룰 때 => Map객체 성능이 좋다!!
*/
