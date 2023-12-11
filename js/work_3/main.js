

// Задание 1
// Создание объекта: Создайте объект person с полями name, age и city. Заполните их данными и выведите объект в консоль.

function task_1() {
    const person = {
        name: 'Azim',
        age: 24,
        city: 'Bishkek'
    }
    console.log(person)
}

// Задание 2
// Изменение объекта: Измените возраст человека в объекте person и выведите обновленный объект.

function task_2() {
    const person = {
        name: 'Azim',
        age: 24,
        city: 'Bishkek'
    }

    person.age = 21;
    console.log(person)
}

// Задание 3
// Длина массива: Создайте массив numbers с несколькими числами. Найдите и выведите длину этого массива.

function task_3() {
    const numbers = [1,23,4,5,6,78,9,9,0];
    let numbersLength = numbers.length;
    console.log(numbersLength)
}

// Задание 4
// Добавление элементов в массив: Создайте пустой массив animals. Добавьте в него несколько названий животных

function task_4() {
    const animals = [];
    animals.push('Cat', 'Dog', 'Tiger', 'Wolf');
    console.log(animals)
}

// Задание 4
// Объект в массиве: Создайте массив people и добавьте в него объекты, представляющие разных людей.
// Каждый объект должен иметь поля name, age и city. Выведите массив в консоль.

function task_5() {
    const people = [
        {
            student: {
                name: 'Azim',
                age: 24,
                city: 'Bishkek'
            },

            mentor: {
                name: 'Aidar',
                age: 22,
                city: 'Bishkek'
            },

            assistant: {
                name: 'Nadira',
                age: 18,
                city: 'Brooklyn'
            }
        }

    ]

    console.log(people)
}

// Задание 6
// Массив с разными типами данных: Создайте массив data с элементами разных типов данных, такими как число, строка, и объект.
// Выведите массив в консоль.

function task_6() {
    const data = [
        1,
        'Azim',
        {mentor: {
            name: 'Aidar',
            age: 22,
            city: 'Bishkek'
        }},
        null,
        undefined,
        1119898983928398n,
        true,
        false,
        [1,23,4,5,6,78,9,9,0]
    ];

    console.log(data);
}

// Задание 7
// Доступ к элементам массива: Создайте массив fruits с названиями фруктов. Выведите третий фрукт из массива в консоль.

function task_7() {
    const fruit = ['Apple', 'Watermelon', 'Banana', 'Strawberry', 'Orange'];
    const returnBanana = fruit[2];
    console.log(returnBanana)
}

// Задание 8
// Доступ к свойствам объекта: Создайте объект book с полями title, author и year. Выведите в консоль автора книги.

function task_8() {
    const book = {
        title: 'Граф Монте-Кристо',
        year: '1844—1846',
        author: 'Александр Дюма'
    }
    const returnAuthor = book.author;
    console.log(returnAuthor)
}










