# 🎇목차

1. [💻 프로젝트 소개](#-프로젝트-소개)
2. [🧾 code review](#-code-review)
   - [sub menu slide](#sub-menu-slide)
   - [transform animation](#transform-animation)
   - [card animation](#card-animation)
4. [📢 Project review](#-project-review)

<br />

## 💻프로젝트 소개

apple 클론 코딩을 해본 후 제품을 홍보하는 웹 사이트로서 
사용자에게 좀 더 흥미를 이끌 수 있는 UI를 고민하다 만든 apple display입니다. <br />
vanila javascript로 만들었으며 이미지가 여러 방면에서 움직이는 시각적인 부분을 강조하였습니다. 

<br />

## 🧾code review

#### transform animation
> box1에 위치한 movebox가 스크롤이 생기는 동시에 box2로 이동하는 애니메이션 구현
1. box1과 box2의 Y축 거리를 구하기 위해 window에서 박스의 위치값을 구함
2. Rect에서 필요한 Y축만 비구조분해 할당으로 가져옴
3. box2 - box1 연산값을 value에 대입
4. 스크롤 값이 box1 의 y축만큼 있을 때 value만큼 이동!
 

```javascript

const box1 = document.queryselector('.box1');
const box2 = document.queryselector('.box2');
const moveBox = document.queryselector('.move-box');

let { y: box1Y } = firstImg.getBoundingClientRect();
let { y: box2Y } = secondImg.getBoundingClientRect();

const value = box2Y - box2Y;

window.addEventListener('scroll',function(){
  if( box1Y < scroll ){
    moveBox.style.transform = `translateY(${value}px)`;
  }
  if( box2Y > scroll ){
     moveBox.style.transform = `translateY(0px)`;
  }
})

```
반응형에도 적절히 y축 이동한다.
아쉬운점은 javascript가 실시간 렌더링이 안되다 보니 화면 크기를 줄인 후 새로 고침을 해야 한다

<br />

#### card animation
>scroll을 내리면 3개의 카드가 순차적으로 사라짐
1. 마찬가지로 각 카드의 Y축을 구한다.
2. 스크롤이 각 카드의 y축 이상이 될 때 해당 카드에 scale과 opacity style을 적용한다.


```javascript

const card1 = document.querySelector(".card1"),
      card2 = document.querySelector(".card2"),
      card3 = document.querySelector(".card3");

window.addEventListener("scroll", function () {
  if (scrollY > 2138) {
    card1.style.transform = "scale(0.9)";
    card1.style.opacity = "1";
  }
  if (scrollY > 2238) {
    card1.style.transform = "scale(0.8)";
    card1.style.opacity = "0.5";
  }
  if (scrollY > 2338) {
    card1.style.opacity = "0";
  }
  //카드 2
  if (scrollY > 2642) {
    card2.style.transform = "scale(0.9)";
    card2.style.opacity = "1";
  }
  if (scrollY > 2742) {
    card2.style.transform = "scale(0.8)";
    card2.style.opacity = "0.5";
  }
  if (scrollY > 2842) {
    card2.style.opacity = "0";
  }
});


```
