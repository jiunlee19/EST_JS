const REST_API_KEY = "5cc91f5ec825ad954390d9af2de103ca"; // 여기에 **정확한 본인의 REST API 키**를 넣어주세요.
const VCLIP_URL = "https://dapi.kakao.com/v2/search/vclip"; // 동영상 검색 API 엔드포인트

// 무한 스크롤 상태 관리 변수
let currentPage = 1; // 현재 페이지 번호
let currentQuery = ""; // 현재 검색어
let isLoading = false; // 로딩 상태 (true: 로딩 중, false: 로딩 아님)
let hasMore = true; // 더 불러올 데이터가 있는지 여부
let observer = null; // IntersectionObserver 인스턴스

// DOM 요소 선택
const $vclipList = document.getElementById("vclip-list"); // 동영상 목록을 표시할 ul 또는 div
const $loading = document.getElementById("loading"); // 로딩 스피너 등의 요소
const $searchForm = document.getElementById("search-form"); // 검색 폼
const $searchInput = document.getElementById("search-input"); // 검색어 입력 input
const $observerTarget = document.getElementById("observer-target"); // IntersectionObserver의 타겟 요소

// 첫 번째 검색 함수
async function searchVclips() {
    const query = $searchInput.value.trim();

    if (query === "") {
        alert("검색어를 입력해주세요!");
        $searchInput.focus();
        return;
    }

    // 상태 초기화
    currentPage = 1;
    currentQuery = query;
    hasMore = true;
    $vclipList.innerHTML = ""; // 기존 동영상 목록 초기화

    // fetchVclips 함수 호출
    await fetchVclips(true); // 첫 번째 검색임을 알리는 플래그 전달
}

// API 호출 및 데이터 처리 함수
async function fetchVclips(isFirstSearch = true) {
    isLoading = true;
    $loading.style.display = "block"; // 로딩 표시

    try {
        const response = await fetch(
            `${VCLIP_URL}?query=${encodeURIComponent(
                currentQuery
            )}&page=${currentPage}&size=10`,
            {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            }
        );

        if (!response.ok) {
            // HTTP 에러 코드에 따라 더 구체적인 메시지
            const errorText = await response.text();
            throw new Error(
                `HTTP Error: ${response.status} - ${
                    errorText || response.statusText
                }`
            );
        }

        const data = await response.json();

        if (data.documents.length === 0) {
            if (isFirstSearch) {
                $vclipList.innerHTML = "<li>검색 결과가 없습니다.</li>";
            }
            hasMore = false; // 더 불러올 데이터가 없음
            return;
        }

        renderVclips(data.documents, isFirstSearch); // 동영상 목록 렌더링

        hasMore = !data.meta.is_end; // hasMore 상태 업데이트

        if (isFirstSearch) {
            window.scrollTo({ top: 0, behavior: "smooth" }); // 첫 번째 검색이면 페이지 맨 위로 스크롤
        }
    } catch (error) {
        console.error("동영상 검색 실패:", error);
        // 에러 메시지를 사용자에게 표시 (첫 검색일 경우에만)
        if (isFirstSearch) {
            $vclipList.innerHTML = `<li>동영상 검색 중 오류가 발생했습니다: ${error.message}. <br>API 키를 확인하거나 잠시 후 다시 시도해주세요.</li>`;
        }
    } finally {
        isLoading = false;
        $loading.style.display = "none"; // 로딩 숨김 처리
    }
}

// 동영상 목록 렌더링 함수
function renderVclips(vclips, isFirstSearch = true) {
    vclips.forEach((vclip) => {
        const vclipItem = document.createElement("li");
        vclipItem.classList.add("vclip-item"); // 스타일링을 위한 클래스 추가

        // 재생 시간을 분:초 형식으로 변환
        const minutes = Math.floor(vclip.play_time / 60);
        const seconds = vclip.play_time % 60;
        const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        vclipItem.innerHTML = `
      <a href="${vclip.url}" target="_blank" class="vclip-thumbnail-link">
        <img src="${vclip.thumbnail}" alt="${
            vclip.title
        } 썸네일" class="vclip-thumbnail" />
        <span class="vclip-playtime">${formattedTime}</span>
      </a>
      <div class="vclip-info">
        <h3 class="vclip-title"><a href="${vclip.url}" target="_blank">${
            vclip.title
        }</a></h3>
        <p class="vclip-author">${vclip.author}</p>
        <p class="vclip-datetime">${vclip.datetime.substring(0, 10)}</p>
      </div>
    `;

        $vclipList.appendChild(vclipItem);
    });
}

// IntersectionObserver 설정 함수
function setupIntersectionObserver() {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isLoading && hasMore) {
                    loadMoreVclips(); // 추가 데이터 로드 함수 호출
                }
            });
        },
        {
            root: null, // 뷰포트를 기준으로 (기본값)
            rootMargin: "0px", // 기본 마진
            threshold: 0.1, // 타겟 요소의 10%가 보이면 콜백 실행
        }
    );

    observer.observe($observerTarget); // observer-target 요소 관찰 시작
}

// 추가 데이터 로딩 함수
async function loadMoreVclips() {
    if (isLoading || !hasMore) {
        return;
    }

    currentPage++; // 다음 페이지로 설정

    await fetchVclips(false); // 첫 번째 검색이 아님을 알리는 플래그 전달
}

// 폼 제출 이벤트
$searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    searchVclips(); // 첫 검색 함수 호출
});

// 페이지 로드 시 초기화 및 Observer 해제
document.addEventListener("DOMContentLoaded", () => {
    setupIntersectionObserver();
});

window.addEventListener("beforeunload", () => {
    if (observer) {
        observer.disconnect();
    }
});
