const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

// TODO 1: 책 검색 함수 구현
async function searchBooks() {
    // 검색어 가져오기
    const keyword = $searchInput.value.trim();
    // 빈 검색어 확인
    if (keyword.length === 0) {
        $bookList.innerHTML = "<li>검색어를 입력해주세요.</li>"; // 사용자에게 검색어 입력 요청 메시지 표시
        return; // 검색어가 없으면 함수 종료
    }
    // API 호출
    try {
        const url = `${BOOK_URL}?query=${encodeURIComponent(keyword)}&size=10`;
        // fetch를 사용해서 API 호출하기
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`,
            },
        });
        if (!response.ok) {
            // 응답 상태 확인하기
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // JSON 데이터로 변환하기
        if (data.documents.length === 0) {
            // 결과가 없다면 '검색 결과가 없습니다.' 메시지 표시
            $bookList.innerHTML = "<li>검색어를 다시 입력해주세요</li>";
            return;
        }
        renderBooks(data.documents); // 검색 결과를 화면에 표시하기
    } catch (error) {
        // 에러 메시지 콘솔 및 화면에 표시하기
        console.log(error);
        $bookList.innerHTML = "<li>도서 검색 중 오류가 발생했습니다</li>";
    }
}

// TODO 2: 폼 제출 이벤트 처리
$searchForm.addEventListener("submit", (e) => {
    // 기본 동작 방지하기
    e.preventDefault();
    // 검색 함수 호출하기
    searchBooks();
});

// TODO 3: 책 목록 렌더링 함수
function renderBooks(books) {
    // 기존 내용 삭제
    $bookList.innerHTML = "";
    // 책 정보를 화면에 표시
    books.forEach((book) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src="${book.thumbnail || "no-image.png"}" alt="${book.title}" />
          <div>
              <h3>${book.title}</h3>
              <p>저자: ${book.authors.join(", ") || "정보 없음"}</p>
              <p>출판사: ${book.publisher || "정보 없음"}</p>
              <p>가격: ${
                  book.price ? book.price.toLocaleString() + "원" : "정보 없음"
              }</p>
          </div>
        `;
        $bookList.appendChild(li);
    });
    $searchForm.reset();
}

// 🔍 구현 힌트
/*
📚 API 요청 URL 만들기:
`${BOOK_URL}?query=${encodeURIComponent(query)}&size=10`

🔑 Authorization 헤더 설정:
{
  headers: {
    'Authorization': `KakaoAK ${REST_API_KEY}`
  }
}

📊 API 응답 데이터 구조:
{
  "documents": [
    {
      "title": "책 제목",
      "authors": ["저자1", "저자2"],
      "thumbnail": "이미지 URL",
      "publisher": "출판사",
      "price": 15000
    }
  ]
}
*/
