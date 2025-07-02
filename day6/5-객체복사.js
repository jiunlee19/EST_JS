const users = [
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];

const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

// users에서 admin 권한을 가진 사용자의 이름을 출력 / 이름은 알파벳 순으로 정렬해서 배열로 반환
// admin권한 -> admin, superAdmin
// ||연산자 쓰지않는 연습하기
//1.
const adminRoles = ['superAdmin','admin'];
const adminUsers = users.filter(user => adminRoles.includes(user.role));
const adminUsersName = adminUsers.map((user)=> user.nickName);
const alphaAdmins = adminUsersName.sort((a,b)=> a.localeCompare(b));
console.log(alphaAdmins);

//2.
const userCount=users.filter(user => user.role==='user').length;
console.log(userCount);

//3. users 배열에서 모든 사용자의 이름만 배열로 추출
const users2 = [
    {name:"Ghost", age:20},
    {name:"Irangi",age:22},
    {name:"Camel",age:19},
];
const names = users2.map( user => user.name);
console.log(names);

//4. 
const tagList=[];
posts.forEach(post => tagList.push(post.tags));
console.log(`${tagList}`);

//다른 풀이
const tagContent1 = posts.map((item) => item.tags).flat(1);
console.log(tagContent1);
const tagContent2 = posts.map((item) => item.tags).flat(1).toString();
console.log(tagContent2);

// Object.assign({}:target, 복제할 객체)
const user = {name:'Ghost',age:1000};
// const newUser = user;
//원본도 바뀐다.
const newUser = Object.assign({name:"Irangi",bloodType:"B"}, user);
//키값이 같은건 원본 내용으로 덮어쓴다.
// = 앞에 있는 객체에 user를 덮어쓴 형태가 newUser로 복사된다.

const irang = { name: 'Irangi', bloodType: 'B' };
const newUser2 = Object.assign(irang, user);
console.log(newUser2);

newUser.mbti="INTP";
console.log(user, newUser);
console.log(user === newUser); //True

const user2 = {name:"Ghost", age:1000, pets:{dog:'Bobby', parret:"Cherry"}};
const newUser3 = Object.assign({}, user2);
newUser3.age=500;

console.log(user2);
console.log(newUser3);
console.log(user2 === newUser3);

newUser3.pets.dog = "Bambi";
console.log(user2.pets, newUser3.pets);
// 객체 복사 후 값 변경 시 문제 없지만,
// 객체 안 객체에서는 영향 받는 문제 있음
// 얕은 복사

//깊은복사 JSON
console.log(user2);
const newUser4 = JSON.parse(JSON.stringify(user2));
console.log(typeof newUser4, newUser4);

newUser4.pets.parret = "Alpha";
console.log(user2.pets.parret, newUser4.pets.parret);
console.log(user2.pets.parret === newUser4.pets.parret);

//hasOwnProperty()
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("mbti"));

// Object.hasOwn(object, key)
console.log(Object.hasOwn(user,"name"));
console.log(Object.hasOwn(user,"mbti"));
