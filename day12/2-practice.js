// Promise 체이닝 방식!(then(), catch())
// function createProduct() {
//     fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             id: 10,
//             productName: "[new] 개발 노트",
//             price: 15000,
//             stockCount: 10,
//             thumbnailImg: "",
//             option: [],
//             discountRate: 0,
//             shippingFee: 2500,
//             detailInfoImage: [],
//             viewCount: 100,
//             pubDate: new Date().toISOString(),
//             modDate: new Date().toISOString(),
//         }),
//     })
//         .then((response) => {
//             console.log("상품 생성", response);
//             if (!response.ok) {
//                 throw new Error("상품 생성에 실패했습니다.");
//             }
//             return response.json();
//         })
//         .then((json) => {
//             console.log(json);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

async function createProduct() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 10,
                    productName: "[new] 개발 노트",
                    price: 15000,
                    stockCount: 10,
                    thumbnailImg: "",
                    option: [],
                    discountRate: 0,
                    shippingFee: 2500,
                    detailInfoImage: [],
                    viewCount: 100,
                    pubDate: new Date().toISOString(),
                    modDate: new Date().toISOString(),
                }),
            }
        );

        if (!response.ok) {
            throw new Error("실패1");
        }

        const data = await response.json();
        console.log("성공: ", data);
    } catch (error) {
        console.error("실패: ", error);
    }
}
createProduct();

/*await + then 쓸 때도 있다.

하지만, async/await을 사용하는 경우
- Promise 체이닝 복잡해질 때, 
- 중간 결과를 변수에 저장해야 할 때 
*/
