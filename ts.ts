// sleep
await new Promise(resolve => setTimeout(resolve, 100000));

/* *** Object.seal() и Object.preventExtensions() *** */
/*
  Всем доброго дня! Недавно я делал вот этот пост (https://t.me/frontendnoteschannel/1637) на тему метода объектов .freeze, который по сути делает целевой объект неизменяемым.

  Но что делать если мы хотим например запретить только изменять свойства или только добавлять / удалять? Собственно вот эти методы из заголовка - то что нам нужно.

  Если совсем кратко:
  .seal() - запрещает добавлять / удалять но разрешает изменять значение свойства
  .preventExtensions() - запрещает только добавлять но разрешает все остальные действия

  Так-же есть методы для проверки:
  Object.isSealed()
  Object.isExtensible()
  Оба возвращают true или false

  Пример на основе метода .seal():
*/
const obj = {animal: 'cat'};
Object.isSealed(obj) //false
Object.seal(obj);
Object.isSealed(obj) //true;


/* 
  метки для циклов для continue, break
*/
let n = 3;

prime:
for(let i = 0; i < n; i++){
  for(let j = 0; j <= n; j++){
    if(i===j) continue prime;
  }
}
console.log(i) // 0, 1, 2


/* ***
[].sort()
*** */
/* desc в конце null */
var numbers = [4, 2, null, 1, 3];
numbers.sort(function(a, b) {
  if (a === null) return 1
   if( b === null) return -1
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
})
console.log(numbers); // [4, 3, 2, 1, null]

/* desc в начале null */
var numbers = [4, 2, null, 1, 3];
numbers.sort(function(a, b) {
  if (a === null) return -1
   if( b === null) return 1
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
})
console.log(numbers); // [null, 4, 3, 2, 1]

/* asc в начале null */
var numbers = [4, 2, 1, 3];
numbers.sort(function(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
})
console.log(numbers); // [1, 2, 3, 4]

// chrome text edition
document.designMode = 'on';
