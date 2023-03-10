//Задание 1
//Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

function minNumber(a, b) {
    return (a - b) > 0 ? b : a
}
console.log(`Меньшее из 2-х чисел: ${minNumber(65, 120)}`)
console.log(`Меньшее из 2-х чисел: ${minNumber(45, -6)}`)

//Задание 2
//Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

const evenNumber = (num) => num % 2 == 0 ? console.log('Число чётное') : console.log('Число нечётное')

evenNumber(375)
evenNumber(24)

//Задание 3
//3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

//3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

// ---------------- 3.1 --------------

const num = Number(prompt('Введите число'))

const expNum = (num) => console.log(`Квадрат числа равен: ${num ** 2}`)

expNum(num)

// ---------------- 3.2 ----------------

const num2 = Number(prompt('Введите число'))

const expNum2 = (num2) => num2 ** 2

console.log(expNum2(num2))

//Задание 4
//Создайте функцию, которая:

//Спрашивает у пользователя, сколько ему лет.
//Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
//Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
//Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

const userAge = prompt('Введите ваш возраст')

const greeting = (userAge) => {
    if (userAge === '') 
    alert('Вы ничего не ввели.')

   else if (userAge >= 0 && userAge <= 12)
     alert('Привет, друг!')
        
    else if (userAge >=13) 
    alert('Добро пожаловать!')
        
    else alert('Вы ввели неправильное значение.') 
}

greeting(userAge)

//Задание 5
//Напишите функцию, которая на вход принимает 2 числа:

//Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
//isNaN() помогут.)
//Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
//Если оба параметра — числа, то вернуть произведение данных чисел.

const number1 = prompt('Введите первое число')
const number2 = prompt('Введите второе число')

const mult = (number1, number2) => 
      isNaN(number1) || isNaN(number2) || number1 === '' || number2 === '' ? 'одно или оба значения не являются числом' : number1 * number2

console.log(`Произведение введённых чисел равно: ${mult(number1, number2)}`)

//Задание 6
//Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
//'n в кубе равняется <получившееся значение>'
//. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.

//Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
//от 0 до 10
// включительно.

const userNum = prompt('Введите, пожалуйста, число n.')

const expCube = (userNum) => 
    isNaN(userNum) || userNum === '' ? 'Переданный параметр не является числом' : `n в кубе равняется: ${userNum ** 3}`

console.log(expCube(userNum))