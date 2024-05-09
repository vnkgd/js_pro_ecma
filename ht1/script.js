// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter(initialValue) {
//     let value = initialValue;
//     return {
//         increment(num) {
//             value += num;
//         },
//         decrement(num) {
//             value -= num;
//         },
//         getValue() {
//             return value;
//         },
//     }
// }

// const counter = createCounter(100);
// counter.increment(1); //101
// counter.decrement(1); //100
// counter.decrement(1); //99
// console.log(counter.getValue());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// // в HTML добавить
// // <p id="root">Это параграф</p>
// // <h1 class="my-class">Заголовок</h1>


// function findElementByClass(rootElement, className) {
//     // Проверяем, содержит ли переданный элемент класс
//     if (rootElement.classList && rootElement.classList.contains(className)) {
//         return rootElement; // Если содержит, возвращаем элемент
//     }
//     // Просматриваем дочерние элементы
//     for (let i = 0; i < rootElement.children.length; i++) {
//         const childElement = rootElement.children[i];
//         const foundElement = findElementByClass(childElement, className);
//         if (foundElement) {
//             return foundElement; // Если нашли элемент с классом, возвращаем его
//         }
//     }
//     return null; // Если не нашли элемент с классом, возвращаем null
// }


// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement); //null почему?
// console.log(rootElement); //<p id="root">Это параграф</p>
