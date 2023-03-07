function seasons() {
    let monthNumber = prompt('Введите номер месяца')
    
    if (isNaN(monthNumber) || monthNumber === '') alert ('Введено некорректное значение.')
    else if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) alert ('Зима')

    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) alert ('Весна')

    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) alert ('Лето')

    else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) alert ('Осень')
           
    else 
        alert('Нет месяца с таким номером')
    }

    function memory() {
        let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']

        fruits = fruits.sort(() => Math.random() - 0.5)
        alert(fruits.join(', '))
        let answer1 = prompt('Чему равнялся первый элемент массива?')
        let answer2 = prompt('Чему равнялся последний элемент массива?')

        if (answer1.toLowerCase() == fruits[0].toLowerCase() && answer2.toLowerCase() == fruits[fruits.length - 1].toLowerCase())
        alert('Поздравляю! У вас отличная память!')
        else if (answer1.toLowerCase() == fruits[0].toLowerCase() || answer2.toLowerCase() == fruits[fruits.length - 1].toLowerCase())
        alert('Вы были близки к победе!')
        else alert('Ответ неверный')
    }

