// 정규표현식
// markdown 파싱 작업을 할 때도 정규표현식 사용
// 1. 기본 구조
// 2. 패턴과 플래그
// 2. 사용 패턴

// 1. 기본 구조 - /패턴/플래그, RegExp()
// 1-1. literal 방식
const reg1 = /abc/g;
// = "abc"를 전역검색하겠다.
// "a","b","c" 찾는거 아님!
console.log(reg1.test("abc abc abc"));
// test(): (false, true): 검색 실행 메서드?

console.log(reg1.lastIndex);
console.log(reg1.test("abc abb abb")); // false
// => true false false => 마지막이 false라서, false 반환 !!!

console.log(reg1.test("abb abb abb")); // false
reg1.lastIndex = 0; // 매칭에 성공하면 lastIndex 초기화, 실패하면 그대로 유지
console.log(reg1.lastIndex);
console.log(reg1.test("abc abb abb"));
// lastIndex: 다음 검색을 시작할 위치를 기억하는 속성, 이전 매칭이 끝난 다음 위치
// test의 특징인가요 g의 특징인가요???
// ???조사 필요

// 1-2. 생성자 함수 사용
// const reg2 = new RegExp('패턴',"플래그");
const reg2 = new RegExp("abc", "g");
console.log("abc Abc ABC abc".match(reg2)); // ['abc','abc']
// match되는 모든 요소를 배열에 넣어 출력됨
// 대소문자 구분

const reg3 = new RegExp("abc", "gi");
console.log("abc Abc ABC abc".match(reg3)); // ['abc','Abc','ABC','abc']
// match되는 모든 요소를 배열에 넣어 출력됨
// i - 대소문자 구분하지 않겠다.

// 2-2. 플래그 => 혼합해서 사용 가능
// g(global): 전역 검색,
// i(ignore case): 대소문자 구분 없이 검색,
// m(multi-line): 여러 줄 검색
const text = `abc
Abc
ABC
abc`;

const reg4 = /^abc/gim;
console.log(text.match(reg4)); //['abc', 'Abc', 'ABC', 'abc']
// 줄 바꿈 허용 - 시작과 끝이 a,c에서 a,c/A,c/ A,C/ a,c 이다???

// 메서드
// 1. test()
let pattern1 = /abc/g;
console.log(pattern1.test("ABC")); // fasle
console.log(pattern1.test("abc")); // true

// 2. exec(): 매칭 결과 상세 정보
// 상세 정보?
// Match - match 되는 요소
// exec() - 원본 문자열, 매칭된 문자열, 매칭된 위치 등 상세 정보를 가져올 수 있다.
pattern1 = /hello/g;
console.log(pattern1.exec("hello world")); // (1)
console.log(pattern1.exec("hello world hello weniv")); // (2)
// 시작index 변경됨.
// (index:0 -> index:12)
// g - 매칭되는게 있다고 종료되지 않고, 끝까지 매칭되는거 찾고 출력하기 때문에 (마지막 인덱스 기준)
// g가 없을 때는 매칭되는게 있으면 바로 종료되는 결과하고 차이가 있다. (첫번째 인덱스 기준)

// 3. match(): 일치하는 모든 결과를 배열로 반환
const text2 = "abc ABC Abc ABC";
console.log(text2.match(/abc/gi));
console.log(text2.match(/hello/gi)); // null

// 4. search(): 일치하는 첫번째 인덱스 반환
console.log(text2.search(/ABC/g)); // 4
console.log(text2.search(/xyz/)); // -1 (일치하는 값이 없으면 -1 반환)

// 5. replace(): 일치하는 부분을 지정한 문자열로 치환
console.log("Hello World Hello Weniv".replace(/Hello/g, "👋")); // 👋 World 👋 Weniv

// 패턴: 찾고자 하는 문자열의 규칙
// 1. 기본 문자 패턴
// a-z 소문자,
// A-Z 대문자,
// 가-힣 한글 음절,
// 0-9 0부터 9까지 숫자,

const text3 = `abc ABC ㄱ 가나다 1234 !@#`;
// 소문자 [a-z] => 문자 집합 정리
console.log(text3.match(/[a-z]/g));
// ['a', 'b', 'c']
// 한 글자 한 글자가 매칭되어 출력됨

