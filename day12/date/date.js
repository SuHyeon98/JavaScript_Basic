const now = new Date();

const year = now.getFullYear(); // 년도
const month = now.getMonth() + 1; // 월 : 0월부터 시작해서 1을 더해야 함
const date = now.getDate(); // 일
const hours = now.getHours(); // 시간
const minutes = now.getMinutes(); // 분
const seconds = now.getSeconds(); // 초
const day = now.getDay(); // 요일 : 미국 기준 0[일요일], 1[월요일] ... 6[토요일]

now.toLocaleString(); // 날짜와 시간 (미국 기준)
now.toLocaleDateString(); // 날짜 (미국 기준)
now.toLocaleTimeString(); // 시간 (미국 기준)
