// Создайте объект "Пользователь" с полями "имя" и "возраст". Напишите метод в объекте,
// который будет выводить информацию о пользователе в консоль, используя this.

function task_1() {
    const person = {
        name: 'Azim',
        age: 24,
        getName: function () {
            console.log(this.name)
        }
    }

    person.getName()
}

// Создайте объект "Автомобиль" с полем "марка". Напишите метод, который будет возвращать
// строку "Моя машина - [марка]" с использованием this

function task_2() {
    const car = {
        brand: 'Lexus',
        getBrandCar: function () {
            console.log(`Моя машина ${this.brand}`)
        }
    }

    car.getBrandCar()
}

// Создайте объект "Круг" с полем "радиус". Добавьте метод, который будет возвращать площадь круга, используя this.
// Площадь круга через радиус S = π × r2, где r — это радиус, π — это константа, которая
// выражает отношение длины окружности к диаметру, она приблизительно равна 3,14.

function task_3() {
    const circle = {
        radius: 2,
        getSquareCircle: function () {
            let square =  3.14 * (this.radius ** 2)
            return console.log(`Радиус круга равен: ${square}`)
        }
    }
    circle.getSquareCircle()
}

//Создайте объект "Калькулятор" с полями "число1" и "число2". Добавьте методы для сложения и умножения чисел, используя this.
function task_4() {
    const calculator = {
        num1: 2,
        num2: 3,
        getAddition: function () {
            return console.log(`${this.num1} + ${this.num2} = ${this.num1 + this.num2}`)
        },
        getMultiplication: function () {
            return console.log(`${this.num1} * ${this.num2} = ${this.num1 * this.num2}`)
        }
    }

    calculator.getMultiplication()
    calculator.getAddition()
}

// Создайте функцию "День недели", которая будет возвращать текущий день недели с использованием this.
function task_5() {
    const week = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
        getDayOfTheWeek: function (day) {
            return day === 1 ? `Today is ${this['1']}` :
                    day === 2 ? `Today is ${this['2']}`:
                        day === 3 ? `Today is ${this['3']}`:
                            day === 4 ? `Today is ${this['4']}`:
                                day === 5 ? `Today is ${this['5']}`:
                                    day === 6 ? `Today is ${this['6']}`:
                                        day === 7 ? `Today is ${this['7']}`:
                                            'Введите число от 1 до 7'

        }
    }
    let getNumber = +prompt(`Select day of week: 
    Monday - 1
    Tuesday - 2
    Wednesday - 3
    Thursday - 4
    Friday - 5
    Saturday - 6
    Sunday - 7
    `)
    alert(week.getDayOfTheWeek(getNumber))
}

// Создайте объект "Продукт" с полями "название" и "цена". Добавьте метод, который будет
// выводить информацию о продукте вида "Продукт [название] стоит [цена] долларов", используя this.

function task_6() {
    const product = {
        name: 'Iphone 13 pro',
        price: 650,
        getInformationOfProduct: function () {
            return console.log(`Продукт ${this.name} стоит ${this.price} долларов`)
        }
    }
    product.getInformationOfProduct()
}

// Создайте объект "Животное" с полем "имя". Добавьте метод, который будет издавать звук, связанный с
// этим животным, вида "[имя] издает звук [звук]", используя this.

function task_7() {
    const animal = {
        name: 'Волк',
        song: 'Ауфф, безумно можно быть первым )))',
        logSong: function () {
            return console.log(`${this.name} издает звук ${this.song}`)
        }
    }

    animal.logSong()
}

// Создайте свой reduce, изучите sort и также создайте свой sort
// mySort и myReduce - сделайте наиболее похожий функционал, учитывая даже ошибки




Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
        if (accumulator === this[0]) {
            for (let i = 1; i < this.length; i++) {
                accumulator = callback(accumulator, this[i], i, this)
            }
        }
        if (accumulator === initialValue) {
            for (let i = 0; i < this.length; i++) {
                accumulator = callback(accumulator, this[i], i, this)
            }
        }

    return accumulator
}


let arr = [1,2,3];
let getSumArr = arr.myReduce((cur , item) => {
        return cur + item
})

// mySort

Array.prototype.mySort = function (callback)  {
    let result = [...this]
  for (let j = 0; j < result.length - 1; j++) {
      for (let i = 0; i < result.length - 1; i++ ) {
          if (callback(result[i], result[i + 1])) {
              let temp = result[i];
              result[i] = result[i + 1];
              result[i + 1] = temp
          }
      }
  }
  return result
}

let num = [1,3,5,6,2,4];
console.log(num.mySort((a,b) => {
   return  a > b
}))