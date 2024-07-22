// f(x) => f(g(x)) 합성함수 | callback function
const test = (X) => {
  console.log("코리아");
  X();
  console.log("아이티!");
};

const ice = () => {
  console.log("아이스크림");
};

console.log(ice);

// cook recipe program
const cook = (recipe) => {
  console.log("요리 준비");
  recipe();
  console.log("요리 완료");
};

const kimchiSoup = () => {
  console.log("김치, 파, 고기 준비");
  console.log("물 준비");
  console.log("고추장 준비");
};

cook(kimchiSoup);
cook(() => {
  console.log("탕후루");
  console.log("마라탕");
  console.log("요아정");
});
