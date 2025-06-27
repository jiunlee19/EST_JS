const heights = [150, 169, 185, 170];
const ghost = 167;

// ghost보다 키 큰 사람 출력
const bggrGhost = heights.filter(height => height>=ghost);
console.log(bggrGhost);

const words = ['hello','ghost','apple','grape','Lemon'];
// l자가 들어가있는 배열로 저장하시오. 대소문자 상관없이 출력.
const lWords = words.filter(word => word.toLowerCase().includes('l'));
console.log(lWords);