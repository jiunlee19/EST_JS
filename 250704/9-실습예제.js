//1. 1초에 한 번씩 hello 찍기
const sayHello = setInterval(()=>{console.log('hello')},1000);
setTimeout(()=>{
    clearTimeout(sayHello);
} ,3000);
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());
// 2. 현재시각 3초에 한번씩 시간보여주기
// setInterval(()=>{
//     console.log(new Date().toLocaleTimeString());
// },3000)

// 3. 0.5초 마다 카운트 증가 (출력: count 1 -> count2 -> count 3)
let i=0;
// setInterval(()=>{
//     console.log(i++);
// },500);

// 4. 1초마다 배열에 있는 것을 순서대로 출력
// -> 
const news = ['코딩수업 마지막날','Javascript 최고','그동안 즐거웠다','끝까지 버티기'];
let idx =0;
// const newsPrint = setInterval(()=>{
//     console.log(news[idx++ % news.length]);
// },1000);

// 5. 1초마다 1-5까지 출력한 후에 멈추기 -> count 변수 감시
let num=1;
const count = setInterval(()=>{
    console.log(num++);
    if(num===6) clearInterval(count);;
},1000);