console.log(text3.match(/a-z/g));
// 문자열 'a-z'를 찾는다.
// 주의! 대괄호로 꼭 묶어줄 것

// 대문자: [A-Z]
console.log(text3.match(/[A-Z]/g));

// 한글: [가-힣], 한글 음절 범위
console.log(text3.match(/[가-힣]/g));
// 완성된 음절만 인식
// ㄱ X, 가 O

// 숫자: [0-9]
console.log(text3.match(/[0-9]/g));

// 이스케이프 패턴
// \s, \b, \t, \d, \w
// \w: 단어 영문자 + 숫자 + (밑줄) [0-9a-zA-Z])
let testText = `abc ABC 가나다 1234 !@#_`;

console.log("모든 문자 (/./): ", testText.match(/./g));
// 모든 문자를 출력한다.(공백 포함)
// ['a', 'b', 'c', ' ', 'A', 'B', 'C', ' ', '가', '나', '다', ' ', '1', '2', '3', '4', ' ', '!', '@', '#', '_']

console.log("숫자(\\d/): ", testText.match(/\d/g));
// ['1', '2', '3', '4']

console.log("단어문자(\\w): ", testText.match(/\w/g)); // 영문자, 숫자, 밑줄(_)
console.log("공백문자(\\s): ", testText.match(/\s/g)); // 스페이스, 탭, 줄바꿈
console.log("단어 경계(\\b): ", testText.match(/\b/g)); // 단어-비단어 경계 (공백 개수 * 2)

// 대문자로 나타내면 반대의 의미를 가집니다.
// /./는 .split()메서드와 같은 기능인건가요???
console.log("!단어 경계(\\B): ", testText.match(/\B/g));
// 이거 정체를 모르겠음???

// 위치 문자 패턴
// . , ^, $, [], [^], [-]
// (.) 임의의 한 문자

let exampleText2 = "Example \nexample";

// (^) 문자열의 시작
console.log(exampleText2.match(/^E/g)); // ['E']

console.log(exampleText2.match(/^e/g)); // null
console.log(exampleText2.match(/^e/gm)); // ['e']

// 문자열의 끝($)
console.log(exampleText2.match(/e$/)); // ['e', index: 15, input: 'Example \nexample', groups: undefined]
console.log(exampleText2.match(/e$/m)); // 위랑 같은 내용 출력
console.log("Example\nexample".match(/e$/m)); //['e', index: 6, input: 'Example\nexample', groups: undefined]
console.log(exampleText2.match(/e$/g)); // ['e']

// [^ $] - ??? 나중에 배울 예정

// 수량 패턴
// ?, +, *, |
// {}

let repeatText = "abc aabbcc aaabbbccc aaaabbbbcccc";
// ?: 앞의 문자열이 0개이거나 1개인 경우
console.log(repeatText.match(/a?b/g));
// ['ab', 'ab', 'b', 'ab', 'b', 'b', 'ab', 'b', 'b', 'b']
// ab 조합 또는 b의 모음
// a는 물음표 앞이라 0개 또는 1개인 경우인 듯

// +: + 앞의 문자열이 1개 이상인 경우
console.log(repeatText.match(/a+b/g));
// ['ab', 'aab', 'aaab', 'aaaab']
// b 앞에 a가 1개 이상인 경우

// *: * 앞의 문자열이 0개 이상인 경우
console.log(repeatText.match(/a*b/g));
// ['ab', 'aab', 'b', 'aaab', 'b', 'b', 'aaaab', 'b', 'b', 'b']

// |: 또는
console.log(repeatText.match(/a{2}|b{2}/g));
// ['aa', 'bb', 'aa', 'bb', 'aa', 'aa', 'bb', 'bb']
// a가 2개 또는 b가 2개 반복되는 경우

// () 서브패턴: 문자열 조각(단어) 중 하나
// [] 문자집합이랑 조금 다름 => ???
let message = "I love cat and dog";
console.log(message.match(/(cat|dog)/g));
// ['cat', 'dog']

// []: 한음절 단위
console.log(message.match(/[cat|dog]/g));
// ['o', 'c', 'a', 't', 'a', 'd', 'd', 'o', 'g']

// ? <=> {n,m}
// ? === {0,1}

// + <=> {n,}
// + <=> {1,}

// * <=> {n}
// * <=> {0}

// 외우는 문법은 아님
