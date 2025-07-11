function solution(lines) {
    // -100 ~ 100 범위니까 총 200칸 필요
    const arr = Array(200).fill(0);

    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            arr[i + 100] += 1; // 인덱스 보정
        }
    }

    // 두 개 이상 겹치는 구간의 길이만 필터
    return arr.filter((v) => v >= 2).length;
}

// end에 < 연산자를 쓰셔서
// 배열은 200 크기가 되어도 작동할거같네요

console.log(
    solution([
        [0, 1],
        [2, 5],
        [3, 9],
    ])
);
console.log(
    solution([
        [0, 5],
        [3, 9],
        [1, 10],
    ])
);
