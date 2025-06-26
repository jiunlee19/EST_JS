// ko - 100, en = 80, math = 50
// 평균이 70점이상이면 합격, 단 한 과목이라도 60점 미만이면 불합격

const ko =100;
const en =80;
const math=50;
const avg = (ko+en+math)/3;
if(avg>=70){
    if(ko>=60 && en>=60 &&  math>=60) console.log('합격입니다.');
    else console.log('불합격입니다.');
}
else console.log('불합격입니다.');

//ver2.
if(ko<60 || en<60 || math<60) console.log('불합격입니다.');
else if(avg >= 70) console.log('합격입니다.');
else console.log('불합격입니다.');

