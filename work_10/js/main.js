// Всем <h3> поставьте текст '!!!'.
// Всем <h3> сделайте текст зеленого цвета.
const h3 = document.querySelectorAll('h3');
for (let a of h3) {
    a.innerText = '!!!!'
    a.style.color = '#038141'
}

// Создайте маркированный список. При помощи цикла добавьте в маркированный список 30 li - элементов с текстом:
// “1 - овечка”,
// “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

const ul = document.createElement('ul');
for (let i = 1; i <= 30; i++) {
    const li = document.createElement('li');
    li.innerText = `${i} - овечка`
    ul.append(li)
}
document.body.prepend(ul);

// В css создайте класс .active в котором пропишите цвет текста blue. Добавьте всем span элементам
// класс active через document.getElementsByTagName.

const spans = document.getElementsByTagName('span');
console.log(spans)
for (let j = 0; j < spans.length; j++) {
    spans[j].classList.add('active')
}

// Найдите все HTML-теги strong и окрасьте их в зеленый цвет.
const strong = document.querySelectorAll('strong');
console.log(strong)
for (let str of strong) {
    str.style.color = '#038141'
}
// Найдите все HTML-теги em и добавьте им класс .selected .
const emTag = document.querySelectorAll('em');
for (let em of emTag) {
    em.classList.add('selected')
}

// Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им класс .selected
const mark = document.querySelectorAll('.row mark' );
for (let tagMark of mark) {
    tagMark.classList.add('selected')
}

// Найдите все гиперссылки и удалите у них подчеркивания.

const link = document.querySelectorAll('a');
for(let a of link) {
    a.style.textDecoration = "none";
}

// Переключите HTML-теги strong с классом .some в состояние без этого класса, а тем элементам (strong),
// у которых небыло этого класса — добавьте.
// button.classList.toggle('btn') //  если есть такой класс, то он его удаляет . Если нет то он добавляет

const tagStrong = document.querySelectorAll('strong');
for(let strong of tagStrong ) {
    strong.classList.toggle('some')
}

//Среди набора элементов с классом .row, удалите этот класс у второго элемента.
const getClassRow = document.querySelectorAll('.row');
getClassRow[1].classList.remove('row')


// Выведите CSS-свойство color у второй гиперсылки в тексте(при помощи метода getComputedStyle())
console.log(getComputedStyle(link[1]).color)

// Задайте третьему row дополнительный класс .third .
 getClassRow[2].classList.add('third');

// Обратитесь к элементу с классом .row-inner и задайте ему цвет текста розовый.
const getElem = document.querySelector('.row-inner');
getElem.style.color = 'pink'

// Добавтье элемент input type="text" с классом .input внутри div с классом .row-input.
const row_input = document.querySelector('.row-input');
const input = document.createElement('input')

      input.classList.add('input')
      row_input.append(input)

// Сделайте фон желтым у нового элемента input.
input.style.backgroundColor = '#FFFF00'

// Добавтье placholder этому элементу input с классом .input.

input.placeholder = 'placeholder'

// Обратитесь к элементу с классом .row-outer и задайте ему размер шрифта 20px.
const divRowOuter = document.querySelector('.row-outer');
divRowOuter.style.cssText = `font-size: 20px `


//Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least".
const divLast = document.querySelector('.last');
divLast.innerText = 'Last but not least';

// Сделайте последний текст, который вы добавили, жирным.
divLast.style.fontWeight = '700'






