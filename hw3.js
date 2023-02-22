// Task1

let password = 'qwerty'
let userPassword = prompt('Введите пароль')
password === userPassword ? console.log('Пароль введен верно!') : console.log('Пароль введен неправильно!')

// Task2

let с = prompt('Введите число больше 0 и меньше 10')
с > 0 && с < 10 ? console.log('Верно') : console.log('Неверно')

// Task3

let d = prompt('Введите первое число')
let e = prompt('Введите второе число')

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно')

// Task 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Task5

let monthNumber = prompt('Введите номер месяца')

switch (monthNumber) {
    case '1' :
        console.log('Зима')
        break;

    case '2' :
        console.log('Зима')
        break;

    case '3' :
        console.log('Весна')
        break;

    case '4' :
        console.log('Весна')
        break;

    case '5' :
        console.log('Весна')
        break;

    case '6' :
        console.log('Лето')
        break;

    case '7' :
        console.log('Лето')
        break;

    case '8' :
        console.log('Лето')
        break;

    case '9' :
        console.log('Осень')
        break;

    case '10' :
        console.log('Осень')
        break;
    
    case '11' :
        console.log('Осень')
        break;
                
    case '12' :
        console.log('Зима')
        break;

    default: console.log('Нет месяца с таким номером')
        break;
}

// Task7

let num = prompt('Введите любое число')

if (isNaN(num)) { 
    console.log('Это не число')
  }
  else {
      num % 2 === 0 ? console.log('Число чётное') : console.log('Число нечетное')
  }

// Task8

let clientOS = prompt('Ведите 0 если у вас iOS, 1 если Android')

switch (clientOS) {
    case '0' : console.log('Установите версию приложения для iOS по ссылке.')        
        break;
    case '1' : console.log('Установите версию приложения для Android по ссылке.')        
        break;
    default: console.log('Введите 0 или 1')
        break;
}

// Task9

let clientOS = Number(prompt('Ведите 0 если у вас iOS, 1 если Android'))
let clientDeviceYear = Number(prompt('Введите год производства телефона'))

if (clientOS == 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке.')        
} 
else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке.')
} 
else if (clientOS === 0 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке.')
} 
else if (clientOS === 1 && clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке.') 
}
else {
    console.log('Введены некорректные данные')
}
