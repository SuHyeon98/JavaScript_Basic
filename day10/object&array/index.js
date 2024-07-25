const person = {
  name: "John",
  age: 27,
  city: "Incheon",
  address: { home: "bupyeong", zip: "1004" },
};

// object 안에 있는 value를 따로 분리해 변수 지정 가능
const { city: homeCity } = person; // 별명 붙히기
const { name, age } = person; // 오브젝트 디스트럭팅
const { home } = person.address; // object 안에 object를 꺼낼 때

const price = 4500;

const coffee = {
  name: "latte",
  price,
  shot: 2,
}; // key 이름과 변수 이름이 같다면 하나로 퉁치면 됨
