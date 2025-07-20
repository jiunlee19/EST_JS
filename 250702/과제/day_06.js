// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: "Ghost", age: 20 };
console.log(person.name);

// 2. 객체 person에 height: 180 속성을 추가하세요.
person.height = 180;
console.log(person);

// 3. 객체 person에서 age 속성을 삭제하세요.
delete person.age;
console.log(person);

// 4. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.
console.log(Object.keys(person));

// 5. 객체 person의 모든 값(value)만 배열로 출력하세요.
console.log(Object.values(person));

// 6. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.
for (const key in person) {
    console.log(key, person[key]);
}

// 7. person에 'age' 속성이 있는지 true/false로 출력하세요.
console.log("age" in person);

// 8. person 객체의 모든 값을 "이름:값" 형태의 문자열로 출력하세요.
for (const key in person) {
    console.log(`${key}:${person[key]}`);
}
Object.entries(person).forEach(([k, v]) => {
    console.log(`${k}:${v}`);
});

// 9. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요 (동적으로???)
const obj = {};
obj["name"] = "amy";
console.log(obj);

// 10. 객체 person의 key 개수를 출력하세요.
console.log(Object.keys(person).length);

/*---------------------------------------*/
// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
let arr = [];
users.map((user) => {
    arr.push(user.name);
});
console.log(arr);

// 2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
const newUser = { ...user, age: 30 };
console.log(newUser);

// 3. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
let key = "hobby";
let value = "soccer";
person[key] = value;
console.log(person);

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const personArr = Object.entries(person).map(([k, v]) => `${k}:${v}`);
console.log(personArr);

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
console.log(users.filter((user) => user.age >= 20));

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.

// 8. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)
const person2 = { name: "Ghost", info: { email: "ghost@email.com" } };
console.log(person2.info.email);

// 9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj4 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj4).every((v) => typeof v === "number"));

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.

/*--------------------------------------------*/
// 1. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj5 = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(obj5));
console.log(copy);

// 2. 두 객체가 값이 같은지 얕은 비교(shallow equal)하는 함수를 작성하세요.
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };

function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}
console.log(shallowEqual(a, b));

// 4. 객체 person에 sayHello 메서드를 추가하고 실행하세요.
person.sayHello = function () {
    return `Hello ${this.name}`;
};
console.log(person.sayHello());

// 5. 생성자 함수로 User 객체를 만들고, 인스턴스를 생성하세요.
