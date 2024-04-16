console.log('Домашнее задание блока 4 - Навигатор')
console.log('========================')

let addressLat = 1;
let addressLong = 5;

let positionLat = 2;
let positionLong = -4;

let distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2)

console.log(`Считаем расстояние между [${addressLat}:${addressLong}] и [${positionLat}:${positionLong}]
Расстояние составляет ${distance}`);

console.log('========================')