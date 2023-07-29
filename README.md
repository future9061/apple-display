# 🎇목차

1. [💻 프로젝트 소개](#-프로젝트-소개)
2. [🧾 code review](#-code-review)
   - [sub menu slide](#sub-menu-slide)
   - [transform animation](#transform-animation)
   - [card animation](#card-animation)
4. [📢 Project review](#-project-review)

<br>

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
아쉬운점은 javascript가 실시간 렌더링이 안되다 보니 화면 크기를 줄인 후 새로 고침을 해야 한다.
