const user = {
    name:'person',
    age:20,
    skills:["fly","swim"],
    pets:{
        dog:{
            name:'dog',
            age:5,
        },
        parret:{
            name:'parret',
            age:2,
        },
    },
    sayHello(){
        return `Hello, ${this.pets.dog.name}`;
    },
    sayBye:function(){
        return `Bye, ${this.pets.parret.name}`;
    }
}
console.log(user.sayHello());
console.log(user.sayBye());

console.log(user.skills[1]); //객체 속 배열 접근

delete user.pets; //객체 삭제
console.log(user);

//
user.mbti='INTP'; //mbti 추가
delete user.age; //age 삭제
user.name='hiitsme'; //name 변경
console.log(user);

user.sayHi = () => {
    return `Hi, ${user.name}`;
}
console.log(user.sayHi());

user.mySkillIs = function(){
    return `My skill is ${this.skills} 이야.`;
    //.toString()으로 묶었지만, 백틱으로 묶여있어 필요없었음
    //백틱으로 묶어서, this.skills가 문자열로 이미 변환돼있었음
};
console.log(user.mySkillIs());