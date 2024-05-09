// Задание 1
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]);
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // const arr3 = [];

// function mergeArrays() {
//     const arr3 = [...arr1, ...arr2];
//     console.log(arr3);
// }
// console.log(mergeArrays());

// либо так, без функции
// const arr3 = [...arr1, ...arr2];
// console.log(arr3)

// // // либо так, как на семинаре. тут норм.
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// // либо так, как на семинаре - ещё один вариант, со стрелочной фукнцией
// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([1, 6, 3], [9, 5, 6]));


// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5);
// Ожидаемый результат: [1, 2, 3, 4, 5]

//вариант 1. рабочий.
// function removeDuplicates(...args) { //args это как раз rest
//     return args.filter((value, index) => args.indexOf(value) === index);
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// // либо так. с помощью стрелочной функции. только filter не сработал почему то
// const removeDuplicates = (...args) => args.filter((value, index) => args.indexOf(value) === index);
// console.log(removeDuplicates(1, 5, 3, 2, 4, 1, 5, 6));

// Задание 2. Чистые функции
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

//мой вариант без функции. работает.
// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2);

// // с помощью функции не работает
// function getEvenNumbers(...args) { //args это как раз rest
//     return args((value) => args(value) % 2 === 0);
// }
// //console.log(getEvenNumbers(1, 2, 3, 2, 4, 1, 5));// //args is not a function
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));// //args is not a function

//с помощью стрелочной функции.
// const getEvenNumbers = (...args) => {

// }

// // //либо так. как на семинаре.
// function getEvenNumbers(num) {
//     return num.filter(item => item % 2 === 0);
// }
// // console.log(getEvenNumbers(1, 2, 3, 2, 4, 1, 5)); //num.filter is not a function
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5])); //[2, 2, 4]

// //либо так. как на семинаре. стрелочная фукнция
// const getEvenNumbers = (num) => num.filter(item => item % 2 === 0);
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5])); //[2, 2, 4]

// 2. Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// мой вариант не сработал
// const calculateAverage = (num) => num.filter(item => ((item += item) / num.length));
// console.log(calculateAverage([1, 2, 3, 2, 4, 1, 5]));

////либо так. как на семинаре. работает
// const calculateAverage = (num) => {
//     const sum = num.reduce((acc, item) => acc + item, 0)
//     return sum / num.length;
// }
// console.log(calculateAverage([1, 2, 3, 2, 4, 1, 5]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// const capitalizeFirstLetter = (str) => {
//     return str
//         .split(' ') //разбиваем слова на буквы, каждый символ отдельно и преобразовать в массив
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         // map - проитерировать весь массив и создать на его основе новый.
//         // charAt(0) возвращает символ по указанному индексу 0 в строке.
//         // toUpperCase - перевести в верхний регистр
//         // slice - взять первый симовол нового массива
//         .join(' '); //объединяем
// }
// console.log(capitalizeFirstLetter('hello world')); //Hello World

// Задание 3 (Замыкания)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(initialValue) {
//     let value = initialValue;
//     return {
//         add(num) {
//             value += num;
//         },
//         subtract(num) {
//             value -= num;
//         },
//         getValue() {
//             return value;
//         },
//     }
// }

// const calculator = createCalculator(100);
// calculator.add(5); //
// calculator.subtract(3);
// calculator.subtract(5);
// console.log(calculator.getValue());

// Задание 4 (Лексический контекст)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// // //мой вариант без замыкания
// let greeting = 'John';
// function createGreeting() {
//     console.log(`Hello, ${greeting}!`);
// }

// // // console.log(createGreeting('John')); //Hello, John! и снизу undefined
// createGreeting('John'); //а так без undefined

//либо так, как на семинаре
// function createGreeting(user) {
//     return function () {
//         console.log(`Hello, ${user}!`);
//     }
// }

// const greeting = createGreeting('John'); //а тут замыкание
// greeting(); //Hello, John!

// Задание 5
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true


// Мой вариант. Работает.
// function createPasswordChecker(paslength) {
//     if (paslength < 8) {
//         console.log('Пароль меньше 8 символов');
//     } else {
//         console.log('Пароль соответствует требованиям безопасности');
//     }
// }
// createPasswordChecker(7);

// // Либо как на семинаре
// function createPasswordChecker(maxLength) {
//     return function name(password) {
//         return password.length <= maxLength;
//     }
// }
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('newpassword')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Задание 6 (Рекурсия)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(num) {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));
}
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)


