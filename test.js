// Пользователь:

// Возраст
// Наличие работы
// Деньги

// Нужно проверить может ли он купить новый MacBook за 2000$? 
// Он может брать не только свои деньги, но и взять кредит. 
// Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 
// 100$ если ему просто больше 24-х лет и 0 в ином случае. 
// Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.


const userAge = 24;
const userWork = true;
const userMoney = 1500;


function buyMac(age, work, money) {
    if (money >= 2000) {
        return 'Может купить за свои деньги.'
    }
    else if (money + creditMoney(age,work) >= 2000) {
        return 'Может купить за свои и кредитные деньги.'
    }
    else {
        return 'Покупатель не может позволить себе мак бук'
    }
}

function creditMoney(age,work) {
    if (age > 24 && work) {
        return 500;
    }
    else if (age > 24 && !work) {
        return 100;
    }
    else {
        return 0;
    }
}


console.log(buyMac(userAge, userWork, userMoney))
