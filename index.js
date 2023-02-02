let password = 'пароль';
let answer = prompt('Введите пароль');
password === answer ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

let c = 0;
c > 0 && c < 10 ? alert('Верно') : alert('Неверно');

let d = 0;
let e = 129;
d > 100 || e > 100 ? alert('Верно') : alert('Неверно');

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 2:
        console.log('Зима');
        break;
    case 4:
        console.log('Весна');
        break;
    case 7:
        console.log('Лето');
        break;
    case 10:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    case 5:
        console.log('Весна');
        break;
    case 8:
        console.log('Лето');
        break;
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

let n = Number(prompt('Пожалуйста, введите любое число'));
Number.isFinite(n) ? alert(n) : alert('NaN');
n % 2 === 0 ? alert("Число четное") : alert('Число нечетное');

let clientOS = Number (0 || 1);
0 === 0 ? alert('Установите версию приложения для iOS по ссылке'): alert('Установите версию приложения для Android по ссылке');
