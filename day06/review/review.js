// 1번
const angle = Number(prompt("각도"));
if (angle === 180) {
  alert("평각");
} else if (angle < 180 && angle > 90) {
  alert("둔각");
} else if (angle === 90) {
  alert("직각");
} else if (angle < 90 && angle > 0) {
  alert("예각");
} else {
  alert("error");
}

// 2번
const pw = prompt("비밀번호");
if (
  !pw.includes("!") &&
  !pw.includes("@") &&
  !pw.includes("#") &&
  !pw.includes("*")
) {
  alert("특수문자를 넣으세요");
} else if (!pw.startsWith("IT")) {
  alert("IT로 시작하세요");
} else if (pw.length <= 6) {
  alert("6글자보다 길어야 해요");
} else {
  alert("비밀번호 설정 완료!😊");
  console.log(`pw : ${pw}`);
}
