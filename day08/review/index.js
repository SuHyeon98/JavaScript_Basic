// ["americano", "latte", "mint", "choco", "valina"]
const menu = ["americano", "latte", "mint", "choco", "valina"];

// 1번
menu.forEach((x) => {
  console.log(x.length <= 5 ? x.toLowerCase() : x.toUpperCase());
});

// 2번
menu.some((x) => {
  return x.length % 2 == 0 && x.includes("n");
});
