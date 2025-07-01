let friends =[];

function isValidName(name){
    const targetIdx = friends.indexOf(name);
    if(targetIdx === -1) {
        console.log(`친구 ${name}가 없습니다.`);
        return false;
    }
    return targetIdx;
}

function addFriend(name){
    // 중복 검사
    const targetIdx = isValidName(name);
    if(targetIdx !== false) {
        console.log(`친구 ${name}이 이미 있습니다.`);
        return;
    }
    else {
        friends.push(name);
        console.log(`${name}이 친구에 추가됐어요`);
    }
}

function deleteFriend(name){
    //유효성 검사
    const targetIdx = isValidName(name);
    if(targetIdx === false) return;
    friends.splice(targetIdx,1);
    console.log(`친구 ${name}가 삭제됐습니다`);

}
//includes와 indexOf로 또 탐색하는 것이니, 최대한 한가지만 사용하자.

function updateFriend(name, newName){
    //예외처리, 친구이름이 수정 알림
    //유효성 검사
    const targetIdx = isValidName(name);
    if(targetIdx === false) return;
    friends[targetIdx]=newName;
    console.log(`친구 ${name}가 ${newName}로 바꼈습니다.`)
}

addFriend("Ghost");
addFriend("Irangi");
addFriend("Camel");
updateFriend("Ghost","Shoopa");
deleteFriend("Cindy");

console.log(`my Friends : ${friends}`);

const arr = [1,2,3];
arr.push(4);
arr.splice(1,1);
console.log(arr);

console.clear();

deleteFriend("Shoopa");
console.log(friends);

updateFriend('Irangi','Ghost');
console.log(friends);

addFriend("Shoopa");
console.log(friends);

addFriend("Ghost");
console.log(friends);