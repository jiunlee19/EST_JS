// 디바운싱: 일정 시간 동안 추가 입력이 없을 때 한 번만 실행
// => "마지막 입력" 기준! 일정 시간이 지나면 실행
//  예) 자동저장
function debounce(func, delay) {
    let timer; // 타이머 ID를 저장하는 변수

    // args: 인자들이 담긴 배열
    return function (...args) {
        clearTimeout(timer); // 타이머 취소(초기화)

        timer = setTimeout(() => {
            func(...args); // handleInput
        }, delay);
    };
}
// => 새로운 타이머를 설정해서, 입력이 지속되지 않으면 delay 시간 후 func()을 실행
// => delay 시간이 지나기 전에 또 입력이 들어오면 다시 함수가 호출되면서 clearTimeout으로 타이머 취소

function handleInput(keyword) {
    console.log("검색어: ", keyword);
    // 실제로는 검색 요청을 하는 요청
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});

// 디바운스 처리하지 않았다면,
// a => 요청
// p => 요청
// ...

// 디바운스 처리하면,
// a => 타이머1 시작 (1초 후 요청 예정)
// p => 타이머1 취소, 타이머2 시작 (1초 후 요청 예정)
// ... 1초 동안 입력 없음
// 타이머5 완료 => 함수 실행 및 요청!

// 클로저
// 함수가 종료됐지만, 지역변수를 사용할 수 있다는 특징이 있다.
//
// 디버깅의 어려움,
