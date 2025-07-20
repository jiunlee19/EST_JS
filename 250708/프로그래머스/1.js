function getMode(arr) {
    const frequency = {}; // 각 숫자의 등장 횟수를 저장할 객체
    let maxFreq = 0; // 최대 빈도수
    let mode = []; // 최빈값(들)

    // 각 숫자의 등장 횟수 계산
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    // 최빈값 수집
    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            mode.push(Number(key));
        }
    }

    return mode.length === 1 ? mode[0] : mode; // 여러 개일 경우 배열로 반환
}

// 예시
const numbers = [1, 3, 3, 2, 1, 4, 3, 1, 2];
console.log(getMode(numbers)); // 출력: 1 또는 3 (같은 횟수라면 [1, 3])

console.log(getMode([1, 2, 3, 3, 3, 4, 5]));
