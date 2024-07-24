const products = [
  { name: "apple", price: 200 },
  { name: "banana", price: 300 },
  { name: "peach", price: 350 },
];

const tax = products.map((x) => {
  x.priceWithTax = x.price * 1.1;
  return x;
});

// quiz
const starbucks = [
  { name: "아메리카노", price: 4500, kcal: 1 },
  { name: "카페라떼", price: 5500, kcal: 180 },
  { name: "카페모카", price: 6000, kcal: 290 },
  { name: "프라푸치노", price: 6000, kcal: 145 },
  { name: "자바칩프라푸치노", price: 5500, kcal: 340 },
];

// 라떼 or 프라푸치노가 들어가면, hasMilk : true, hasMilk : false
const milk = starbucks.map((x) => {
  x.hasMilk = x.name.includes("라떼") || x.name.includes("프라푸치노");
  return x;
});
console.log(milk);
