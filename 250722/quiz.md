### 문제 1: 버튼 스타일링 mixin 만들기

다음과 같은 버튼 스타일을 만드는 mixin을 작성하세요.

-   mixin 이름: `button-style`
-   매개변수: `$bg-color`, `$text-color`, `$padding`
-   적용할 스타일:
    -   background-color
    -   color
    -   padding
    -   border: none
    -   border-radius: 5px
    -   cursor: pointer

```scss
// 사용 모습
.btn-style1 {
    @include button-style(#007bff, white, 10px 20px);
}

.btn-style2 {
    @include button-style(#6c757d, white, 8px 16px);
}
```

-   정답

```scss
@mixin button-style($bg-color, $text-color, $padding) {
    background-color: $bg-color;
    color: $text-color;
    padding: $padding;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```

### 문제 2: 반응형 폰트 크기 mixin 만들기

다양한 화면 크기에 따라 폰트 크기가 변하는 mixin을 작성하세요.

**요구사항:**

-   mixin 이름: `responsive-font`
-   매개변수: `$mobile-size`, `$tablet-size`, `$desktop-size`
-   미디어 쿼리 브레이크포인트:
    -   모바일: 기본값 (별도 미디어쿼리 없음)
    -   태블릿: 768px 이상
    -   데스크톱: 1024px 이상

```scss
// 사용 모습
.title {
    @include responsive-font(18px, 24px, 32px);
}

.subtitle {
    @include responsive-font(14px, 18px, 22px);
}
```

-   정답

```scss
@mixin responsive-font($mobile-size, $tablet-size, $desktop-size) {
    font-size: $mobile-size;

    @media (min-width: 768px) {
        font-size: $table-size;
    }

    @media (min-width: 1024px) {
        font-size: $desktop-size;
    }
}
```
