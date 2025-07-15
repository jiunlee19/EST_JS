// TODO2-1: 기본 계산 함수들을 import 하세요
import basic from "./calculator/basic.js";
import { changeUserState, userState } from "./user/userManager.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultText = document.getElementById("result");
const upgradeBtn = document.getElementById("upgrade-btn");
const advanceCalcSection = document.getElementById("advance-calculator");

// TODO2-2: 기본 계산기 이벤트 리스너를 추가하세요
document.getElementById("add").addEventListener("click", () => {
    calculator(basic.add);
});
document.getElementById("subtract").addEventListener("click", () => {
    calculator(basic.subtract);
});
document.getElementById("multiply").addEventListener("click", () => {
    calculator(basic.multiply);
});
document.getElementById("divide").addEventListener("click", () => {
    calculator(basic.divide);
});

// TODO2-3: 계산기 실행 함수를 완성하세요
function calculator(operationFn) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultText.textContent = "숫자를 올바르게 입력하세요.";
        return;
    }

    try {
        const result = operationFn(num1, num2);
        if (isFinite(result)) {
            resultText.textContent = result;
        } else {
            resultText.textContent = "유효하지 않은 계산 결과입니다.";
        }
    } catch (err) {
        resultText.textContent = "오류 발생: " + err.message;
        console.error(err);
    }
}

// ========== Advanced Calculator 기능 ==========

// TODO5-1: 업그레이드 버튼 이벤트 리스너를 추가하세요
upgradeBtn.addEventListener("click", async () => {
    changeUserState();
    // TODO5-2: 사용자 상태를 변경하세요

    // TODO5-3: userState를 확인하여 고급 기능을 활성화하세요
    if (userState) {
        try {
            const { power, squareRoot } = await import(
                "./calculator/advance.js"
            );
            // UI 표시
            advanceCalcSection.style.display = "block";
            resultText.textContent = "고급 기능이 활성화되었습니다.";

            // 이벤트 중복 등록 방지
            document.getElementById("power").onclick = () => calculator(power);
            document.getElementById("squareRoot").onclick = () =>
                calculator(squareRoot);
        } catch (err) {
            resultText.textContent = "고급 기능 로드에 실패했습니다.";
            console.error(err);
            resultText.textContent =
                "[오류] 고급 계산기 기능을 로드할 수 없습니다.";
        }
    } else {
        advanceCalcSection.style.display = "none";
        resultText.textContent = "고급 계산기 사용 권한이 없습니다.";
    }
});
