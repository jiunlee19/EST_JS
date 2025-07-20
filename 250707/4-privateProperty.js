class Robot {
    constructor(name){
        //초기값 설정
        this.name = name;
    }// 클래스 하나에 생성자 하나만 사용 가능
    introduce(){
        console.log(`삐빅- 저는 ${this.name}입니다.`);
    }
    move(){
        console.log(`${this.name}이 이동 중입니다.`);
    }
}

// 1. 기존 방식
class PwRobot extends Robot{
    constructor(name, pw){
        super(name);
        this.pw = pw;
    }
    login(pw){
        if(pw === this.pw) {
            console.log(`${this.name} 접속 성공`);
        }
        else {
            console.log(`${this.name} 접속 실패`);
        }
    }
}

const pwrobot = new PwRobot("로봇캣","1234");
pwrobot.introduce();
pwrobot.login("1234");

console.log(pwrobot.pw);
pwrobot.pw = "0000";
pwrobot.login("1234");

// 단점 : 직접 접근하고 수정할 수 있다
// 숨김처리 : 비공개프로퍼티

// 2. 비공개 프로퍼티 방식 : 안전한 방법
class SafeRobot extends Robot{
    #pw; //비공개 필드에 저장됨.
    constructor(name, pw){
        super(name);
        this.#pw = pw;
    }
    login(pw){
        if(pw === this.#pw) {
            console.log(`${this.name} 접속 성공`);
        }
        else {
            console.log(`${this.name} 접속 실패`);
        }
    }
    //password 확인
    get password(){
        return this.#pw;
    }
    //password 수정
    set password(newPassword){
        this.#pw = newPassword;
    }
}
console.log("=====비공개 프로퍼티 사용======");
const saferobot = new SafeRobot("안전한 로봇","1234");
saferobot.introduce();
saferobot.login("1234");
// pwrobot.#pw = "0000";
// 에러 남

// 접근해서 수정할 경우 (getter, setter)
// 간접접근으로 일부 허용
saferobot.password = "0000";
saferobot.login("0000");
// 일반 프로퍼티와 프라이빗 프로퍼티와 형태가 같아서 문제
// 주석으로 비공개 프로퍼티임을 알려줘야 함.

// 정리
// 1. #를 이용한 비공개 프로퍼티 사용 -> 직접 접근을 막기 위함.
// 2. get, set을 사용해서 필요한 경우에만 간접 접근 허용
// 3. 사용자나 협업자가 혼동되지 않도록 주석, 설명 남기는 것이 중요!