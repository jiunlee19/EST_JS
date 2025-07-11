function debounce(func, delay) {
    let timer;
    console.log(timer);

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, delay);
        console.log(timer);
    };
}

function handleInput(keyword) {
    console.log("검색어: ", keyword);
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});
