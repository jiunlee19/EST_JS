//예시
async function run() {
    console.log("Start");

    const a = await new Promise((resolve) =>
        setTimeout(() => resolve("A"), 1000)
    );
    console.log(a);

    const b = await new Promise((resolve) =>
        setTimeout(() => resolve("B"), 500)
    );
    console.log(b);

    console.log("End1");
}
run();
console.log("End2");
// 처리 순서 : start - end2 - a - b - end1
// await: Promise() 객체 값이 들어올 때 까지 기다려준다.
