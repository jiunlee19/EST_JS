// 1. 이름과 나이를 입력받아서. '~님 나이는 ~세입니다.' 화살표 함수로
const personAge = (name, age) => {
    return `${name}님 나이는 ${age}입니다.`;
}
console.log(personAge('Ghost',10));

// 2. 더하기 함수 a+b인데, 만약 b가 입력되지 않았으면, b의 기본값은 10
const sum = (a,b=10) => a+b;
console.log(sum(1));

// 3. 함수의 인자로 숫자를 2개 받아서 배열로 리턴
const returnArr = (a,b) => [a,b];
console.log(returnArr(1,2));

// 4. 함수의 인자로 이름과 나이를 받아서 객체로 리턴
const returnObj1 = (name, age) => ({name, age});
const returnObj2 = (nmInpt, gIpt) => {
    return {name: nmInpt, age: gIpt};
}
// function returnObj(name, age){
//     return { name, age };
// } 이렇게 축약도 가능
console.log(returnObj1('Ghost',1000));
console.log(returnObj2('Ghost',1000));
// {a,b} => {a:a,b:b}

// 5. 연도를 입력받아서 나이를 계산하는 함수 -> getAge(1900) -> getFullYear()로 연도 구해서 차감
const getAge = (birthYear) => new Date().getFullYear() - birthYear;

console.log(getAge(2000));

// 6. for문으로 구구단 출력 -> gugudan(3) 3단 출력, 2-9단만 지원
const gugudan = (num) => {
    if (num < 2 || num > 9) return '2단부터 9단까지만 입력해주세요.';
    let result = '';
    for (let i = 1; i < 10; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    return result;
};
console.log(gugudan(5));

// 7. 구조분해할당 -> 아래 배열의 앞의 2개만 변수로 받고, 나머지는 나머지연산자로 할당하여 받으세요
const arr = [10,20,30,40];
const [a,b,...rest] = arr;
console.log(`a=${a}, b=${b}, 나머지는 ${rest}`);

// 8. 구조분해할당 -> 아래 객체중 이름과 이메일만 변수로 할당하여 받으세요. 이때 이름은 userName으로 변경하여 받으세요
const user = {id:1, name:"Ghost",age:1000,email:"ghost@gmail.com"};
const {name:userName,email}=user;
console.log(userName, email);

// 9. 
const users = [
    { name: "ghost", age: 1000 },
    { name: "irangi", age: 500 },
    { name: "nuvis", age: 30 },
];
const stringUsers = JSON.stringify(users);
console.log(stringUsers, typeof stringUsers);
const objectUsers = JSON.parse(stringUsers);
console.log(objectUsers, typeof objectUsers);

//fromEntries()가 뭘까