// map: Создайте функцию, которая принимает массив чисел и возвращает новый массив, где каждое число увеличено на 10.
function task_1() {
    function getArray(array) {
        return array.map((elem) => elem * 10)
    }

    let a = [1,2,3,4,5];
    console.log(getArray(a))

}

// filter: Создайте функцию, которая принимает массив слов и возвращает новый массив,
// содержащий только слова, длина которых больше 5 символов.
function task_2() {
    const arr_Len_More_5sym = (array) => {
        return array.filter((elem) => {
            if (elem.length > 5) {
                return true;
            }
        })
    }
    const name = ['123', '123456', '12323243'];
    console.log(arr_Len_More_5sym(name))
    }




// forEach: Создайте функцию, которая принимает массив чисел и выводит в консоль квадрат каждого числа
function task_3() {
    // const getSquareArr = (array) => array.map((elem) => elem * elem);
    //
    // let array = [1,2,3,4,5];
    // console.log(getSquareArr(array));

    function getSquareArr(array) {
        return  array.forEach((elem) => console.log(elem * elem))
    }
    let array = [1,2,3,4,5];
    getSquareArr(array)
}

// // forEach - проходиться по массиву как for
//
// // const forEachArr = [1,2,3,4,5];
// //
// // forEachArr.forEach((element , index, curArr) => {
// //     console.log(({
// //         element,
// //         index,
// //         curArr
// //     }))
// // });
// //

// reduce: Создайте функцию, которая принимает массив чисел и возвращает сумму всех чисел в массиве.
function task_4() {
    function sumArray(array) {
        return array.reduce((prev, cure) => {
            return prev + cure
        }, 0)
    }
    let array = [1,2,3,4,5,6,7,8,9,10];
    console.log(sumArray(array));
}

// some: Создайте функцию, которая проверяет, есть ли в массиве чисел хотя бы одно четное число.
// Функция должна возвращать true или false

function task_5() {
    const findEvenInArr = (array) => array.some(elem => elem % 2 === 0);
    let array = [1,2,3,4,5,6,7,8,9,10];
    console.log(findEvenInArr(array))

}

// every: Создайте функцию, которая проверяет, все ли числа в массиве положительные. Функция должна возвращать true или false.
function task_6() {
    const checkEverIsPosit = (array) => array.every((item) => item >= 0);
    let array = [1,2,3,4,5,6,7,8,-9,10];
    console.log(checkEverIsPosit(array))
}

// find: Создайте функцию, которая находит первое четное число в массиве чисел и возвращает его. Если в массиве нет четных чисел, функция должна вернуть null.
function task_7() {
    const findEvenFirst = (array) => array.find((item) => item % 2 === 0 ) || null;
    let array = [1,2,3,5];
    console.log(findEvenFirst(array))
}

// map: Создайте функцию, которая принимает массив строк и возвращает новый массив, где каждая строка преобразована в верхний регистр
function task_8() {
    const getArrayUpper = (array) => array.map((item) => item[0].toUpperCase() + item.slice(1))
    let array = ['nan', 'xex', 'jeck'];
    console.log(getArrayUpper(array))
}

// filter: Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
 function task_9() {
     const getPositiveArray = (array) => {
          return array.filter((item) => {
             if (item > 0) {
                 return true;
             }
         })

     };
     const number = [1,2,-3,4 ,-5,7];
     console.log(getPositiveArray(number))

}

// forEach: Создайте функцию, которая принимает массив имён и выводит в консоль приветствие для каждого имени, например,
// "Привет, [имя]!"

function task_10() {
    const getNameArray = (array) => {
        array.forEach((item) => {
            return console.log(`Привет ${item}!`)
        })
    }

    const name = ['Azim', 'Erika', 'Nuray'];
    getNameArray(name)
}
 // reduce: Создайте функцию, которая принимает массив чисел и возвращает произведение всех чисел в массиве.

function task_11() {
    function multiplArray(array) {
        return array.reduce((prev, cure) => {
            return prev * cure
        }, 1);
    }
    const number = [1,2,3,4];
    console.log(multiplArray(number))

}

// some: Создайте функцию, которая проверяет, есть ли в массиве строк хотя бы одна строка длиной больше 10 символов.
// Функция должна возвращать true или false.

function task_12() {
    const checkMore10Length = (array) => array.some((item) => (item.length > 10));
    const str = ['skfj', 'kkkk', 'kjjkkkjkkjkk', '7891010'];
    console.log(checkMore10Length(str))

}


// find: Создайте функцию, которая находит первое число в массиве чисел, которое делится на 7 без остатка, и возвращает это число.
// Если в массиве нет таких чисел, функция должна вернуть null.

function task_13() {
    const findShareSeven = (array) => array.find((item) => item % 7 === 0) || null;
    const numbers = [1,7,3,4,5];
    console.log(findShareSeven(numbers))
}












