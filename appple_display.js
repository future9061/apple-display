// 이미지가 Y축으로 이동하는 이벤트

const moveBox = document.querySelector(".move_box");
const firstImg = document.querySelector(".box2");
const secondImg = document.querySelector(".main_secstion2_img_wrap");

let { y: firstImgY } = firstImg.getBoundingClientRect(); // y 값은 지속적으로 바뀌기  때문에 let 으로 변경
let { y: secondImgY } = secondImg.getBoundingClientRect();
let value = secondImgY - firstImgY - 5;

window.addEventListener("scroll", function () {
  if (scrollY > firstImgY) {
    moveBox.style.transform = `translateY(${value}px)`;
  } else if (scrollY < secondImgY) {
    moveBox.style.transform = `translateY(-5px)`;
  }
});

//img가 X축으로 이동하는 이벤트

const humanImg = document.querySelector(".main_secstion2_img_animation");

window.addEventListener("scroll", function () {
  if (scrollY > secondImgY / 2) {
    humanImg.classList.add("main_secstion2_img_animation_show");
  }
  if (scrollY < secondImgY / 2) {
    humanImg.classList.remove("main_secstion2_img_animation_show");
  }
});

//카드 이벤트

const card1 = document.querySelector(".card1"),
  card2 = document.querySelector(".card2");

let { y: card1Y } = card1.getBoundingClientRect(),
  { y: card2Y } = card2.getBoundingClientRect();

let card1Value = card1Y / 3;
let card2Value = card2Y / 3;

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
    card2.style.transform = "scale(0.9)";
    card2.style.opacity = "1";
  }
  if (scrollY > card2Value * 4) {
    card2.style.transform = "scale(0.8)";
    card2.style.opacity = "0.5";
  }
});

//코드 타이핑 이벤트

const Input = document.querySelector(".main_section4 input");
const showCode = document.querySelector(".write_code div");

Input.addEventListener("input", function () {
  const userText = Input.value;
  showCode.innerHTML = userText;
});

//반응형 시 side menu 이벤트

let sideMenuBtn = document.querySelector(".burger_wrap"),
  sideMenuWrap = document.querySelector(".side_menu_wrap"),
  sideMenuCloseBtn = document.querySelector(".side_menu_li i");

sideMenuBtn.addEventListener("click", function () {
  sideMenuWrap.classList.add("side_menu_wrap_show");
});

sideMenuCloseBtn.addEventListener("click", function () {
  sideMenuWrap.classList.remove("side_menu_wrap_show");
});
