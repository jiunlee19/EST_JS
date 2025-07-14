export const PI = 3.14;
export function add(a, b) {
    return a + b;
}
export default function sub(a, b) {
    return a - b;
}
//  파일 당 한 번만 default 선언 가능

// 모듈의 속성 관리
let user = {
    name: "라이캣",
    location: {
        country: "대한민국",
    },
};

// 속성을 관리하는 도구
Object.defineProperty(user, "password", {
    value: "0000",
    writable: false, // 수정 불가
    enumerable: false, // for...in이나 Object.key에 안 보임
    configurable: false, // 삭제 불가
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(Object.getOwnPropertyDescriptor(user, "password"));

// 전체 보호 Object.freeze()
// Object.freeze(user);

export { user };
