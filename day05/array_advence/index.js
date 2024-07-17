// array 선언
const stocks = ["samsung", "kakao", "apple", "envidia"];

// 변형자 기능들
stocks.push("hybe"); // 뒤에 추가

stocks.pop(); // 뒤에서 하나 빼기

stocks.unshift("daewoo"); // 앞에서 넣기

stocks.shift(); // 앞으로 빼기

stocks.reverse(); // 배열 뒤집기

console.log(stocks);

// 접근자 기능들
console.log(stocks.indexOf("kakao")); // 있다면 번지수 찾기

stocks.includes("hybe"); // 존재 유무 찾기

// quiz
// 1번
const news = prompt("뉴스 기사 입력");
const word = prompt("찾고 싶은 단어");
alert(news.includes(word) ? "있음!" : "없음!");
console.log(news.includes(word) ? "있음!" : "없음!");

// alert(news.split(" ").includes(word) ? "있음" : "없음")
// 배열로 쪼갠 후 단어를 찾아 true false 구현

// 2번
alert(
  news.includes(word)
    ? `해당 단어는 ${news.indexOf(word)} 번째에 있습니다`
    : "없음!"
);
console.log(
  news.includes(word)
    ? `해당 단어는 ${news.indexOf(word)} 번째에 있습니다`
    : "없음!"
);

// alert(`${news.split(" ".indexOf(word))} 번째에 있습니다`) // 마찬가지
