# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [🧾 code review](#-code-review)
   - [sub menu slide](#sub-menu-slide)
   - [transform animation](#transform-animation)
   - [card animation](#card-animation)
   - [input event](#input-event)
   - [반응형 side menu](#반응형-side-menu)

<br />

## 💻 프로젝트 소개

<div align="center">
   <img src="https://github.com/future9061/apple-display/assets/132829711/6b4ee03c-0cfb-4f45-96af-b4b102bfe705">

   https://future9061.github.io/apple-display/

   <p align="start">
   apple 클론 코딩을 해본 후 제품을 홍보하는 웹 사이트로
   사용자에게 좀 더 흥미를 이끌 수 있는 UI를 고민하다 만든 apple display입니다. <br />
   vanilla javascript로 만들었으며 이미지가 여러 방면에서 움직이는 시각적인 부분을 강조하였습니다.
   breackpoint는 1024px 480px 입니다.
   </p>
</div>

<br />

## 🧾 code review

<br />

#### sub menu slide

> 부모 li에 hover시 자식 ul이 top : -100% 에서 top : 100%로 아래로 슬라이드 한다.

```javascript


   //html
   <li> menu
      <ul class="sub-menu">
         <li> sub menu1 </ li>
         <li> sub menu2 </ li>
         <li> sub menu3 </ li>
      </ ul>
   </li>

   //css
   li{ position :  relative}

   .sub-menu{
   position : absolute;
   top:-100%
   transition : 0.5s
   }


   li:hover .sub-menu{
      top: 100%
   }


```

<br />

#### transform animation

> box1에 위치한 movebox가 스크롤이 생기는 동시에 box2로 이동하는 애니메이션 구현

1. box1과 box2의 Y축 거리를 구하기 위해 window에서 박스의 위치값을 구함
2. Rect에서 필요한 Y축만 비구조분해 할당으로 가져옴
3. box2 - box1 연산값을 value에 대입
4. 스크롤 값이 box1 의 y축만큼 있을 때 value만큼 이동!

```javascript
const box1 = document.queryselector(".box1");
const box2 = document.queryselector(".box2");
const moveBox = document.queryselector(".move-box");

let { y: box1Y } = firstImg.getBoundingClientRect();
let { y: box2Y } = secondImg.getBoundingClientRect();

const value = box2Y - box2Y;

window.addEventListener("scroll", function () {
  if (box1Y < scrollY) {
    moveBox.style.transform = `translateY(${value}px)`;
  }
  if (box2Y > scrollY) {
    moveBox.style.transform = `translateY(0px)`;
  }
});
```


<br />

#### card animation

> scroll을 내리면 3개의 카드가 순차적으로 사라짐

1. 마찬가지로 각 카드의 Y축을 구한다.
2. 카드의 스타일은 3단계로 변하기 때문에 Y축을 3으로 나눠 사용한다.
3. 스크롤이 각 카드의 y축 이상이 될 때 해당 카드에 scale과 opacity style을 적용한다.

```javascript
const card1 = document.querySelector(".card1"),
  card2 = document.querySelector(".card2");

let { y: card1Y } = card1.getBoundingClientRect();

let card1Value = Math.abs(card1Y / 4);

window.addEventListener("scroll", function () {
  if (scrollY > card1Value * 2) {
    card1.style.transform = "scale(0.9)";
    card1.style.opacity = "1";
  }
  if (scrollY > card1Value * 3) {
    card1.style.transform = "scale(0.8)";
    card1.style.opacity = "0.5";
  }
  if (scrollY > card1Value * 4) {
    card1.style.opacity = "0";
  }
  if (scrollY >= card1Value * 4.5) { //card2와 card1이 가깝기 때문에 y 값을 0.5씩 함
    card2.style.transform = "scale(0.9)";
    card2.style.opacity = "1";
  }
  if (scrollY >= card1Value * 5) {
    card2.style.transform = "scale(0.8)";
    card2.style.opacity = "0.5";
  }
  if (scrollY >= card1Value * 5.5) {
    card2.style.opacity = "0";
  }
});
```

<br />

#### input event

> input에 유저가 내용을 입력하면 마치 타이핑 하는 것처럼 div에 나타나게 한다.

```javascript
const Input = document.querySelector(".write_code input");
const showCode = document.querySelector(".write_code div");

Input.addEventListener("input", function () {
  const userText = Input.value;
  showCode.innerHTML = userText;
});
```

<br />

#### 반응형 side menu

> screen이 480px 됐을 시 나타나는 side menu

```javascript
const sideMenuBtn = document.querySelector(".burger_wrap");
const sideMenuWrap = document.querySelector(".side_menu_wrap");
const sideMenuCloseBtn = document.querySelector(".side_menu_li i");

sideMenuBtn.addEventListener("click", function () {
  sideMenuWrap.classList.add("side_menu_wrap-show");
});

sideMenuCloseBtn.addEventListener("click", function () {
  sideMenuWrap.classList.remove("side_menu_wrap-show");
});
```
