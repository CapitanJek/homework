// Задание 1

let age = 23;
if (age >= 18) {
    console.log("Задание 1: ",'Совершеннолетний')
} else {
    console.log("Задание 1: ",'Несовершеннолетний')

}

// Задание 2

let isStudent = false;
if(isStudent === true) {
    console.log("Задание 2: ","Студент")
} else {
    console.log("Задание 2: ","Не студент")

}

// Задание 3
let num1 = 3;
let num2 = 2;
let result = num1 + num2;

console.log("Задание 3: ", result)

// Задание 4

let day = 6;
switch (day) {
    case 1: {
        console.log("Задание 4: ",'Monday')
    }
    break
    case 2: {
        console.log("Задание 4: ",'Tuesday')
    }
    break
    case 3: {
        console.log("Задание 4: ",'Wednesday');
    }
    break
    case 4: {
        console.log("Задание 4: ",'Thursday');
    }
    break
    case 5: {
        console.log("Задание 4: ",'Friday');
    }
    break
    case 6: {
        console.log("Задание 4: ",'Saturday');
    }
    break
    case 7: {
        console.log("Задание 4: ",'Sunday');
    }
    break
    default: {
        console.log("Задание 4: ",'Ошибка !!! Убедитесь, что правильно ввели день недели');
    }

}

// Задание 5

let temperature = 28;
if (temperature >= 29) {
    console.log("Задание 5: ", "Горячо")
} else if(temperature >= 20 && temperature <= 28) {
    console.log("Задание 5: ", 'Тепло')
} else if (temperature <= 19 && temperature >= 0) {
    console.log("Задание 5: ", 'Холодно')
} else if (temperature <= -1 && temperature >= -50) {
    console.log("Задание 5: ", 'Очень холодно')
} else {
    console.log("Задание 5: ", 'Введите корректные данные')
}


// Задание 6


let score = 0;
let total = (score >= 60 && score <= 100) ? "Задача 6: Сдал" :
    (score >= 0 && score <= 59) ? "Задача 6: Не сдал" :
        "Введите число от 0 до 100";

console.log(total);

// Задание 7

let num = 90;
if (num % 2 !== 0) {
    console.log("Задание 7: ",'Нечетное число')
} else {
    console.log("Задание 7: ",'Четное число')
}

// Задание 8

let language = 'React';
if (language === "JavaScript") {
    console.log("Задание 8: ","Поддерживается")
} else {
    console.log("Задание 8: ",'Не поддерживается')
}


// Задание 9

let userRole = 'admin';
if (userRole === 'admin') {
    console.log("Задание 9: ",'Доступ разрешен')
} else if (userRole === 'editor') {
    console.log("Задание 9: ",'Доступ ограничен')
} else if (userRole === 'viewer') {
    console.log("Задание 9: ",'Доступ запрещен')
} else {
    console.log("Задание 9: ",'Неправильный статус пользователя')
}

// Задание 10

let a = 12;
let b = 10;
let c = 1;

if (a > b && a > c) {
    console.log("Задание 10: ",`${a} - Самое большое число`)
} else if (b > a && b > c) {
    console.log("Задание 10: ",`${b} - Самое большое число`)
} else if (c > a && c > b) {
    console.log("Задание 10: ",`${c} - Самое большое число`)
} else if (a === b || a === c || b === c) {
    console.log("Задание 10: ",'Введите разные числа')
} else {
    console.log("Задание 10: ",'Неправильное значение')
}

// Задание 11

let fruit = 'яблоко';
if (fruit === 'яблоко') {
    console.log("Задание 11: ",'Красное')
} else if (fruit === 'банан') {
    console.log("Задание 11: ",'Желтый')
} else if (fruit === 'апельсин') {
    console.log("Задание 11: ",'Оранжевый')
} else {
    console.log("Задание 11: ",'Другой цвет')
}


// Задание 12

let income = 85000;
let earnings = (income >= 10000 && income <= 22000) ? 'Низкий доход' :
    (income >= 22001 && income <= 60000) ? 'Средний доход' :
        (income >= 60001) ? 'Высокий доход' : 'Мизерный доход';

console.log("Задание 12: ",earnings);


// Задание 13

const grade = 'A';
switch (grade) {
    case "A": {
        console.log("Задание 13: ", 'Excellent')
    }
    break
    case "B": {
        console.log("Задание 13: ", 'Good')
    }
    break
    case "C": {
        console.log("Задание 13: ", 'Satisfactory')
    }
    break
    case "D": {
        console.log("Задание 13: ", 'Bad')
    }
    break
    case "F": {
        console.log("Задание 13: ", 'Unsatisfactory')
    }
    break
    default: {
        console.log("Задание 13: ", 'Введите правильную оценку')
    }
}


// Задание 14

let password = 'ab34333cdf';
if (password.length >= 8) {
    console.log("Задание 14: ", 'Пароль надежный')
} else {
    console.log("Задание 14: ", 'Пароль слишком короткий')
}


// Задание 15

let x = 10;
let y = 10;

