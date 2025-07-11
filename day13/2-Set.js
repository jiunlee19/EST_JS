// Set: 중복되지 않은 값만 저장하는 집합 형태
// 1. 성능 좋음
// 2. 순회 가능

// 배열 VS Set()
const set1 = new Set([1, 1, 3, 4, 5, 6]);
console.log(set1);
console.log([...set1]);

const stringSet = new Set("Hello World");
console.log(stringSet);
// 공백포함, 중복 제거
// 0: "H", 1: "e", 2: "l", 3: "o", 4: " ", 5: "W", 6: "r", 7: "d"

// 크기 확인
console.log(set1.size);

// 인덱스 접근
const arr = [1, 2, 3, 4, 5];
console.log(arr[1]);
console.log(set1[0]);
// Set() - 순서보장, 하지만 인덱스로의 접근 불가

// 존재여부 확인
console.log(arr.includes(3)); // true
console.log(arr.includes(7)); // false
console.log(set1.has(4)); // true
console.log(set1.has(7)); // false
// has() - 성능이 더 좋음!
// 값을 찾을 때 더 용이하다

// 순회
// 큰 차이 없음

// 변환
// Set -> 배열
// 변환될 때 중복이 제거 됨
const arrFromSet = Array.from(set1);
console.log(arrFromSet);
console.log([...set1]);

// 배열 -> Set
const arr1 = [1, 1, 1, 1, 4, 4, 4, 4, 3, 3, 2];
const unique = new Set(arr1);
console.log(unique);

// 배열 -> Set -> 배열
// 배열 형태 많이 사용하기 때문
// Set()으로 기존 배열에서 중복 제거 후 배열 형태로 많이 사용한다!
const set2 = [...new Set(arr1)];
console.log(set2);

// 자주 사용하는 상황 예시
// 사용자가 선택한 태그들에서 중복 제거
const SelectedTag = [
    "Javascript",
    "Python",
    "Javascript",
    "React",
    "HTML",
    "HTML",
    "CSS",
];
const uniqueTags = [...new Set(SelectedTag)];
console.log(uniqueTags);

// 합집합
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "kiwi", "strawberry"]);
const unionSet = new Set([...setA, ...setB]);
// ["apple","banana","banana","kiwi"] => set으로 중복 제거됨
console.log(unionSet);

// 2. 교집합
const intersectionSet = new Set([...setA].filter((el) => setB.has(el)));
console.log(intersectionSet);

// 3. 차집합
// setA - setB 또는 setB - setA - 2가지 경우 가능
// 3-1. setA에는 있지만, setB에는 없는 요소
const diffAB = new Set([...setA].filter((el) => !setB.has(el)));
// 교집합이랑 !만 다른 형태
console.log(diffAB); // {"apple"}

// 3-2. setB에는 있지만, setA에는 없는 요소
const diffBA = new Set([...setB].filter((el) => !setA.has(el)));
console.log(diffBA); // {"kiwi", "strawberry"}

// - Set
// 중복제거가 필요한 경우
// 순서보다는 고유성이 중요한 경우
// 대용량 처리 용이 (has())
// 모든 타입의 키 가질 수 있음
// 집합 연산 가능

// - 배열
// 중복제거 허용할 경우
// 인덱스 접근이 필요할 경우
