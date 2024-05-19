/*
Задание:
Создать функцию конвертации валют, принимающую три параметра:
    Сумма для конвертации
    Исходная валюта
    Целевая валюта


Пример работы функции:
Примерно $1000 рублей к долларам вернет $30.

Обработка ошибок:
Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.

Логика функции:
В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
Если курс конвертации для заданной пары валют отсутствует, возвращается null.

Расширение функциональности:
Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
Протестируйте функцию с различными входными данными.
*/


// -------------------------------------------------------
// -------------------------------------------------------

// Приводим все валюты к рублю и по курсу рубля переводим в нужную валюту
// function converter(sum, starCurrency, endCurrecy) {
//     starCurrency = starCurrency.toUpperCase();
//     endCurrecy = endCurrecy.toUpperCase();

//     if (starCurrency === 'RUB') {
//         return rubToCurrency(sum, endCurrecy)
//     } else {
//         return rubToCurrency(currencyToRub(sum, starCurrency), endCurrecy)
//     }
// }

// function currencyToRub (sum, currency) {
//     switch(true) {
//         case currency === 'RUB':
//             return sum * 1;
//         case currency === 'USD':
//             return sum * 33.3;
//         case currency === 'EUR':
//             return sum * 50;
//         case currency === 'JPY':
//             return sum * 10;
//         default:
//             return null;
//     }
// }

// function rubToCurrency (sum, currency) {
    // switch(true) {
    //     case currency === 'RUB':
    //         return sum * 1;
    //     case currency === 'USD':
    //         return sum * 0.03;
    //     case currency === 'EUR':
    //         return sum * 0.02;
    //     case currency === 'JPY':
    //         return sum * 0.1;
    //     default:
    //         return null;
    // }
// }

// console.log(converter(1000,'RUB','USD'))

// -------------------------------------------------------
// -------------------------------------------------------


console.log(currencyConvert(3,'jpy','usd'))


function currencyConvert(sum, fromCurrency, toCurrency) {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    if (rate(fromCurrency, toCurrency)) {
        return sum * rate(fromCurrency, toCurrency)
    }
    else {
        return null
    }
}

function rate(fromCurrency, toCurrency) {
    if (fromCurrency === 'RUB') {
        switch(true) {
            case toCurrency === 'RUB':
                return 1;
            case toCurrency === 'USD':
                return 0.03;
            case toCurrency === 'EUR':
                return 0.02;
            case toCurrency === 'JPY':
                return 0.1;
            default:
                return null;
        }
    } else if (fromCurrency === 'USD') {
        switch(true) {
            case toCurrency === 'RUB':
                return 33.3;
            case toCurrency === 'USD':
                return 1;
            case toCurrency === 'EUR':
                return 0.98;
            case toCurrency === 'JPY':
                return 3;
            default:
                return null;
        }
    } else if (fromCurrency === 'EUR') {
        switch(true) {
            case toCurrency === 'RUB':
                return 50;
            case toCurrency === 'USD':
                return 1.02;
            case toCurrency === 'EUR':
                return 1;
            case toCurrency === 'JPY':
                return 4;
            default:
                return null;
        }
    } else if (fromCurrency === 'JPY') {
        switch(true) {
            case toCurrency === 'RUB':
                return 10;
            case toCurrency === 'USD':
                return 0.33;
            case toCurrency === 'EUR':
                return 0.25;
            case toCurrency === 'JPY':
                return 1;
            default:
                return null;
        }
    } else {
        return null;
    }
}