## 문제 1: 변수와 연산자 기초

```scss
// 다음 코드의 컴파일 결과를 예측하세요
$base-size: 16px;
$multiplier: 1.5;
$columns: 12;

.container {
    font-size: $base-size * $multiplier;
    width: 1200px / $columns;
    margin: (20px / 2) + 5px;
}
```

-   font-size: 24px;
-   width: 100px;
-   margin: 15px;

## 문제 2: Scope 이해하기

```scss
// 각 .box의 color 값을 예측하세요
$color: blue;

.box1 {
    color: $color;
}

.wrapper {
    $color: red;

    .box2 {
        color: $color;
    }
}

.box3 {
    color: $color;
}
```

-   box1, box3: blue
-   box2: red

## 문제 3: 리스트와 인덱스

```scss
// nth() 함수를 사용한 결과를 예측하세요
$colors: red, green, blue, yellow, orange;
$sizes: 10px 20px 30px 40px; // 공백으로 구분된 리스트

.element {
    color: nth($colors, 3);
    background: nth($colors, -1);
    padding: nth($sizes, 2);
    margin: nth($sizes, 1) nth($sizes, 4);
}
```

-   color:blue;
-   background: orange;
-   padding: 20px;
-   margin: 10px 40px;

## 문제 4: 단위 연산과 타입

```scss
// 다음 연산의 결과를 예측해보세요.
100px + 50px;      // ?
100px + 5rem;      // ?
100px * 2;         // ?
100px * 2px;       // ?
100% - 30px;       // ?
(100px / 20px);    // ?
```

-   150px
-   Error :
-   200px
-   Error
-   calc(100%-30px)
-   5

## 문제 5: 변수 타입과 !global

```scss
// .result의 각 속성값을 예측하세요
$number: 100;
$unit-number: 50px;
$color: #333;
$string: "hello";

.container {
    $number: 200 !global;
    $local-var: 300px;

    .inner {
        $unit-number: 75px;
    }
}

.result {
    content: $string;
    width: $number * 1px;
    height: $unit-number;
    color: $color;
    // margin: $local-var;  // 이 줄의 주석을 제거하면?
}
```

-   content:'hello';
-   width: 200px; - !global;
-   height: 50px;
-   color: #333;
-   $local-var: error

## 문제 6: 문자열과 연산

```scss
// 각 속성의 컴파일 결과를 예측하세요
$prefix: "btn";
$size: 20;
$unit: "px";

.button {
    class-name: $prefix + $size;
    width: #{$size}#{$unit};
    height: #{$size * 2}px;
    margin: $size + $unit;
}
```

-   class-name: "btn20";
-   width: 20px;
-   hieght: 40px;
-   margin: "20px";

## 7. JS 함수에서 매개변수 사용하는 이유는?

매개변수 값에 따라 동작을 다르게 할 수 있고(유연성), 재사용할 수 있고,중복 코드를 줄일 수 있기에 사용한다.
