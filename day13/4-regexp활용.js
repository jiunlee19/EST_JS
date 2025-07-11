// 활용
// 1. 해시태그 추출하기
let post = "#개발 강의는 역시 #위니브! #오르미 6기 #최고 #개발자 #프론트엔드";
let hashtagPattern = /#[가-힣\w]+/g;
// 1. 변하지 않는 값(#)
// 2. 뒤에 오는 것([가-힣\w])
// 해쉬태그: 영어, 숫자, 한글, 밑줄 = 한글([가-힣]) + 단어 패턴(\w)
// 3. +

let hashtags = post.match(hashtagPattern);
console.log(hashtags);
//['#개발', '#위니브', '#오르미', '#최고', '#개발자', '#프론트엔드']

// # 없애고 싶으면, 순회(map) 돌려서 replace
let cleanHashtags = hashtags.map((tag) => tag.replace("#", ""));
console.log(cleanHashtags);

// 2. 여러 개의 공백을 하나로 줄이기
let spaceText = "        Hello World      Hello   weniv";
let spacePattern = /\s+/g; // 공백을 검색하는 정규표현식
console.log(spaceText.match(spacePattern));
console.log(spaceText.replace(spacePattern, " "));
// console.log(spaceText.replace(spacePattern, " ").trim());
// 양 앞뒤 공백까지 제거

// 3. 전화번호 포맷 검증
// 010-1234-5678 => {2,3}-{3,4}-{4}
// 숫자만 들어가니까 => \d{2,3}-\d{3,4}-\d{4}
// 패턴이 정확하니까? 시작(^)과 끝($) 정해줌 => ^\d{2,3}-\d{3,4}-\d{4}$
const numberPatter = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(numberPatter.test("010-1111-2222")); //true
console.log(numberPatter.test("02-1111-2222")); //true
console.log(numberPatter.test("070-1111-22221")); // false

// 4. email 형식
// 형식 => 아이디@url.com
// 아이디 => 영문자, 숫자, 밑줄, 6자 이상 => [a-zA-Z0-9_]{6,}
// 도메인url => 영문자, 밑줄,하이픈, 숫자, 3자 이상, 마침표 포함(co.kr) => [a-zA-Z0-9-]{2,}\.
//마침표(\.)
// 최상위 도메인(.kr, .com, .org, .info) => [a-z]{2,4}
// 정확한 형식 표현(/^$/) => /^$/
// /^[a-zA-Z0-9_]{6,}@([a-zA-Z0-9-]{2,}\.)+[a-z]{2,4}$/
const emailPattern = /^[a-zA-Z0-9_]{6,}@([a-zA-Z0-9-]{2,}\.)+[a-z]{2,4}$/;
console.log(emailPattern.test("test123@weniv.com"));
console.log(emailPattern.test("test#123@weniv.co.kr"));
console.log(emailPattern.test("test123@weniv.co.kr"));
console.log(emailPattern.test("test123@test-url.co.kr"));
