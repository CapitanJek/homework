
//Простое обещание (Promise): Создайте простой Promise, который выполняется успешно через 2 секунды и возвращает строку "Promise выполнено".
// Затем обработайте успешное выполнение Promise и выведите результат в консоль.

function task_1() {
    const promise = new Promise((oneResolve, oneReject) => {
        setTimeout(() => {
            oneResolve('Promise выполнено')
        }, 2000);
    })

    promise.then(response => console.log(response))

}

// Обработка ошибок: Создайте Promise, который завершается с ошибкой через 3 секунды. Затем обработайте ошибку с
// использованием метода .catch() и выведите сообщение об ошибке в консоль.

function task_2() {
    const promise = new Promise((oneResolve, oneReject) => {
        setTimeout(() => {
            oneReject('Error')
        },3000)
    })

    promise.catch(error => console.log(error))
}

// Promise с условием: Создайте функцию, которая возвращает Promise. Promise должен выполниться успешно, если переданное в функцию число четное, и завершиться с ошибкой, если число нечетное.
// Обработайте Promise и выведите результат в консоль.

function task_3() {

    const getPromise = (num) => {
        const getPromise = new Promise((oneResolve, oneReject) => {
            (!(num % 2)) ? setTimeout(() => oneResolve('True')) :
                setTimeout(() => oneReject('False'))
        })

        getPromise
                .then(response => console.log(response))
                .catch(error => console.log(error))
    }

   getPromise(3)
}

// Асинхронный запрос к серверу: Используйте fetch для выполнения асинхронного GET-запроса к какому-либо публичному API
// (например, JSONPlaceholder). Обработайте полученные данные в виде Promise и выведите их в консоль.
function task_4() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => console.log(result))
}


//const promis = new Promise((onResolve, onReject) => {
//     setTimeout(() => {
//         onResolve("Promise выполнено")
//     }, 2000)
//
//
// })
// promis.then(respons => { console.log(respons) })
//
//
// // Обработка ошибок: Создайте Promise, который завершается с ошибкой через 3 секунды. Затем обработайте ошибку с использованием метода .catch() и выведите сообщение об ошибке в консоль.
//
//
// const promisError = new Promise ((onResolve, onReject) => {
//     setTimeout(() => {
//         onReject("Error")
//     }, 3000)
// })
//
// promisError.catch(error => console.log(error))
//
// // Promise с условием: Создайте функцию, которая возвращает Promise. Promise должен выполниться успешно, если переданное в функцию число четное, и завершиться с ошибкой, если число нечетное. Обработайте Promise и выведите результат в консоль.
//
// function getPromisIf(num) {
//     const promisIf = new Promise ((onReject, onResolve) => {
//         if (num % 2 === 0) {
//             setTimeout(() => {
//                 onResolve('Успешно')
//             })
//         } else {
//             setTimeout(() => {
//                 onReject('Error GG')
//             })
//         }
//     })
//     promisIf.then(response => console.log(response)).catch(error => console.log(error))
// }
// //
// getPromisIf(3)
//
// // Асинхронный запрос к серверу: Используйте fetch для выполнения асинхронного GET-запроса к какому-либо публичному API (например, JSONPlaceholder). Обработайте полученные данные в виде Promise и выведите их в консоль.
//
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(res => console.log(res))


