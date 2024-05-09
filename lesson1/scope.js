// //Замыкания Scope

// const createCounter = () => { //объявили фукнцию createCounter
//     let counter = 0; //внутри создали счётчик и обнулили
//     return () => { //возвращаем новую функцию
//         return ++counter; //которая возвращает ++counter
//     }
// }
// // доступа в counter у нас нет
// // console.log(counter); //counter is not defined

// // // Создаем счетчик.
// const counter2 = createCounter();
// console.log(counter2()); // 1
// console.log(counter2()); // 2
// //т.е. доступа к counter нет, но все клики по кнопке будут считаться


// //Создадим еще один счетчик. Каждый будет работать независимо.
// const counter3 = createCounter();
// console.log(counter3()); // 1
// console.log(counter2()); // 3
// //замкнули счётчик. два отдельных счётчика
// //т.е. одна фукнция с замкнутой переменной будет считать клики по отдельности

// Ещё один пример на Замыкания. Scope

const closureFunction = () => {
    const cache = {}; //создаём кэш. это пустой объект.
    return (x) => { //возвращаем и привязываемся к значению X
        if (cache[x]) return cache[x]; //проверка, если было, то переиспользуем
        const result = x * x; //если небыло, результат умножаем одно на другое
        cache[x] = result; //в кэш записываем результат
        return result; //возращаем результат
    }
}
//итого, мы замнкунили переменную. 
//сделали кэш, чтобы при повторном одинаковом запросе не тратить ресурсы компьютера

const chachedPow = closureFunction(); //возводим в степень
console.log(chachedPow(2)); // 4
console.log(chachedPow(8)); // 64
console.log(chachedPow(2)); // 4 — тут функция возьмёт значение из кеша и не будет
// // вычислять его заново. Это особенно эффективно работает, когда мы имеем
// // дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то
// // ресурсов из базы данных или внешних источников. Тут нельзя забывать о
// // валидации кеша. Он может стать неактуальным, если мы имеем дело с базой
// // данных или внешними источниками данных.

// (function () {
//     const sliderTexts = ['Promo', 'Brands', 'Best'];
//     function showSlider(texts) {
//         console.log(texts[0]);
//         console.log(texts[1]);
//         console.log(texts[2]);
//     }
//     showSlider(sliderTexts);
// }());
