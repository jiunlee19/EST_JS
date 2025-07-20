const blood = 'bloodType';

const user = {
    name:'Ghost',
    [blood]:'B',
    [3+5]:8,
    ['best'+'Friend']:'Irangi',
};

/*
대괄호 안에 키 값을 넣으면, (활용성 UP!)
변수값을 키값으로 선언할 수도 있고
숫자도 키값 지정 및 호출할 수 있고
문자열을 붙여서 키값을 만들 수도 있다.
*/
console.log(blood, user.bloodType);
console.log(user[8]);
//8이 숫자라서 괄호 안에 넣어서 호출해야 함
console.log(user.bestFriend);