const coffee = "americano";

// 포함 유무
coffee.includes("ri"); // true

// 번지수 확인 : 없으면 -1
coffee.indexOf("r"); // 3번째

// 값 변환 ("변하는 값", "변한 값")
coffee.replace("a", "z"); // zmericano

// 해당 값으로 시작하는 지 여부
coffee.startsWith("ameri"); // true

// 해당 값으로 끝나는 지 여부
coffee.endsWith("cano"); // true

// 자르기 ("시작", "끝-1")
coffee.slice(0, 5); // ameri

// 대문자
coffee.toUpperCase(); // AMERICANO

// 소문자
coffee.toLowerCase(); // americano

// 해당 값 기준으로 배열화(type array)
coffee.split("i"); // {"amer", "cano"}

// 해당 값 만큼 반복
coffee.repeat(3); // americanoamericanoamericano
