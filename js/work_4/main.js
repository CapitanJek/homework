
//Задание 1:
// Напишите программу, которая находит и выводит все простые числа в диапазоне от 1 до 50, используя цикл for.

function task_1() {

    let num = 50;
    isPrime:
        for (let i = 2; i <= num; i++) {
            for (let p = 2; p < i; p++) {
                if (i % p === 0) continue isPrime;
            }
            console.log( i );
        }
}

// Задание 2:
// Напишите программу, которая запрашивает у пользователя число N и затем выводит все числа от 1 до N,
// которые делятся на 3 и/или на 5, используя цикл for.

function task_2() {
    let numberMax = +prompt('Введите число')
    for (let i = 1; i <= numberMax; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }

    // Если программа должна делится на 3 и на 5
    //let numberMax = +prompt('Введите число')
    //     for (let i = 1; i <= numberMax; i++) {
    //         if(i % 3 === 0 && i % 5 === 0) {
    //             console.log(i)
    //         }
    //     }
}

// Задание 3:
// Напишите программу, которая выводит все числа от 10 до 1 в обратном порядке, используя цикл for.

function task_3() {
    let numberRevers = 10;
    for (let i = numberRevers; i > 0; i--){
        console.log(i);
    }
}

//Задание 4:
// Напишите программу, которая запрашивает у пользователя число N и
// затем выводит сумму всех чисел от 1 до N включительно, используя цикл for.


function task_4() {
    let sumNumber = +prompt('Введите число:');
    let result = 0;
    for (let i = 0; i <= sumNumber; i++) {
        result += i;
    }
    console.log(result);
}

//Задание 5:
// Напишите программу, которая выводит таблицу умножения для числа 7, от 1 до 10, используя цикл for.

function task_5() {
    let numMultip = 7;
    for (let i = 1; i <= 10; i++) {
        let result = numMultip * i;
        console.log(`${numMultip} * ${i} = ${result}`)
    }
}

//Задание 6:
// Напишите программу, которая находит и выводит сумму всех цифр введенного пользователем числа.

function task_6() {
    let getMin = +prompt('Введите первое число:');
    let getMax = +prompt('Введите второе число:');
    let result = 0;

    if(getMin < getMax) {
        for (let i = getMin; i <= getMax; i++ ) {
            result += i;
        }
        console.log(result);
    } else if (getMin > getMax) {
        for (let i = getMin; i >= getMax; i--) {
            result += i;
        }
        console.log(result);
    } else {
        alert('Они равны. Введите разные числа')
    }

}

// Задание 7:
// Напишите программу, которая генерирует и выводит пирамиду из звездочек (*) с высотой, которая вводится пользователем.

function task_7() {
    let getHeight = +prompt('Укажите высоту пирамиду:');
    let symbl = '*';
    let result = '';

    for (let i = 0; i < getHeight; i++) {
            result += symbl;
        console.log(result)

    }

}












