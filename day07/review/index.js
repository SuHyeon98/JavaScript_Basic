// 1 번
const bigger = (x, y) => {
  return x > y ? x : y;
};
console.log(bigger(3, 6));

// 2번
const num = (x) => {
  return x % 2 ? "홀수" : "짝수";
};
console.log(num(2));

// 3번
const multiple = (x) => {
  return x % 2 ? x ** x : x * 2;
};
console.log(multiple(3));

// 4번
const leng = (x) => {
  return x.length > 6 ? "🥕" : "🍅";
};
console.log(leng("이거 완전 럭키비키잖아"));
