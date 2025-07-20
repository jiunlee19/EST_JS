function debugFortune() {
    const fortunes = [
        "🧩 오늘의 에러는 내일의 힌트가 된다.",
        "💥 버그? 걱정 마, 네가 성장 중이라는 증거야!",
        "📈 실패는 흔들릴 뿐, 멈춘 게 아니다.",
        "😎 코드가 꼬였다고 네 실력도 꼬인 건 아냐."
    ];
    const index = Math.floor(Math.random() * fortunes.length);
    return () => fortunes[index];
}

const fortune = debugFortune();
console.log(fortune());