const animals = ['puppy','cat','parret'];
let result = animals.filter((animal,index) => index === 2);
console.log(result);
//매개변수 3개까지 가능
//name, idx, 
result = animals.map((animal, index) => index);
console.log(result);

//animals의 마지막요소로 Rabbit을 추가해보세요(원본배열을 변경)
animals.push('Rabbit');
console.log(animals);

// 1~2번째 있는 요소만 가져오기
console.log(animals.slice(1,3));
//slice 원본 변경 안 함

animals.splice(1,2,'Elephant');
console.log(animals);
//splice 원본 배열 변경(주의)
animals.splice(1,0,'cat');
console.log(animals);
//1번째 요소로부터, 몇 개 지우고, 그 사이에 어떤 단어 집어넣기

const arr =['apple', 'mango','banana'];
arr.reverse(); //원본 배열 변경(주의)
console.log(arr);