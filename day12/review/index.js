import { data } from "../review/dummy.js";

// 1. credit_card 뒤의 네자리는 남기고 나머지 "*"
// file_name 확장자만 남김
// money -> 반올림 첫 번째 자리
const newData = data.map(({ credit_card, file_name, money }) => {
  const card = [...credit_card]
    .map((v, i) => (i < credit_card.length - 4 ? "*" : v))
    .join("");
  const [_, extension] = file_name.split(".");
  const rounds = "$" + Math.round(Number(money.replace("$", "")) / 10) * 10;

  return {
    credit_card: card,
    file_name: extension,
    money: rounds,
  };
});

console.log(newData);

// 2. 위도(latitude), 경도(longitude)  -> 확인
// 유럽 : 위도[10~70] 경도[-30~60]
// 아시아 : 위도[10~80] 경도[60~180]
// 아메리카 : 위도[-60~60] 경도 [-170~-30]
// 그 외는 don't no

data.map(({ longitude, latitude }) => {
  const continent = [...longitude, ...latitude].map(() => {
    (longitude > 10 || longitude <= 70) && (latitude > -30 || latitude <= 60)
      ? "유럽"
      : (longitude > 10 || longitude <= 80) &&
        (latitude > 60 || latitude <= 180)
      ? "아시아"
      : (longitude > -60 || longitude <= 60) &&
        (latitude > -170 || latitude <= -30)
      ? "아메리카"
      : "dont no";
  });
  return continent;
});
