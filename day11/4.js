// ## HTTP(HyperText Transfer Protocol)

// - 웹에서 데이터를 주고받는 통신규칙, 약속

// ### 요청 메서드

// - GET: 데이터를 조회 ex. 상품 목록, 상세정보
// - POST: 데이터를 보낼 때, 생성 ex. 댓글, 상품 등록, 로그인
// - PUT: 전체 데이터를 수정
// - PATCH: 일부 데이터 수정
// - DELETE: 데이터를 삭제

// => CRUD(Create, Read, Update, Delete)
//

//
// 상품 정보, 목록 가져오는 요청
// (1) xhr 객체 생성: 데이터를 요청하고 응답받을 수 있는 도구
const xhr = new XMLHttpRequest();
// (2) 요청 초기화(메서드, 요청 URL 설정)
xhr.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");
// (3) 응답 처리 방식
xhr.onreadystatechange = function () {
    // 1, 2, 3
    if (xhr.readyState === 4) {
        // 4
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log("상품 목록", response);
        } else {
            console.error("Error:", xhr.status);
        }
    }

    /*
- onreadystatechange는 readyState가 1, 2, 3일 때도 호출되기 때문에 요청이 도달하기 전까지 else문이 실행됨.
- 즉, 우리가 보낸 요청이 실제 에러가 아니지만 에러처리를 하게 됨.
- 그렇기 때문에 보다 정확한 에러 처리를 위해서는 우리의 요청이 잘 도착했을 때 응답을 확인해야 한다. => if 문 중첩으로 요청 처리!

if (xhr.readyState === 4 && xhr.status === 200) {
    // readyState가 1,2,3일 때는 이 조건이 false
    console.log("Edit Success!", JSON.parse(xhr.responseText));
} else {
    // readyState가 1,2,3일 때 여기서 실행됨!
    console.log("Error:", xhr.status); // 이때 status는 0이거나 undefined
}
   */
};
// (4) 요청
xhr.send();

//(2) 상품 수정하기
/*
1. 상품 목록 조회하고,
2. 모록 중 첫 번째 상품의 id를 이용해서 상세 정보를 조회하기,
3. 그 상품의 가격을 수정하는 요청을 보낼 것!
*/

// (1) 상품 목록 조회
const xhr1 = new XMLHttpRequest(); // 객체 생성
xhr1.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");
xhr1.onreadystatechange = function () {
    // 1, 2, 3
    if (xhr1.readyState === 4) {
        // 4
        if (xhr1.status === 200) {
            const products = JSON.parse(xhr1.responseText);
            console.log("상품 목록", products);
            console.log(products[0].id);

            if (products.length > 0) {
                const productId = products[0].id;

                // (2) 상품 상세 정보 조회
                const xhr2 = new XMLHttpRequest();
                xhr2.open(
                    "GET",
                    `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
                );
                xhr2.onreadystatechange = function () {
                    if (xhr2.readyState === 4) {
                        if (xhr2.status === 200) {
                            const detail = JSON.parse(xhr2.responseText);

                            //(3) 상품 정보 수정(가격)
                            const xhr3 = new XMLHttpRequest();
                            xhr3.open(
                                "PUT",
                                `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
                            );
                            // header 설정
                            xhr3.setRequestHeader(
                                "Content-Type",
                                "application/json"
                            );

                            // 전송 데이터 객체
                            const updateProduct = {
                                ...detail,
                                price: detail.price + 1000,
                            };
                            xhr3.onreadystatechange = function () {
                                if (xhr3.readyState === 4) {
                                    if (xhr3.status === 200) {
                                        console.log(
                                            "전송 완료",
                                            JSON.parse(xhr3.responseText)
                                        );
                                        console.log(detail);
                                    } else {
                                        console.error("Error", xhr1.status);
                                    }
                                }
                            };
                            // 수정된 데이터 전송
                            xhr3.send(JSON.stringify(updateProduct));
                        } else {
                            console.error("Error:", xhr2.status);
                        }
                    }
                };
                xhr2.send();
            }
        } else {
            console.error("Error:", xhr1.status);
        }
    }
};

xhr1.send();

// 콜백이 3개나 중첩됨 => 콜백 지옥!!
// (순차적으로 진행해야 해서)
// 어떤 데이터를 기반으로 다음 요청을 만들어야 할 때
// (앞선 요청의 결과가 다음 요처에 필요할 때)
// 중첩구조 사용해야 함

// 위 방법이 너무 가독성이 떨어져서 async/await, fetch, promise 생겨남
