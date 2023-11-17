

// Задание 1: Деструктуризация объекта
// Создайте объект person с информацией о человеке (имя, возраст, пол, город и т. д.). Используя деструктуризацию объекта, извлеките и выведите на экран информацию об этом человеке.



function task_1() {
    const person = {
        name: 'Azim',
        age: 24,
        gender: 'male',
        city: 'Bishkek',
        status: 'Student',

    }

const {
    name,
    age,
    gender,
    city,
    status
} = person

alert(`
    name: ${name}
    age: ${age}
    gender : ${gender}
    city : ${city}
    status : ${status}
`)
}

// // Задание 2: Деструктуризация массива
// // Создайте массив с несколькими числами. Используя деструктуризацию массива, извлеките и выведите на экран первый и последний элементы массива.
function task_2() {
    const number = [1, 2, 3, 4, 5];
    const [el1, el2, el3, el4, el5] = number
    alert(`
    Первый элемент массива: ${el1}
    Последний элемент массива: ${el5}
    `)
}

// Задание 3: Функция и деструктуризация
// Напишите функцию, которая принимает объект, представляющий собой информацию о человеке, и использует деструктуризацию объекта, чтобы извлечь и
// вернуть имя и возраст этого человека.

function task_3() {
    function getNameAngAge(obj) {
       return   {
            name,
            age
        } = obj



    }


    const person = {
        name: 'Azim',
        age: 24
    }
    const person2 = {
        name: 'Erika',
        age: 26
    }
    console.log(getNameAngAge(person))
    console.log(getNameAngAge(person2))
}

// Задание 4: Обмен значениями
// Создайте две переменные a и b. Используя деструктуризацию, обменяйте значения между этими переменными без использования временной переменной.

function task_4() {
    let a = 1;
    let b = 2;
    [a, b] = [b,a]
    console.log('a = ' + a, 'b = ' + b)

}

// Задание 5: Вложенная деструктуризация
// Создайте объект, представляющий собой информацию о компании (название, адрес, информация о сотрудниках и т. д.). Используя вложенную деструктуризацию объекта,
// извлеките информацию о названии компании и имени первого сотрудника.

function task_5() {
    const company = {
        name: 'CodiFy',
        address: 'Исанова 105/3, 1 этаж',
        information: 'It школа',
        city: 'Bishkek',
        employees: ['Aidar', 'Nadira', 'Artur' ],
        price: 12000,
        directions: ['Back-end', 'Data Science','Front-end'],
        students: ['Azim', 'Arsen', 'Joji', 'Rustam', 'Beka']

    }
    const {
        name,
        employees: [emp1]

    } = company

    console.log(`
    Название компании: ${name}
    Перавый сотрудник: ${emp1}
    `)
}

// Задание 6: Деструктуризация в цикле
// Создайте массив объектов, представляющих собой список студентов. Используя цикл и деструктуризацию объектов, выведите на экран имена и возраст каждого студента
// из списка.

function task_6() {
    const students = [
        {
            name: 'Azim',
            age:24
        },
        {
            name: 'Arsen',
            age:22
        },
        {
            name: 'Rustam',
            age:19
        },
        {
            name: 'Joji',
            age:20
        },

    ]

   students.forEach((item) => {
       const {
           name,
           age
       } = item
        alert(`
                name: ${name} 
                age: ${age}
            `)
   })


}

// Если у вас уже есть репозиторий и вы уже пушили туда изменения и вам надо запушить новые :
// 1) вам нужно добавить изменения - git add .
// 2) вам надо закоммитить и оставить название - git commit -m "сюда пишите , что вы сделали типо : add file или first commit и тд "
// 3) потом надо запушить , те отправить - git push origin main




