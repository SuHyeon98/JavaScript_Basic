// document html을 조작하는 타입/ html + js 중간다리

// document.createElement() 태그
// 태그 만들기
const div = document.createElement("div");

// 태그 찾기
const box = document.querySelector(".box");

// html 에 태그 생성
div.innerHTML = "<button>버튼</button>";
div.style.backgroundColor = "red";
