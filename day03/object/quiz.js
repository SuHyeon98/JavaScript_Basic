// 1번
const title = window.prompt('책 제목');
const price = window.prompt('책 가격');
const publisher = window.prompt('책 출판사');

const book = { title, price, publisher };

//   const book {
//   title : title,
//   price : price,
//   publisher : publisher
// }

// const book = {}
// book.title = title;
// book.price = price;
// book.publisher = publisher;

console.log(book);

// 2번
const ei = window.prompt('e에요? i에요?');
const ns = window.prompt('n에요? s에요?');
const tf = window.prompt('t에요? f에요?');
const jp = window.prompt('j에요? p에요?');

const mbti = {
  e: '외향적',
  i: '내향적',
  s: '감각적',
  n: '상상적',
  t: '이성적',
  f: '감성적',
  j: '계획적',
  p: '즉흥적',
};

window.alert(
  `당신의 성격은 ${mbti[ei]} ${mbti[ns]} ${mbti[tf]} ${mbti[jp]} 입니다`
);
console.log(mbti);

// 3번
// 태어난 년도 입력하면 띠 나오는 프로그램
const year = Number(window.prompt('태어난 년도') % 12);
const zodiac = {
  0: '원숭이띠',
  1: '닭띠',
  2: '개띠',
  3: '돼지띠',
  4: '쥐띠',
  5: '소띠',
  6: '호랑이띠',
  7: '토끼띠',
  8: '용띠',
  9: '뱀띠',
  10: '말띠',
  11: '양띠',
};

window.alert(`당신은 ${zodiac[year]} 입니다`);