let larger = (x > y ) ? 'x больше y' :
                (y > x) ? 'y больше x' :
                    'x и y равны' ;

console.log("Задание 15: ", larger);



// Задание 16

let isRaining = false;
let weather = (isRaining === true) ? 'Идет дождь' : 'Дождя нет';
console.log("Задание 16: ", weather);



// Задание 17

let isLeapYear = true;
let season = (isLeapYear === true) ? 'Год високосный' : 'Год не високосный';
console.log("Задание 17: ", season);


// Задание 18

let userInput = '';
let check = (Boolean(userInput) === true) ? 'Строка не пуста' : 'Пустая строка';
console.log("Задание 18: ", check);


// Задание 19

let number = 0;
if (+number > 0) {
    console.log("Задание 19: ", 'Положительное')
} else if (+number < 0) {
    console.log("Задание 19: ", 'Отрицательное')
} else {
    console.log("Задание 19: ", 'Ноль')
}


// Задание 20

let dayOfWeek = 'Вт';
switch (dayOfWeek) {
    case "Пн": {
        console.log("Задание 20: ", 'Рабочий день')
    }
    break
    case "Вт": {
        console.log("Задание 20: ", 'Рабочий день')
    }
    break
    case "Ср": {
        console.log("Задание 20: ", 'Рабочий день')
    }
    break
    case "Чт": {
        console.log("Задание 20: ", 'Рабочий день')
    }
    break
    case "Пт": {
        console.log("Задание 20: ", 'Рабочий день')
    }
    break
    case "Сб": {
        console.log("Задание 20: ", 'Выходной')
    }
    break
    case "Вс": {
        console.log("Задание 20: ", 'Выходной')
    }
    break
    default: {
        console.log("Задание 20: ", 'Введите правильное день недели')
    }

}

// ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ

// Задача 1
// Последовательность простых чисел начинается так: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
//                                                  67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,

let testPrime = 283;

if (testPrime === 1) {
    console.log('Дополнительная задача 1: ', 'Это непростое число')
}  else if(testPrime === 2) {
    console.log('Дополнительная задача 1: ', 'Это простое число')
} else if (testPrime % 2 !== 0) {
    console.log('Дополнительная задача 1: ', 'Это простое число')
}else {
    console.log('Дополнительная задача 1: ', 'Это непростое число')
}


// Задача 2
//Задача с проверкой на палиндром: Напишите программу, которая проверяет, является ли заданная строка палиндромом.
// Палиндром - это строка, которая читается одинаково как с начала, так и с конца.



let isPalindrome = '1001';
isPalindrome = isPalindrome.toLowerCase();
let checkPalindrome = isPalindrome.split("").reverse().join('');

if (isPalindrome === checkPalindrome) {
    console.log('Дополнительная задача 2: ', 'Это палиндром')
} else {
    console.log('Дополнительная задача 2: ','Это не палиндром')
}




// Задача 3

//Задача с оценкой на экзамене: Создайте переменные examScore и homeworkScore и присвойте им оценки за экзамен и домашние задания. Если сумма
// баллов выше 90, выведите "A", если от 80 до 89 - "B", от 70 до 79 - "C", от 60 до 69 - "D", иначе - "F".


let examScore = 20;
let homeworkScore = 40;
let assessment = examScore + homeworkScore;
let assessmentResult = (assessment >= 90) ? 'A' :
        (assessment >= 80 && assessment <= 89) ? 'B' :
            (assessment >= 70 && assessment <= 79) ? 'C' :
                (assessment >= 60 && assessment <= 69) ? 'D' : 'F';

console.log('Дополнительная задача 3: ',assessmentResult);


// Задача 4
// Задача с банковским счетом: Создайте переменную balance и присвойте ей сумму на банковском счете. Создайте переменную
// withdrawal и присвойте ей сумму для снятия. Напишите условие, чтобы проверить, хватает ли денег на счете для снятия.
// Выведите сообщение "Средств достаточно" или "Недостаточно средств".

let balance = 30000;
let withdrawal = 2500;
let checkBalance = (withdrawal <= balance) ? 'Средств достаточно' : "Недостаточно средств";
console.log('Дополнительная задача 4: ', checkBalance);



// Задача 5
//Задача с определением сезона: Напишите программу, которая принимает на вход месяц (в виде числа от 1 до 12) и год (четыре цифры) и
// выводит текущий сезон (весна, лето, осень, зима) для данного месяца.

function task5 () {
    let monthSeason = prompt(`Введите месяц от 1 до 12: `);
    let numMont = +monthSeason;
    let result_season = (numMont <= 2 || numMont === 12) ? 'зима':
        (numMont <= 5) ? 'весна' :
            (numMont <= 8) ? 'лето' :
                (numMont <= 11) ? 'осень' : 'Введите число от 1 до 12';

    let year = prompt('Введите год');
    let checkYear = (year.length < 4 || year.length > 4 ) ? 'Нужно ввести четыре цифры ' :  `Сейчас ${year} год `;



    alert(result_season);
    alert(checkYear);

}





