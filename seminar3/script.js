// // Задание 1
// // Напишите функцию getPrototypeChain(obj), которая будет
// // возвращать цепочку прототипов для заданного объекта obj.
// // Функция должна вернуть массив прототипов, начиная
// // от самого объекта и заканчивая глобальным объектом
// // Object.prototype

// // const obj = {};
// // const prototypeChain = getPrototypeChain(obj);
// // console.log(prototypeChain);

// //создаём два объекта MusicSeries и Blues
// const MusicSeries = {
//     // Свойства объекта
//     model: "music series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     // Метод объекта
//     startWipe: function () {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('I am the method of MusicSeries');
//         console.log('I am starting to wipe the floor...');
//     },
// };

// const Blues = {
//     // Обновляем свойства под конкретную модель.
//     model: "Bluees-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50,
// };

// //делаем связь одного элмента с другим
// Object.setPrototypeOf(Blues, MusicSeries); //сначала пишем какой и потом с чем


// // Создаём фукнцию, которая зависит от объекта obj
// function getPrototypeChain(obj) { // Создаём фукнцию, которая зависит от объекта obj, т.е. что будем в неё передавать
//     const prototypeChain = []; //создаём пустой массив

//     let currentObj = obj; //создаём объект, с которым будем работать, присваивем, что будем передавать в него объект obj
//     while (currentObj !== null) { //сравниваем, чтобы был не пустой
//         prototypeChain.push(currentObj); //будем добавлять в наш текущий массив currentObj
//         currentObj = Object.getPrototypeOf(currentObj); //переопределяем, тем самым поднимаемся вверх
//     }

//     return prototypeChain; //возвращаем значение
// }

// // const obj = {};
// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);
// // в консоли:
// // (3) [{…}, {…}, {…}]
// // 0: {model: 'Bluees-1', power: 250, batterySize: 2500, workTime: 50}
// // 1: {model: 'music series', power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, …}
// // 2: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// // length: 3[[Prototype]]: Array(0)


// // Задание 2 - Person
// // Напишите конструктор объекта Person, который принимает два аргумента:
// // name (строка) и age (число). Конструктор должен создавать объект с
// // указанными свойствами name и age и методом introduce(), который
// // выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // // Пример:
// // const person1 = new Person("John", 25);
// // person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// class Person {
//     //Конструктор класса
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // Метод класса.
//     introduce() {
//         console.log(`My name is: ${this.name}, and I'm ${this.age} years old`);
//     }
// }

// const person1 = new Person('Igor', 32);
// // console.log(person1.name); //Igor
// // console.log(person1.age); //32
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


// Задание 2а - Animal
// Создайте класс Animal который будет представлять животное.
// У класса Animal должны быть следующие свойства и методы:
// Свойство name (строка) - имя животного
// Метод speak() - выводит в консоль звук, издаваемый животным

// Создайте подкласс Dog, который наследует класс Animal.
// Для подкласса Dog добавьте дополнительное свойство и метод:
// Свойство breed (строка) - порода собаки
// Метод fetch() - выводит в консоль сообщение:
// "Собака [name] принесла мяч."

// // // мой вариант. без конструктора. выдал только из Animal. поменял вывод. заработало.
// class Animal {
//     name = "Лев";
//     // Методы класса.
//     speak() {
//         console.log(this.name, 'рычит');
//     }
// }
// // Создадим экземпляр класса.
// const Animal1 = new Animal();
// console.log(Animal1.speak()); //Лев рычит.

// // C помощью extends мы указываем от какого класса будем наследоваться.
// class Dog extends Animal {
//     // Объявляем новые свойства и переопределяем существующие свойства.
//     breed = "Бульдог";
//     // Добавляем новый метод.
//     fetch() {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('Собака', Animal.name, 'принесла мяч.');
//     }
// };

// const dog1 = new Dog();
// dog1.speak(); //Лев рычит
// console.log(dog1.breed); //Бульдог
// dog1.fetch();

// // // как на семинаре. с конструктором. и подклассом
// class Animal {
//     //Конструктор класса
//     constructor(name) {
//         this.name = name;
//     }
//     // Метод класса.
//     speak() {
//         console.log(`Животное ${this.name} издаёт звук`);
//     }
// }
// class Dog extends Animal {
//     //Конструктор класса
//     constructor(name, breed) {
//         super(name);//супер значение - из главного класса
//         this.breed = breed; //страндартное значение
//     }
//     fetch() {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('Собака', this.name, 'принесла мяч.');
//     }
// }


// // Создадим экземпляр класса.
// const animal1 = new Animal("Животное");
// animal1.speak(); //Животное издаёт звук

// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); //Бобик издаёт звук
// console.log(dog1.breed); //Дворняжка
// dog1.fetch(); //Собака Бобик принесла мяч.

// Задание 3 - Интернет магазин
// Создайте класс Product который будет представлять товар в магазине.
// У класса Product должны быть следующие свойства и методы:
// Свойство name (строка) - имя товара
// Свойство price (число) - цена товара

// Создайте класс ShoppingCart который будет представлять товар в магазине.
// Конструктора класса ShoppingCart должен принимать два параметра:
// Свойство customerName (строка) - имя покупателя
// Свойство initialTotalCost (число) - начальная общая стоимость заказа (может быть равно 0, если корзина пуста)
// У класса ShoppingCart должен быть метод addItem(product, quantity),
// который позволяет добавить товар в корзину.
//Метод addItem должен принимать два параметра:
//product (объект класса Product) - товар, который добавляется в корзину.
//quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину.
//Если quantity не указано, считается, что добавляется единица товара.
//У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа
//У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение 
// с общей стоимостью заказа и благодарностью за покупку.
// Формат вывода сообщения:
// "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!"

class Product {
    //Конструктор класса
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.items = []; //создаём массив, потому что в заказе может быть много позиций
    }
    addItem(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.items.push(product, quantity);
    }
    getCurrentTotalCost() {
        return this.totalCost;
    }
    checkout() {
        // console.log('Заказ оформлен для', this.customerName, 'Общая стоимость заказа:', this.initialTotalCost, 'Спасибо за покупку!');
        console.log(`Заказ оформлен на имя ${this.customerName}, 'Общая стоимость заказа:', ${this.totalCost}, 'Спасибо за покупку!'`);
    }
}

// // Создадим экземпляр класса.
const product1 = new Product("Футболка", 1500);
const product2 = new Product("Сникерс", 500);
// console.log(product1);
const cart = new ShoppingCart("Вася", 0);


cart.addItem(product1, 2); //добавляем товар в корзину. 2 футболки
cart.addItem(product2); //добавляем товар в корзину. 1 Сникерс
cart.addItem(product1, 10); //добавляем товар в корзину. 10 футболок

console.log(`Итого в корзине товара на сумму ${cart.getCurrentTotalCost()}`);

cart.checkout();




