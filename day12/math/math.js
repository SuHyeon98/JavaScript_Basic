Math.E; // 자연상수
Math.PI; // 파이
Math.random(); // 랜덤의 수
Math.ceil(5.1); // 올림
Math.floor(3.7); // 내림

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); // 최대값은 제외, 최소값은 포함
};
