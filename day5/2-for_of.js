// for...of
const fruits = ['apple','mango','banana'];
for(const fruit of fruits){
    //요소 선언 시, const 꼭 사용하기
    console.log(fruit);
}
//forEach()로도 똑같이 쓸 수 있다.(배열에만 사용 가능)

const str = 'Hello';
console.log(str.length);

//꼭 배열에만 사용하는 것은 아님(문자열도 가능)
for(const spell of str){
    console.log(spell);
    // H
    // e
    // l
    // l
    // o
}

// for...in 추후에 배울 예정