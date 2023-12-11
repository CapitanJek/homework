
//По нажатию клавиш меняйте цвет заднего фон - body
// R - red
// G - green;
// B - blue;
// W - white;
// SHIFT + B - black
// SHIFT + G - gray;
//
//
//
//
//
let keyOld = '';
    document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const color = document.body.style;
    key === 'r' ? color.backgroundColor = 'red' :
        key === 'g' ? color.backgroundColor = 'green' :
            key === 'b' ? color.backgroundColor = 'blue' :
                key === 'w' ? color.backgroundColor = 'white' : null;

    color.backgroundColor = keyOld === 'Shift' && key === 'b' ? 'black' :
        keyOld === 'Shift' && key === 'g' ? 'gray' :

        keyOld = event.key
})

// Создайте переменную let i=0, по нажатию на кнопку выводите в консоль переменную i и увеличивайте её в 2 раза;
    let i = 0;
    document.addEventListener('keydown', (event) => console.log(i += 2))
// Если умножить то этот код
// let i = 1;
// document.addEventListener('keydown', (event) => console.log(i *= 2))

// Вставьте картинку и кнопку в html. При нажатии на кнопку скройте картинку путем затухания до прозрачного состояния.
const image = document.querySelector('.image')
const hideImage = () => image.style.cssText = `opacity: 0;`;
const showImage = () => image.style.cssText = `opacity: 1;`;

// Создайте h1 с классом "output-text". Создайте input type="text" с классом "input-text". При каждом изменении ".input-text" меняйте содержимое
// ".output-text" на значение из ".input-text".

const h1 = document.createElement('h1')
h1.classList.add('output_text')

const input = document.createElement('input')
input.classList.add('input_text')


input.addEventListener('input', ({target: {value}}) => {
    h1.innerText = value
})

document.body.append(h1,input )


// Создайте div размером 500px * 500px, по нажатию на неё выводите в консоль позицию места куда вы нажали относительно div- а;
const coordinates = document.querySelector('.div_coordinates');
coordinates.addEventListener('click', (event) => {
    console.log(`x = ${event.offsetX} y = ${event.offsetY}`)
})

// Создайте input type color. При изменении инпута меняйте цвет заднего фона body на значение из этого инпута
const input_color = document.querySelector('.color');
input_color.addEventListener('input', ({target: {value}}) => {
    document.body.style.backgroundColor = value
})




















