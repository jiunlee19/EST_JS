// async, await
// async: Promise 객체를 반환하는 함수
async function test() {
    return "HELLO WORLD";
    // return Promise.resolve("HELLO WORLD");
}
console.log(test());

// await: Promise가 처리될 때까지 기다린다!!
// 이 코드는 비동기 코드지만, 한 줄씩 순차적으로 실행된다.
async function message() {
    console.log("1. 함수 시작");
    const hello = await new Promise((resolve) => {
        console.log("2. 함수 생성");
        setTimeout(() => {
            console.log("3. setTimeout 콜백 실행");
            resolve("hello");
        }, 1000);
    });

    // 함수 실행 재개
    console.log("4. hello 값 받음:", hello);

    const world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("world");
        }, 1000);
    });
    console.log("5. world 값 받음", world);

    console.log(`6. ${hello} ${world}`);
}
message();

console.log("message 함수 밑에 있어요");

// Promise 버전

// promise로 작성했을 경우
/*
function message() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve("hello");
    }, 1000);
}).then((hello) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`${hello} world`);
    }, 1000);
    });
}).then((result) => {
    console.log(result);
});
}
message();
*/

// 상품 조회
async function getProducts() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product"
        );
        if (!response.ok) {
            throw new Error("상품 목록 조회 실패");
        }
        // console.log(response);
        const data = await response.json();
        // console.log("상품목록:", data);
    } catch (error) {
        console.error(error);
    }
}
getProducts();

// 상품 삭제
async function deleteProducts(productId) {
    try {
        const response = await fetch(
            `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error("상품을 삭제하지 못했습니다.");
        }

        const data = await response.json();
        console.log("삭제 완료:", data);
    } catch (error) {
        console.error("삭제 실패:", error);
    }
}
deleteProducts(1);
