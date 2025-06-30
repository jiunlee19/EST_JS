//Array.from() 사용해보기

//flat()
const arr = [1,2,[3,4,[5,6]]];
console.log(arr.flat()); //[ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ]
//isArray?

//sort()
const users = ['Daniel','Amy','donald','Micheal','Juliet'];
users.sort();
console.log(users); //[ 'Amy', 'Daniel', 'Juliet', 'Micheal', 'donald' ]
const numbers = [51,2,12,1,22,5];
numbers.sort((a,b)=>a-b);
console.log(numbers); //[ 1, 2, 5, 12, 22, 51 ]

numbers.sort();
console.log(numbers);//[ 1, 12, 2, 22, 5, 51 ]

//some(), every()
const numbers2 = [1, 2, 3, 4, 5];

const hasEven = numbers2.some(num => num % 2 === 0);
console.log(hasEven);
//some() 하나라도 조건 충족하면 true

const allEven = numbers2.every(num => num % 2 === 0);
console.log(allEven);
//some() 하나라도 조건 충족하지 못하면 false