import { data } from '../import_export/mock.js';

// full_name 대소문자 바꾸기, money 달러를 엔화로 변경
// credit_card 앞에 4자리만 살리고 나머지는 ***로 변경
console.log(
  data.map(({ full_name, money, creadit_card }) => {
    const full = [...full_name]
      .map((v) => (v.toLowerCase() == v ? v.toUpperCase() : v.toLowerCase()))
      .join('');
    const newMoney = Number(money.replace('$', '')) * 154.51 + '¥';
    const credit = [...creadit_card].map((v, i) => (i < 4 ? v : '*')).join('');

    return { full_name: full, money: newMoney, creadit_card: credit };
  })
);
