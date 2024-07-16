const megaCoffee = {
  아메리카노: {
    price: 2000,
    kcal: 5,
  },
  라떼: {
    price: 3000,
    kcal: 150,
  },
  아이스티: {
    price: 2500,
    kcal: 200,
  },
  초코: {
    price: 2500,
    kcal: 300,
  },
  녹차: {
    price: 2500,
    kcal: 300,
  },
  마카다르: {
    price: 3000,
    kcal: 400,
  },
};

const drink = window.prompt("무슨 음료?");
const dessert = window.prompt("무슨 쿠키?");

window.alert(`구매한 메뉴는 ${drink} , ${dessert} 
    총 가격 : ${megaCoffee[drink].price + megaCoffee[dessert].price} 
    총 칼로리 : ${megaCoffee[drink].kcal + megaCoffee[dessert].kcal}`);

console.log(
  `총 가격 : ${
    megaCoffee[drink].price + megaCoffee[dessert].price
  } / 총 칼로리 : ${megaCoffee[drink].kcal + megaCoffee[dessert].kcal}`
);
