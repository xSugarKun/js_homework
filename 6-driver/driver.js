console.log('Домашнее задание блока 6 - Водитель');
console.log('========================')

const haveDriverID = true;
const age = 18;
const isDrink = false;

// ternary operator
console.log(`Может ли водитель сесть за руль?:
${haveDriverID && age >= 18 && !isDrink ? 'Может' : 'Не может'}`)



// if-else
// console.log('Может ли водитель сесть за руль?');
// if (haveDriverID && age >= 18 && !isDrink) {
//     console.log('Может!');
// }
// else {
//     console.log('Нет!');
// };

console.log('========================')