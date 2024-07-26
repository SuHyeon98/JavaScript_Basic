// join : 배열을 문자열로 합침
const a = [...'hello'].join(); // "h,e,l,l,o"
const b = [...'hello'].join(''); // "hello"

// quiz
// "abstract algebra"
// "PrOgRaMmErs"
const [...word] = 'abstract algebra';
const word1 = word
  .map((x) =>
    [...'aA'].some((v) => v === x) ? v.toUpperCase() : v.toLowerCase()
  )
  .join('');
console.log(word1);
const abs = [...'abstract algebra'].map((x) => x.replace('a', 'A')).join('');
const pro = [...'PrOgAaMmErs']
  .map((x) => (x.toUpperCase() == x ? x.toLowerCase() : x))
  .map((v) => v.replace('a', 'A'))
  .join('');
console.log(abs);
console.log(pro);
