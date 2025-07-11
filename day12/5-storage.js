// localStorage
// 브라우저 데이터를 영구적으로 저장하는 방식
// = 사용자가 직접 지우지 않는 한, 브라우저를 껐다가 다시 켜도 남아있다.
// ex. 로그인 여부, 로그인 방식, 다크모드 설정 등

localStorage.setItem("isLogined", true); // 정보 저장(Key, Value)
localStorage.setItem("color-theme", "light");

// 데이터 저장(객체 형식) -> JSON.stringify()를 사용한 변환이 필요하다.
const user = {
    id: 1,
    name: "유진",
};

localStorage.setItem("user", JSON.stringify(user));

// 데이터 가져오기
// => 숫자, 불리언, 객체도 문자열로 저장되기 때문에 형변환에 주의해야 한다!!!
const isLogined = localStorage.getItem("isLogined");
console.log("isLogined: ", isLogined);
// => 저장할 때 부터 모두 문자열화 됐음.
// boolean 값으로 사용하고 싶을 때는 형변환 필요
const theme = localStorage.getItem("color-theme");
console.log("color-theme: ", theme);

const userStorage = localStorage.getItem("user");
console.log("user: ", JSON.parse(userStorage));

// 삭제
// localStorage.removeItem("user");
// localStorage.clear(); // 전체 삭제

// 2. 세션 스토리지
// localStorage와는 다르게 브라우저를 닫으면, 데이터가 삭제됨(지속성 다름)
// 브라우저 세션 동안만 데이터를 유지
sessionStorage.setItem("session", 1);
sessionStorage.setItem("user", JSON.stringify(user));
// 문자열로 저장되기 때문에 객체 저장 시 JSON.stringify() 필요

// 데이터 가져오기
console.log("세션 데이터\n세선 :", sessionStorage.getItem("session"));
const userStorage2 = sessionStorage.getItem("user");
console.log("user :", JSON.parse(userStorage2));

// 삭제
sessionStorage.removeItem("user");
// sessionStorage.clear();

// 3. 쿠키
// 내가 만든 쿠키~
console.log(document.cookie);
// 브라우저가 서버에 자동으로 전송하는 데이터
// 용량 4KB -> 아주 작다
/* 
- 문자열로만 저장, 4KB 제한
- 자동 전송 -> 인증 정보에 자주 쓰임
- Httponly 속성이 설정된 쿠키는 자바스크립트로 읽을 수 없다.
=> 보안을 위한 장치
*/
