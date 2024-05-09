// Оператор Spread
// const arr = [10, 10]
// // function max(param1, param2) {
// //     if (param1 > param2) {
// //         return param1;
// //     } else if (param1 < param2) {
// //         return param2;
// //     } else {
// //         return 'Числа равны';
// //     }
// // }
// // console.log(max(3, 3));
// // console.log(max(...arr));
// console.log(Math.max(...arr)); //... это Оператор Spread


// // Оператор Rest
// const arr = [1, 3, 5, 7, 10]
// function max(param1, param2, ...rest) { //...rest - в данном случае rest это название, которое может быть любым, главное, что это остаток
//     if (param1 > param2) {
//         console.log(param1); //выведет максимальное число
//     } else {
//         console.log(param2); //выведет максимальное число
//     }
//     console.log(rest); //выведет остаток, т.е последние три значения массива
// }
// console.log(max(...arr));

// //Замыкания
// let count = 0;
// const upCount = () => {
//     let params = 3;
//     return count + params;
// }
// console.log(upCount()); //выдаст значение из params
// console.log(params); //выдаст ошибку, не отдаёт значение из params

//Рекурсия

// 4! //читаем как 4 факториал

//n! = (n-1)! * n; //универсальная формула
// 4! = 1 * 2 * 3 * 4; //24
// 4! = 3! * 4; //3*4=24
// 3! = 1 * 2 * 3;
// 3! = 2! * 3; //2*3=6
// 2! = 1! * 2; // 1*2=2
// 1! = 1; //это остановка

// function factorial(number) {
//     if (number === 1) {
//         return 1;
//     }
//     return factorial(number - 1) * number;
// }
// console.log(factorial(3));

//
// с помощью рекурсии можно генерить HTML элементы
// {
//     tag: 'div',
//         class: 'product',
//         {
//             tag: 'img',
//             class: 'product__img'
//         src: 'photo'
//         }
// }