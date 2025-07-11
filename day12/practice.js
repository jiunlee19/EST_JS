const blogList = document.querySelector("#blogList");

// 1. 렌더링
function renderingBlog(data) {
    const blogArr = [];
    for (let book of data) {
        blogArr.push(`
                <li>
                    <h2>${book.title}</h2>
                    <strong>작성자: ${book.author}</strong>
                    <time datetime=${book.date}>${book.date}</time>
                    <p>조회수: ${book.views_count}</p>
                </li>
                `);
    }
    blogList.innerHTML = blogArr.join("");
}

// 2. 블로그 목록 조회
function fetchBlog() {
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
        .then((res) => {
            if (!res.ok) {
                throw new Error("블로그 목록 조회에 실패했습니다.");
            }
            return res.json();
        })
        .then((json) => {
            renderingBlog(json);
        })
        .catch((error) => {
            console.error(error);
        });
}

fetchBlog();
