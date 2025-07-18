// 모듈: 코드를 특정 기능이나 목적에 따라 분리하여 관리할 수 있는 방법
// 코드를 기능 단위로 쪼개어 관리할 수 있도록 도와주는게 바로 '모듈 시스템'

// 모듈의역사:

// 1. script: 렌더링 순서에 민감함. 의존성 관리 어려움.

// 2. ES6 모듈(ESM)
// 2-1. import와 export 키워드를 사용하여 모듈을 정의하고 사용
// type="module" 속성을 추가
// <script type="module"></script>;
// 2-2. 강제 use strict 적용
// 2-3. HTML 문서가 완전히 로드되고 파싱되기 전에 실행
// => 그래서 script를 body태그 젤 아래에 작성하는 이유
