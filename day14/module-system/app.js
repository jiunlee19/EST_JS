import { PI, add as sum } from "./utils.js";
// 변수명을 utils.js 그대로 사용
import sub from "./utils.js";
// export default의 변수명 마음대로 설정 가능

console.log(PI);
console.log(sum(2, 4));
console.log(sub(5, 3));

// 동적 임포트: import() => promise 형태로
// 사용자가 요청했을 때만, 필요한 수간에만, 가볍게 불러오는 방식!
const btn = document.getElementById("module-btn");
btn.addEventListener("click", async () => {
    const { PI, add } = await import("./utils.js");
    console.log(PI, add(3, 4));
});

// 모듈의 속성 관리
console.log(user);
user.name = "빙키";
// user.password = "1234";
console.log(user);

// 모듈 시스템의 규칙: export 된 변수는 외부에서 직접 재할당하거나, 덮어쓸 수 없다!!
// user = {
//   name: "위니브",
// };
