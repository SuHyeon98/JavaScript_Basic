// object type
const americano = {
  name: '아메리카노',
  price: 3000,
  shot: 2,
  bean: '에티오피아',
};

console.log(americano.name);
console.log(americano.bean);
console.log(americano['shot']);
console.log(americano['price']);

// object 에 attribute 추가
americano.decaffein = false;
console.log(americano);

// object delete
delete americano.shot;

console.log(americano['shot']); // undefined
console.log(!americano['shot']); // ! : boolean
console.log(!!americano['shot']); // false

// object 존재 유무
console.log('price' in americano ? 'ok' : 'no');
