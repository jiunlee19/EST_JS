const user = {
    name:'Ghost',
    age:1000,
}
console.log("name" in user); 
console.log("col" in user);
//'key' in 객체 -> 존재여부 출력

const arr = ['a','b','c'];
for(const idx in arr){
    console.log('array :',idx);
}
//배열 - for in -> 인덱스값
//(잘 사용 안 함)
// 배열안에 추가속성 있으면 전부 순회하기때문에 잘 안쓰인다 

for(const key in user){
    console.log('object :',key,user[key]);
}
//객체 - for in -> 키 값
//객체 순회하며 키 값 출력한다.

//예제1
const friend1={
    name:"Ghost",
    age:1000,
    skills:'fly',
}
const friend2={
    name:"Irangi",
    age:500,
}
console.log("skills" in friend1);
console.log("skills" in friend2);

for(key in friend1){
    console.log(key, friend1[key]);
}

//예제2
const person={name:'Ghost',age:20};

for(key in person){
    console.log(key,':', person[key]);
}

delete person.age;
console.log(person);
