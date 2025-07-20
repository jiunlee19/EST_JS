1. 아래의 DOM 명령어 찾아보고, 정리해오기
# 📘 DOM 명령어 정리
## 1. 클래스 제어
### classList.add()
- 클래스 추가
```js
element.classList.add('active');
```
### classList.remove()
- 클래스 제거
```js
element.classList.remove('hidden');
```
### classList.contain()
- 해당 클래스가 있는지 확인 (true/false 반환)
```js
if(element.classList.contains('active'))
```
### classList.toggle()
클래스가 있으면 제거, 없으면 추가
```js
element.classList.toggle('on');
```
---
## 2. 요소의 크기/위치
### getBoundingClientRect()
- 요소의 크기와 화면 기준 좌표값을 반환  
```js
const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);
```
### offsetLeft / offsetTop
- 요소의 offset 부모 요소 기준 위치(px)
ex) 레이아웃 계산, 애니메이션 위치 조절 등에 사용
```js
console.log(element.offsetLeft);
console.log(element.offsetTop);
```
---
## 3. 속성 제어
### getAttribute
- 특정 속성 값을 가져옴
```js
const href = link.getAttribute('href'); // 예: 'https://example.com'
```
### setAttribute
- id, src, href, alt, title 등 모든 HTML 속성 설정
```js
element.setAttribute('target', 'value');
```
---
## 4. dataset 으로 접근하기
- 속성에 접근할 때 사용
- JS -> HTML ```data-속성이름```속성에 ```dataset.속성이름```으로 접근 가능
```html
<div id="user" data-id="1234" data-role="admin"></div>
```
```js
const user = document.getElementById('user');
console.log(user.dataset.id);    // '1234'
console.log(user.dataset.role);  // 'admin'
```