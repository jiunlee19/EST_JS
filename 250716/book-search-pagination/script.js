const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// TODO 1: 페이지네이션 상태 관리 변수 선언
// - currentPage: 현재 페이지 번호
// - totalPages: 전체 페이지 수
// - currentQuery: 현재 검색어
let currentPage = 1;
let totalPages = 1;
let currentQuery = "";

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $pagination = document.getElementById("pagination");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

// TODO 2: 책 검색 함수 수정 (페이지네이션 기능 추가)
async function searchBooks(page = 1) {
    // 2-1. 검색어 가져오기
    const query = $searchInput.value.trim();

    // 2-2. 빈 검색어 체크
    if (query === "") {
        alert("검색어를 입력해주세요!");
        $searchInput.focus();
        return;
    }

    // 2-3. 첫 번째 페이지일 때만 currentQuery 업데이트
    // 검색어가 변경되었는데 첫 페이지가 아니라면, 첫 페이지로 리셋
    if (page === 1 || query !== currentQuery) {
        currentQuery = query;
        currentPage = 1; // 새로운 검색이거나 검색어 변경 시 항상 첫 페이지로
    } else {
        currentPage = page; // 페이지 이동 시에는 해당 페이지로 업데이트
    }

    try {
        // 2-4. fetch 요청 URL에 page 파라미터 추가
        const response = await fetch(
            `${BOOK_URL}?query=${encodeURIComponent(
                currentQuery
            )}&page=${currentPage}&size=10`,
            {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        // 2-5. 검색 결과 없을 때 처리
        if (data.documents.length === 0) {
            $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
            // 페이지네이션 숨기기 => 초기화
            $pagination.innerHTML = "";
            return;
        }

        // 책 검색 결과 렌더링
        renderBooks(data.documents);

        // 2-7. 페이지 이동 시 맨 위로 스크롤
        window.scrollTo({ top: 0, behavior: "smooth" });

        // 2-8. 페이지네이션 정보 업데이트
        // totalPages(data.meta.pageable_count 활용)
        totalPages = Math.min(50, Math.ceil(data.meta.pageable_count / 10)); // Kakao API는 최대 50페이지만 지원
        // 페이지네이션 렌더링 함수 호출
        renderPagination();
    } catch (error) {
        console.error("검색 실패:", error);
        $bookList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
        // 에러 시 페이지네이션 숨기기
        $pagination.innerHTML = "";
    }
}

// 폼 제출 이벤트
$searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBooks(1); // 새로운 검색 시 1페이지부터 시작
});

// 책 목록 렌더링 함수
function renderBooks(books) {
    $bookList.innerHTML = "";

    if (books.length === 0) {
        $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
        return;
    }

    const fragment = document.createDocumentFragment();
    books.forEach((book) => {
        const bookItem = document.createElement("li");
        const thumbnailSrc =
            book.thumbnail ||
            "https://via.placeholder.com/120x170?text=No+Image"; // 기본 이미지 추가

        bookItem.innerHTML = `
            <img src="${thumbnailSrc}" alt="${
            book.title
        }" class="book-thumbnail"/>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-authors">저자: ${
                    book.authors.length > 0
                        ? book.authors.join(", ")
                        : "정보 없음"
                }</p>
                <p class="book-publisher">출판사: ${
                    book.publisher || "정보 없음"
                }</p>
                <p class="book-price">가격: ${
                    book.price
                        ? book.price.toLocaleString() + "원"
                        : "정보 없음"
                }</p>
            </div>
        `;
        fragment.appendChild(bookItem);
    });
    $bookList.appendChild(fragment);
}

// TODO 3: 페이지네이션 렌더링 함수 구현
function renderPagination() {
    // 3-1. 기존 페이지네이션 초기화
    $pagination.innerHTML = "";

    // 3-2. 페이지가 1개 이하면 페이지네이션 숨기기
    // 버튼 생성 작업을 하지 않는 것
    if (totalPages <= 1) {
        return;
    }
    // 페이지가 2개 이상일 경우 페이지네이션 보이기
    $pagination.style.display = "flex";

    // 3-3. 이전 버튼 생성 (현재 페이지가 1보다 클 때만)
    if (currentPage > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "이전";
        prevButton.classList.add("pagination-button", "prev");
        prevButton.addEventListener("click", () =>
            searchBooks(currentPage - 1)
        );
        $pagination.appendChild(prevButton);
    }

    // 3-4. 페이지 번호 버튼 생성 (최대 5개)
    // startPage와 endPage 계산
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("pagination-button");
        if (i === currentPage) {
            pageButton.classList.add("active"); // 현재 페이지면 active 클래스 추가
        }
        pageButton.addEventListener("click", () => searchBooks(i));
        $pagination.appendChild(pageButton);
    }

    // 3-5. 다음 버튼 생성 (현재 페이지가 마지막 페이지가 아닐 때만)
    if (currentPage < totalPages) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "다음";
        nextButton.classList.add("pagination-button", "next");
        nextButton.addEventListener("click", () =>
            searchBooks(currentPage + 1)
        );
        $pagination.appendChild(nextButton);
    }
}

// 초기 로드 시 검색창에 포커스
document.addEventListener("DOMContentLoaded", () => {
    $searchInput.focus();
});
