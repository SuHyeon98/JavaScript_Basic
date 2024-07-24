//object
const starbucks = [
  { name: "아메리카노", price: 4500, kcal: 1 },
  { name: "카페라떼", price: 5500, kcal: 180 },
  { name: "카페모카", price: 6000, kcal: 290 },
  { name: "프라푸치노", price: 6000, kcal: 145 },
  { name: "자바칩프라푸치노", price: 5500, kcal: 340 },
];

// map : 새롭게 바꿈
// 모든 커피 가격 +1000
const upPrice = starbucks.map((x) => {
  x.price += 1000;
  return x;
});
console.log(upPrice);

// 프라푸치노의 할인률 30% 적용
const sale = starbucks.map((x) => {
  x.price = x.name.includes("프라푸치노") ? x.price * 0.7 : x.price; //
  return x;
});

console.log(sale);

// kcal가 200 보다 작으면 1000원 할인 높으면 1000원 추가
const starbucksKcal = starbucks.map((x) => {
  x.price = x.kcal < 200 ? x.price - 1000 : x.price + 1000;
  return x;
});

console.log(starbucksKcal);

// 모든 메뉴 이름 앞에 제로 붙이고 kcal 0
const zero = starbucks.map((x) => {
  x.name = "제로 " + x.name;
  x.kcal = 0;
  return x;
});

// filter : 걸러주기
// 프라푸치노만 남기기
const name1 = starbucks.filter((x) => x.name.includes("프라푸치노"));
console.log(name1);

// 가격 5500원 이하만 출력
const price1 = starbucks.filter((x) => x.price <= 5500);
console.log(price1);

// 가격 5000보다 비싸고 kcal 200 이하인 것
const priceKcal = starbucks.filter((x) => x.price > 5000 && x.kcal <= 200);
console.log(priceKcal);

// 이름에 라떼와 프라푸치노가 들어가고 가격이 6000원 미만인 것
const lattePrice = starbucks.filter(
  (x) =>
    (x.name.includes("라떼") || x.name.includes("프라푸치노")) && x.price < 6000
);
console.log(lattePrice);
