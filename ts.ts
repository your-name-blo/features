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
    if(i===n) continue prime;
  }
}
console.log(i) // 0, 1, 2
