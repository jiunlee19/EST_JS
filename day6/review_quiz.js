//Object Quiz

const person = {name:"Ghost", age:20};
// 1.
console.log(person.name, person.age);

// 2.
person.height = 180;
console.log(person);

//반복문
//3. 
const arr = ['A','B','C'];
const smallArr1 = [];
const smallArr2 = [];
for(const a of arr){
    smallArr1.push(a.toLowerCase());
}
arr.forEach(x=>{
    smallArr2.push(x.toLowerCase());
})
console.log(smallArr1);
console.log(smallArr2);

//4.
const user = {
    name:'person',
    age:20,
    skilss:["fly","swim"],
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

delete user.pets; //객체 삭제
console.log(user);

console.log(user.skills[1]);