// const obj = { key : value, key : value};
//key 값은 무조건 문자열이라 ''로 안 감싸줘도 괜찮음
//key & value = property

const ghost = {
    age:1000,
    mbti:'INFJ',
}
console.log(ghost.age, ghost.mbti); //접근방법
ghost.age = 500; //수정방법
console.log(ghost.age);

const type = 'age';
console.log(ghost.type); //잘못된 접근방법
//key값이 변수값으로 들어오면 [변수 ]
console.log(ghost[type]); //제대로 된 접근방법

//다양한 접근방법?

const obj = {
    name:'ghost',
    age:1000,
    sayHello() {
        return `Hello, ${this.name}`;
        //this는 객체 안이라는 의미
    },
    sayBye: function(){
        return `Good Bye, ${this.name}`;
        //this는 객체 안이라는 의미
    },
    getAge: () => {
        return obj.age;
        //화살표 안 this는 window(obj 바깥쪽) 의미.
        //현재 없어서 this.age => undefined 출력.
        //화살표함수 안에 this 사용하지 말 것 (주의)
    }
}

console.log(obj.name);
console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());