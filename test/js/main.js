// // Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.
// const num = 10;
// const str = 'hello';
// const boolean = true;
// console.log(num, str,boolean )
//
// // Преобразуйте строку в число и наоборот. Выведите результат в консоль.
//
// let stringNum = '1';
// console.log(+stringNum)
//
// //  Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль
// const numArray = [1,2,3,4,5];
// for (let elem of numArray) {
//     console.log(elem)
// }

// Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

// const obj = {
//     name: 'Azim',
//     age: 24,
//     city: 'Bishkek'
// }
//
// console.log(Object.values(obj))

// // Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.
//
// let isPrime = +prompt('Введите число')
//
// if (isPrime % 2 === 0 ) {
//     alert('Это четное число ')
// } else {
//     alert('Это нечетное число')
// }

// // 6) Используя цикл, выведите числа от 1 до 10 в консоль.
//
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// // 7) Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль -
//
//
// function world() {
//     console.log('Hello world')
// }
//
// const worldd = () => {
//     console.log('Hello world')
//
// }
//
// const worlddd = function () {
//     console.log('Hello world')
//
// }
//
// world()
// worldd()
// worlddd()

// // 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой
//
// const promise = new Promise((onResolve, onReject) => {
//     if (Math.random() > 0.5) {
//         setTimeout(() => {
//             onReject('False')
//         }, 1000)
//     } else {
//         setTimeout(() => {
//             onResolve('True')
//         }, 1000)
//     }
//
// })

// // Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.
// function getAverage(array) {
//    const total = array.reduce((num, cur) => {
//          return  cur + num
//     })
//
//     return total / array.length
// }
//
// let num = [1,2,3]
// console.log(getAverage(num))

// // Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.
// function getUpperElem(array){
//    return  array.map(item => item.toUpperCase())
// }
//
// let array = ['sjfajf', 'jadfj', 'hello'];
// console.log(getUpperElem(array))

// // 3) Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив объектов с полями "имя"
// // и "возраст", отсортированный по возрастанию возраста.
//
// function getSortAge(array) {
//     return  array.sort(function (a, b) {
//         if (a.age > b.age) {
//             return 1;
//         }
//         if (a.age < b.age) {
//             return -1;
//         }
//         return 0;
//     });
// }

//  Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.
// // function findUniqueNumbers (array) {
// //     return array.filter((item, index) => index === array.indexOf(item))
// // }

//Напишите функцию, которая принимает массив объектов и сортирует их по полю "имя" в алфавитном порядке.

function getSortName(array) {
    return  array.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
}

// //  Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
//
// function getAverage(array) {
//    return array.filter((item) => {
//        return item % 2 === 0
//    })
// }
//
// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(getAverage(array))

// // 7) Напишите функцию, которая принимает массив объектов с полями "имя" и "зарплата"и возвращает новый массив объектов, содержащий
// // только тех сотрудников, чья зарплата больше 50000.
// function getBigSalary(array) {
//     return array.filter((item) => {
//         return item.salary > 50000
//     })
// }
//
let salary = [
    { name: "azim", salary: 21000 },
    { name: "erika", salary: 57000 },
    { name: "nuray", salary: 65000 },
    { name: "begus", salary: 30000 }

];

console.log(getSortName(salary))
//
// console.log(getBigSalary(salary))

// // 8) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше 10 и меньше 20.
// function getNewArray(array) {
//     return array.filter((item) => item > 10 && item < 20)
// }

// // 9) Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые длиннее 5 символов.
//
// function getBigLength(array) {
//     return array.filter((item) => item.length > 5)
// }

// // 10) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше среднего арифметического значения.
// function getAverageBig(array) {
//     const total = array.reduce((num, cur) => {
//          return  cur + num
//     })
//
//     let  average = total / array.length
//
//     return array.filter((item) => item > average)
// }
// let number = [2,10,3,5]
// console.log(getAverageBig(number))


// 11) Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых значение свойства "completed" равно true.
function  fn(array) {
    return array.filter((item) => {
        return item.completed === true
    })
}















