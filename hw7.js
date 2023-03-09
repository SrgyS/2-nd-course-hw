//Задание 1
//Преобразуйте строку js в верхний регистр JS.

console.log('js'.toUpperCase())

//Задание 2
//Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

const arr = ['1', 'ready', 'filter', 'No filter', 'filteR for string']
const str = 'Filter'

function filterArr(arr, str) {
    const filteredArr = []
    arr.forEach((el) =>  {
        if (el.toLowerCase().startsWith(str.toLowerCase())) {
            filteredArr.push(el)
        }
    })
    return filteredArr
}

function filterArr2(arr, str) {
   const result = arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()))
   return result
}
console.log(filterArr(arr, str))
console.log(filterArr2(arr, str))

//Задание 3
//Округлите число 32.58884:

//До меньшего целого
//До большего целого
//До ближайшего целого

const int = 32.58884

console.log(`Округление числа ${int} до меньшего целого: ${Math.floor(32.58884)}`)
console.log(`Округление числа ${int} до большего целого: ${Math.ceil(32.58884)}`)
console.log(`Округление числа ${int} до ближайшего целого: ${Math.round(32.58884)}`)


//Задание 4
//Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

console.log(`Минимальное значение: ${Math.min(52, 53, 49, 77, 21, 32)}. Максимальное значение: ${Math.max(52, 53, 49, 77, 21, 32)}.`)

//Задание 5
//Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

const getRandomNum = ()=> {
    const min = 1
    const max = 10
    randomNum = Math.round(Math.random() * (max - min) + min)
    console.log(randomNum)
}    
getRandomNum()

//Задание 6
//Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

const inputNum = Number(prompt('Введите число'))

const getRandomArr = (inputNum) => {
    max = inputNum
    length = Math.floor(inputNum/2)
    let randomArr = []

    for (let i = 0; i < length; i++  ) { 
        randomArr[i] = Math.round(Math.random() * max);
    }
    console.log(randomArr)
}
getRandomArr(inputNum)

//Задание 7
//Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min)

console.log(getRandomInt(3, 7))
console.log(getRandomInt(10, 11))
console.log(getRandomInt(-5, 0))

//Задание 8
//Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

console.log(new Date())

//Задание 9
//Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

let currentDate = new Date()
let days73 = currentDate.setDate(currentDate.getDate() + 73)
let after73days = new Date(days73)

console.log(after73days)

//Задание 10
//Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:

//Дата: <число> <месяц на русском> <год> - это <день недели на русском>.

//Время: <часы>:<минуты>:<секунды>

//Время, которое будет выведено, также хранится в объекте Date.

const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
currentDate2 = new Date()

function writeDate(currentDate2) {
    let hours = currentDate2.getHours()
    let minutes = currentDate2.getMinutes()
    let seconds = currentDate2.getSeconds()

    if (minutes < 10) 
        minutes = '0' + minutes
    if (seconds < 10)
        seconds = '0' + seconds

    console.log(`Дата: ${currentDate2.getDate()} ${month[currentDate2.getMonth()]} ${currentDate2.getFullYear()} - это ${days[currentDate2.getDay()]}`)
    console.log('Время: ' + hours + ':' + minutes + ':' + seconds)
}
writeDate(currentDate2)