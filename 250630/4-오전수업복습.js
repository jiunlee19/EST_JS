//콜백함수
//reduce(reducer 리듀서)
//filter(true, false -> predicate 함수 (boolean 값반환), some, every, map(mapping Function))

const users = ['Daniel','Amy','donald','Micheal','Juliet'];
//Amy가 포함돼있는지 확인
console.log(users.some(x => x === 'Amy'));

//3보다 큰 값이 있는지 확인
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.some(x => x > 5));

//fruits 변수 안에 있는 값이 모두 문자열인지 확인
const fruits = ['apple','banana',3];
console.log(fruits.every(x => typeof x === 'string'));

//이메일형식이 모두 맞는지 확인(@ . 필수포함) every
const emails = ['test@example.com', 'hello@domain.com', 'test.com'];

console.log(emails.every(email => email.includes('@') && email.includes('.')));

const arr2 = [3,4];
console.log(Array.isArray(arr2));