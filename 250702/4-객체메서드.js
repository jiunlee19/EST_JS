//Object.keys()
//toString() - 프로토타입(복사된) 메서드 - 앞에 와야하는 자료형이 정해져있지 않음.
//static정적메서드 - .keys()앞에 Object 붙여야 함

//Object.keys(obj)
//객체의 키를 배열로 반환

const person ={ name:"Ghost",age:1000, mbti:"INTP"};
console.log(Object.keys(person)); //1
console.log(Object.values(person)); //2

//Object.entries(obj)
//객체의 키, value값을 배열로 반환
console.log(Object.entries(person)); //3

//예제1
const user = {
    name:"Ghost",
    age:1000,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// 객체를 배열에 넣어서 많이 사용함.



const students = [
    { name: "Ghost", score: 85 },
    { name: "Camel", score: 92 },
    { name: "Mui", score: 78 },
];

console.log(typeof students); //Object
console.log(Array.isArray(students)); //true
//array를 콘솔에 typeof로 찍으면 object가 나오니까 isArray로 확인하기 


//array.prototype.push(추가할 값)
students.push({name:"Shoopa", score:20});
console.log(students);

const arr = [30,40,50,60];
//filter를 이용해 50점 이상인 값만 배열로 출력
const over50=arr.filter(x=>x>=50);
console.log(`50이상인 수는 ${over50}`);

//score가 80점 이상인 요소를 배열로 추출
const over80 = students.filter((x,i)=>x.score>=80);
const over80Name = over80.map(student => student.name);
console.log(over80);
console.log(over80Name);

//sort()
const numbers = [11,2,23,1,55];
numbers.sort((a,b)=>a-b);
console.log(numbers);
// numbers.reverse();
numbers.sort((a,b)=>b-a);
console.log(numbers);

// const hightScores = students.sort((x,y) => y.score - x.score);
//sort()가 원본 변경
const hightScores = [...students].sort((x,y) => y.score - x.score);
//스프레드 연산자 사용하여 원본 변경 방지
console.log(hightScores);
console.log(students); 

//.localeCompare()
const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a,b)=> a.localeCompare(b));
console.log(alphabets);
alphabets.sort((a,b)=> b.localeCompare(a));
console.log(alphabets);