//Задание 1
//Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функция должна возвращать целое число, в зависимости от callback это может быть сумма всех чисел массива, произведение. Функции, вычисляющие произведение и сумму чисел массива, также необходимо реализовать.

const arr = [6, 2, 3.3, 3, 5]
const arrTest = [8.5, 2, -5, 5]

const sum =(arr) => Math.round(arr.reduce((acc, num) => acc + num, 0))
//{
//    let sum = 0
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]    
//    }
//    return sum
//  }

const mult = (arr) => Math.round(arr.reduce((acc, num) => acc * num, 1))
//  {
//    let mult = 1
//    for (let i = 0; i < arr.length; i++) {
//           mult *= arr[i]    
//        }
//        return mult
//  }
//  console.log(sum(arr))
//  console.log(mult(arr))

function getResult(arr, callback) {
  let result = callback(arr)
  return result
}

console.log(getResult(arr, sum))
console.log(getResult(arr, mult))
console.log(getResult(arrTest, sum))
console.log(getResult(arrTest, mult))

//Задание 2
//Дан массив объектов:

//const users = [
//	{name: 'Jon', age: 22},
//	{name: 'Richard', age: 18},
//	{name: 'Anton', age: 32},
//	{name: 'Lida', age: 23},
//	{name: 'Bob', age: 44}
//];
//Необходимо отсортировать элементы массива в порядке увеличения возраста.


const users = [
    	{name: 'Jon', age: 22},
    	{name: 'Richard', age: 18},
    	{name: 'Anton', age: 32},
    	{name: 'Lida', age: 23},
    	{name: 'Bob', age: 44}
    ];
   const compareUserAge = (a, b) => { 
        if (a.age > b.age) return 1;
        if (a.age < b.age) return -1;
        return 0;
    }
    const getSortedArrayObj = (arr) => {
        return  arr.sort(compareUserAge)
      }
      console.log(getSortedArrayObj(users))

//Задание 3
//Создайте функцию each, которая может производить любые манипуляции над переданным массивом в зависимости от переданной callback-функции. Реализуйте несколько callback-функций, которые будут делать следующее:

//Переворачивать массив:
//const arr = [1, '4', 9, 'two'];
//each(arr, reversArr); // ['two', 9, '4', 1]
//Преобразовывать все элементы к числу; если элемент получился NaN, то удалять его:
//const arr = [1, '4', false, 9, 'two'];
//each(arr, toNumberArr); // [1, 4, 0, 9]

const arr3 = [1, '4', false, 9, 'two', null, 'apple']

function each(arr, callback) {
    return callback(arr)
}

const reversArr = (arr) => arr.reverse()

const toNumberArr = (arr) =>{
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (!isNaN(num)) {
        result.push(num);
        }
    }
    return result;
}

console.log(each(arr3, reversArr))
console.log(each(arr3, toNumberArr))

//Задание 4
//Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

currentDate = new Date()

const showDate = (time, span) => {
    const interval = setInterval(() => console.log(currentDate), 1000 * span) 
    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, time * 1000)   
}
showDate(30, 3)

//Пример вызова
//Задание 5
//У нас есть код, имитирующий телефонный звонок:

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback(talk)
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
//talk();     

//Сейчас, если его запустить, последовательность будет 
//'Звоню!'
//, 
//'Разговор'
//, 
//'Идут гудки…'
// , но разговор всегда начинается после гудков, поэтому вам нужно исправить данный код так, чтобы выводилась верная последовательность:

//'Звоню!'
//,
//'Идут гудки…'
//, 
//'Разговор'

//Добавлять новые setTimout и setInterval нельзя, также нельзя удалять существующий setTimout, но можно менять код внутри его.