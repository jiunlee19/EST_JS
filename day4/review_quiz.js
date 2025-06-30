const numbers = [51,20,12,5,2];
// 01. numbers의 절반값을 구하시오.
const halfNums = numbers.map(x => x/2);
console.log(halfNums);

// 02. numbers 15미만인 숫자를 모두 구하시오
const under15 = numbers.filter(x => x<15);
console.log(under15);

// 03. numbers에서 15보다 작은 첫번째 수를 구하시오.
const under15First = numbers.find(x => x<15);
console.log(under15First);

// 04. numbers2에서 전체적으로 '5'가 몇개있는지 구하시오. 3
const numbers2 = [153,7,55];
// 풀이1
const five = numbers2
.toString()
.split("")
.filter(number => number === '5').length;
console.log(five);
console.log('!!!',numbers2.toString());

// 풀이2
const five1 = numbers2
.map(String)
.join("")
.split("")
.filter(number => number === "5").length;
console.log(five1);

// 풀이3
const five2 = [...numbers2.join('')].filter((char) => char === '5').length;
console.log(five2);
// 풀이4
const five3 = [...numbers2.toString()].filter((x) => 5 == x).length;
console.log(five3);

// 05. d가 들어가는 사람만 찾고싶다.
const users = ['Daniel','Don','donald','Micheal'];
const usersD =  users.filter((user) => user.toLowerCase().includes('d'));
console.log(usersD);
//보통 정규식표현?을 사용해 해결함 이건아님

// 06. 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 양꼬치 n인분과 음료수 k개를 먹었다면 

function kkochi (n,k){
    const discount = 2000 * Math.floor(n/10);
    const total = 12000*n + 2000*k;
    return total - discount;
}
console.log(kkochi(10,3));