// Создайте функцию concatStrings, которая принимает две строки и использует метод concat для объединения этих строк.
// Функция должна вернуть новую строку, представляющую собой результат объединения.
//
// function concatString(str1, str2) {
//     return console.log(str1.concat(str2))
// }
//
//
//
// // Среднее задание (expression function):
// // Напишите выражение функции, которое использует метод replaceAll для замены всех вхождений подстроки в строке.
// // Подстрока и заменитель должны быть переданы в аргументах функции.
//
// function replace(string, item, replace) {
//     return console.log((string).replaceAll(item, replace));
// }
//
//
//
//
// // Создайте функцию stringToLowerCase, которая принимает строку и использует метод toLowerCase для преобразования всех символов в нижний регистр.
// // Функция должна вернуть полученную строку.
//
// function stringToLowerCase(upper) {
//     return console.log(upper.toLowerCase())
// }
//
// // Среднее задание (expression function):
// // Напишите выражение функции, которое принимает строку и подстроку, а затем использует метод includes для определения, содержит ли строка данную подстроку.
// // Функция должна вернуть логическое значение (true или false).
//
// function searchItem(obj, item) {
//     return console.log(obj.includes(item));
// }
//
// //Легкое задание (arrow function):
// // Создайте стрелочную функцию getIndexOf, которая принимает строку и подстроку, а затем использует метод indexOf для
// // определения индекса первого вхождения подстроки в строку. Функция должна вернуть этот индекс.
//
// const getIndexOf = (array, item) => {
//     if (array.indexOf(item) > 0) {
//         return console.log('Индекс массива равен: ' + array.indexOf(item));
//     } else {
//         return console.log('В масиве нет такого элемента')
//     }
// }
//
// // Создайте функцию splitString, которая принимает строку и использует метод split для разделения строки на массив слов
// // (предполагая, что слова разделены пробелами). Функция должна вернуть полученный массив.
//
//
// // я тут добавил separation  чтоб самим довать разделители
// function splitString(string, separation) {
//     return console.log(string.split(separation))
// }
//
//
// // Напишите выражение функции, которое принимает строку и использует метод slice для извлечения подстроки, начиная с определенного
// // индекса и заканчивая другим индексом. Индексы должны быть переданы в аргументах функции.
//
// function getSlice(obj, start, end) {
//     return console.log(obj.slice(start,end));
// }
//
// // Напишите функцию convertToString, которая принимает число и использует метод toString для преобразования числа в строку. Функция должна вернуть полученную строку.
// const convertToString = (number) => console.log(number.toString());
//
// // Создайте выражение функции, которое принимает строку, содержащую число с десятичными знаками, и использует метод parseFloat
// // для преобразования строки в число с плавающей запятой.
// const consoleParseFloat = (str) => console.log(parseFloat(str));
// let numberss = '12323.45'
//
//
// // Напишите стрелочную функцию sumNumbers, которая принимает два числа и использует оператор + для их сложения. Функция должна вернуть результат в виде числа
// const sumNumbers = (num1, num2) => console.log(num1 + num2);
//
//
// // Создайте функцию getFixedNumber, которая принимает число и использует метод toFixed для форматирования числа с двумя знаками после запятой.
// // Функция должна вернуть полученную строку.
//
// const getFixedNumber = (number) => console.log((number).toFixed(2));
//
// // Напишите выражение функции, которое принимает строку, содержащую число, и использует метод parseInt для преобразования строки в целое число.
// const getNumber = (string) => console.log(parseInt(string));
//
// //Создайте функцию addNumbers, которая принимает два числа и использует оператор + для их сложения. Функция должна вернуть результат в виде числа.
// const addNumbers = (num1, num2) => console.log(num1 + num2)
//
// // Задания для массивов:
//
// // Создайте массив fruits с несколькими разными фруктами. Используйте метод push, чтобы добавить новый фрукт в конец массива.
// // Затем используйте метод pop, чтобы удалить последний фрукт из массива. Выведите получившийся массив в консоль.
//
// let fruits = ['Mango', 'Melon', 'Banana'];
// fruits.push('Strawberry', 'Peach');
// fruits.pop();
// // console.log(fruits);
//
// // Создайте массив numbers с числами. Используйте методы slice и concat для создания нового массива, который содержит только четные числа из исходного массива.
// // Затем используйте метод join для объединения этих чисел в строку, разделенную запятыми. Выведите получившуюся строку в консоль.
//
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let copyArr = numbers.slice();
// let array  =  copyArr.filter((elem) => {if(elem % 2 === 0) return  true;});
// let joinArray =   array.join(',')
// console.log(joinArray)
//
// // Создайте массив colors с несколькими цветами. Используйте метод unshift, чтобы добавить новый цвет в начало массива.
// // Затем используйте метод shift, чтобы удалить первый цвет из массива. Выведите получившийся массив в консоль.
//
// let colors = ['red', 'green', 'black'];
// colors.unshift('blue', 'yellow');
// colors.shift()
// // console.log(colors)
//
//
//
// // Создайте два массива: firstArray и secondArray. Используйте метод concat для объединения их в один массив mergedArray.
// // Затем используйте метод includes для проверки, содержит ли mergedArray определенное значение. Выведите результат в консоль.
//
// const firstArray = [1,2,3,4,5];
// const secondArray = [6,7,8,9,10];
// const mergedArray = firstArray.concat(secondArray);
// const findItem = mergedArray.includes(11);
// // console.log(findItem)
//
//
//
// // Создайте массив animals с несколькими животными. Используйте метод push для добавления нового животного в конец массива.
// // Затем используйте метод indexOf для определения индекса нового животного в массиве.
//
// const animals = ['dog', 'mouse', 'cat'];
// animals.push('parrot')
// const getIndexAnimals = animals.indexOf('parrot');
// // console.log(getIndexAnimals)
//
//
//
// // Создайте массив numbers с числами. Используйте метод slice для создания нового массива, который содержит только первые два элемента из исходного массива.
// // Затем используйте метод reverse, чтобы перевернуть порядок элементов в новом массиве. Наконец, используйте метод toString для преобразования массива в строку и выведите результат в консоль.
//
// const numberS = [1,2,3,4,5];
// const strRevCopy = numberS.slice(0,2).reverse().toString();
// // console.log(strRevCopy)
//
// // Создайте массив fruits с несколькими фруктами. Используйте метод unshift для добавления нового фрукта в начало массива.
// // Затем используйте метод shift для удаления первого фрукта из массива. Выведите получившийся массив в консоль.
//
// const fruitS = ['melon', 'peach', 'apple'];
// fruitS.unshift('banana', 'cucumber');
// fruitS.shift();
// console.log(fruitS);
//
// //Создайте два массива: firstArray и secondArray, каждый из которых содержит несколько чисел. Используйте метод flat для объединения этих массивов в один.
// // Затем используйте метод join для создания строки, в которой числа разделены запятыми. Выведите получившуюся строку в консоль.
//
// const arrayFirst = [1,2,3 ,[4,5,6]];
// const arrayResultJoin = arrayFirst.flat(1).join(',');
// // console.log(arrayResultJoin)
//
//
// // ДОП ЗАДАНИЯ:

// // Сложное задание (declaration function):
// // Создайте функцию calculateAverage, которая принимает массив чисел и использует цикл для вычисления среднего значения всех чисел в массиве.
// // Верните полученное среднее значение.
//
//
// function calculateAverage (array)  {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result += array[i]
//     }
//     return result / array.length
//
// }
//
// let array = [1,2,3,4,5]
// console.log(calculateAverage(array))
//
// // Сложное задание (expression function):
// // Напишите выражение функции, которое принимает строку, содержащую числа, разделенные запятыми, и использует цикл для разделения чисел, а затем преобразования
// // каждой строки в целое число с использованием parseInt. Верните массив преобразованных чисел.
//
// function getNumber(string) {
//     return  string.split(',').map((item) => {
//         return parseInt(item)
//     })
// }
// let numbers = '1,2,3,4,5,6'
// console.log(getNumber(numbers))
//
// // Сложное задание:
// // Создайте функцию reverseWordsInSentence, которая принимает строку, представляющую предложение, и возвращает новую строку, в которой слова перевернуты в обратном порядке.
// // Используйте метод split для разделения предложения на слова, метод reverse для переворачивания порядка слов и метод join для объединения слов обратно в строку.
//
// const reverseWordsInSentence = (string) => string.split(' ').reverse().join(' ').toLowerCase();
// let string = 'Hello world ';
// console.log(reverseWordsInSentence(string))
//
// // Сложное задание:
// // Создайте функцию filterUniqueNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа из исходного массива.
// // Используйте метод indexOf и цикл для выполнения этой задачи.
//
// function findUniqueNumbers (array) {
//     return array.filter((item, index) => index === array.indexOf(item))
// }
//
// let numbers1 = [1,2,2,3,4,5,6,1];
// console.log(findUniqueNumbers(numbers1))

// Сложное задание (declaration function):
// Создайте функцию findUniqueWords, которая принимает строку и возвращает массив уникальных слов (без повторений) в этой строке, игнорируя регистр букв.
// В данном случае, вы можете использовать объект для отслеживания уникальных слов.

function findUniqueWords(array) {
    let newArray = array.toLowerCase().split(" ");
    let uniqueWorlds = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === uniqueWorlds) {
            newArray[i]
        }
    }

}


const world = 'Hello world world'
console.log(findUniqueWords(world))
