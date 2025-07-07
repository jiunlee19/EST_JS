const cat = {
    name:"kitty",
    sound: function(){
        console.log("야옹~~");
    },
};
cat.sound();

const dog = {
    sound: ()=>{
        console.log("멍멍!!");
    }
}
dog.sound();

// 생성자 함수
//함수명 대문자로 시작(개발자끼리 약속)
function Animal(name){
    this.name = name; //this = Animal()
    this.sound = function(){
        console.log(`${this.name} 소리가 납니다`);
    }
}
const tiger = new Animal('어흥~~'); //this -> tiger
// new 함수명() -> 생성자 함수 선언? 

const parret = new Animal('짹짹');
//this -> parret
tiger.sound();
parret.sound(); //호출

// class
class Animal2{
    constructor(name){
        this.name = name; //this -> Animal2
    }
    sound(){
        console.log(`${this.name} 소리가 납니다`);
    }
}
const lion = new Animal2('King~~~');

lion.sound();