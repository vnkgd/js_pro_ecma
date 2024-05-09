// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

// class Employee {
//     constructor(name) {
//         this.name = name; //имя сотрудника
//     }
//     displayInfo() {
//         console.log(`Имя сотрудника: ${this.name}`)
//     }
// }

// class Manager extends Employee {
//     constructor(name, department) {
//         super(name);//супер значение - из главного класса
//         this.department = department; //отдел
//     }
//     displayInfo() {
//         console.log(`Имя менеджера: ${this.name}, из отдела: ${this.department}`)
//     }
// }

// const employee = new Employee("John Smith");
// employee.displayInfo(); //Имя сотрудника: John Smith
// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo(); //Имя менеджера: Jane Doe, из отдела: Sales


// Задание 2:"Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber, initialTotalCost = 0) {
        this.orderNumber = orderNumber;
        this.totalCost = initialTotalCost;
        this.products = []; //создаём массив, потому что в заказе может быть много позиций
    }
    addProductToOrder(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.products.push(product, quantity);
    }
    getTotalPrice() {
        return this.totalCost;
    }
}


const order = new Order(12345, 0);
console.log(`Заказ №: ${order.orderNumber}`); //Заказ №: 12345
const product1 = new Product("Phone", 500);
order.addProductToOrder(product1);
const product2 = new Product("Headphones", 100);
order.addProductToOrder(product2);
console.log(`Итого в корзине товара на сумму: ${order.getTotalPrice()} рублей`); //Итого в корзине товара на сумму: 600 рублей

