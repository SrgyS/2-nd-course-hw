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

