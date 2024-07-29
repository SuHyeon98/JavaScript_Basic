// 만약 50분부터 00분 까지는 쉬는시간이라고 출력
const now = new Date();

const isWeekDay = now.getDay() != 0 && now.getDay() != 6;
const isClassTime = [19, 20].some((v) => v == now.getHours());
const isBreakTime = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59].some(
  (v) => v == now.getMinutes()
);
const isVaild = isWeekDay && isClassTime && isBreakTime;
const msg = isVaild ? "쉬는시간입니다 🤗" : "수업시간입니다 😎";
alert(msg);
