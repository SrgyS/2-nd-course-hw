//Задание 1
//Дан массив: 
//[1, 5, 4, 10, 0, 3]
//Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
//После вывода значения 10 в консоль цикл должен прекратить свою работу

const arr = [1, 5, 4, 10, 0, 3]
for (let num of arr) {
    console.log(num)
    if (num === 10) break;
}

//Задание 2
//Дан массив: 
//[1, 5, 4, 10, 0, 3]
//Найдите позицию числа 4 в этом массиве.

const arr2 = [1, 5, 4, 10, 0, 3]
console.log(`Индекс числа 4: ${arr2.indexOf(4)}`)

//Задание 3
//Дан массив чисел: 
//[1, 3, 5, 10, 20]
//С помощью метода 
//join
// выведите элементы массива через пробел (пустую строку ' ').

const arr3 = [1, 3, 5, 10, 20] 
console.log(arr3.join(' '))

//Задание 4
//С помощью вложенных циклов создайте многомерный массив вида: 
//[[1, 1, 1], [1, 1, 1], [1, 1, 1]]

const arr4 = [];
for (let i = 0; i < 3; i++) {
  arr4[i] = [];
  for (let j = 0; j < 3; j++) {
    arr4[i][j] = 1;
  }
}
console.log(arr4);


//Задание 5
//Дан массив: 
//[1, 1, 1]
//Добавьте в конец массива значения 2, 2, 2.

const arr5 = [1, 1, 1]
arr5.push(2, 2, 2)
console.log(arr5)

//Задание 6
//Дан массив: 
//[9, 8, 7, 'a', 6, 5]
//С помощью метода 
//sort
// отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

const arr6 = [9, 8, 7, 'a', 6, 5]
arr6.sort().pop()
console.log(arr6)

//Задание 7
//Дан массив: 
//[9, 8, 7, 6, 5]
//Пользователь с клавиатуры вводит число от 1 до 10 (использовать 
//prompt()
//). Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

const arr7 = [9, 8, 7, 6, 5]
const num = Number(prompt('Введите число от 1 до 10'))

if (arr7.includes(num)) alert (`Введённое число содержится в массиве`)
else alert (`Введённое число в массиве отсутствует`)

//Задание 8
//Дана строка: 
//'abcdef'
//Необходимо, чтобы программа вывела в консоль 
//'fedcba'

const str = 'abcdef'
console.log(str.split('').reverse().join(''))

//Задание 9
//Дан массив: 
//[[1, 2, 3,],[4, 5, 6]]
//Выведите в консоль массив вида: 
//[1, 2, 3, 4, 5, 6]

const arr9 = [[1, 2, 3,], [4, 5, 6]]
console.log(arr9[0].concat(arr9[1]))
console.log(arr9.flat())

//Задание 10
//Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла 
//for
// и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

//Следующий элемент массива можно получить с помощью индекса: 
//i + 1
//. Обратите внимание, что у последнего элемента нет следующего.

const arr10 = [1, 2, 3, 4, 5, 7]
    for (let i = 0; i < arr10.length - 1; i++) {
        const sum = arr10[i] + arr10[i + 1]
        console.log(sum)
    }

//Задание 11
//Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
//Math.random()
// в диапазоне от 0 до 10.

//В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будет два массива: исходный массив и массив с четными значениями.

const arr11 = []
const arrEven = []

for (let i = 0; i < 10; i++) {
    arr11[i] = Math.round(Math.random() * 10)
    if (arr11[i] % 2 === 0) 
    arrEven.push(arr11[i])
}
console.log(arr11, arrEven) 

//Задание 12
//Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
//Math.random()
// в диапазоне от 1 до 10.

//Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

//Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.

const arr12 = []

for (let i = 0; i < 6; i++) {
    arr12[i] = Math.round(Math.random() * 10) 
}

const average = arr12.reduce((acc, int) => acc + int, 0) / arr12.length

console.log(arr12)
console.log(`Среднее арифметическое равно: ${average}`)