// arrow function 축약
const even = (x) => x % 2 == 0;
const isLength = (x) => x.length == 5;

// array forEach()
// quiz 1번
const icecream = ["mint", "choco", "banana"];
icecream.forEach((x) => console.log(x.toUpperCase()));

// some() == || , every() == &&
// quiz 2번
const result = icecream.some((x) => x.includes("a"));
console.log(result);

// quiz
const fruits = [
  "apple",
  "peach",
  "tomato",
  "plum",
  "pear",
  "durian",
  "grape",
  "lemon",
];

// 1번
const fourAndWordR = fruits.some((x) => x.length == 4 && x.includes("r"));
console.log(fourAndWordR);

// 2번
const oddAndWordP = fruits.some((x) => x.length % 2 && x.startsWith("p"));
console.log(oddAndWordP);

// 3번 모음으로 시작하는 단어가 있는가? - 합성함수
// 모음 a, e, i, o, u
const vowels = ["a", "e", "i", "o", "u"];
const gather = fruits.some((fruits) =>
  vowels.some((x) => fruits.startsWith(x))
);
console.log(gather);

// 4번 k, b, s 에서 하나라도 포함하는 단어가 있는가? - 합성함수
const kbs = ["k", "b", "s"];
const fruitsKbs = fruits.some((fruits) => kbs.some((x) => fruits.includes(x)));
console.log(fruitsKbs);

// 5번
// 뉴스기사를 가져와, 입력한 단어가 포함되는지 물어보는 코드
const newsList = `DONALD TRUMP
ELECTION 2024
REPUBLICAN CONVENTION
DEMOCRATIC CONVENTION
AP & ELECTIONS
POLITICS
Image
Homeland Security secretary names independent panel to review Trump assassination attempt
U.S. Homeland Security Secretary Alejandro Mayorkas has appointed a bipartisan, independent panel to review this month’s assassination attempt on former President Donald Trump, Officials said Sunday that the panel members will have extensive law enforcement and security experience to conduct a revie
10 hours ago`.split(" ");

const wordList = prompt("찾고 싶은 단어 입력").split(" ");

const resultNews = newsList.some((word) => wordList.some((x) => word == x));
alert(`해당 단어들은 ${resultNews ? "포함합니다" : "포함안합니다"}`);
