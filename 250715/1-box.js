let position = 0;
const box = document.querySelector(".box");

// keydown: 키를 누를 때마다 계속 발생!
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        position += 5;
    }
    if (e.key === "ArrowLeft") {
        position -= 5;
    }
    box.style.transform = `translate(${position}px)`; //실제로 움직이는 부분
});
