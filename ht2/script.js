// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title(название) - строка, название книги.
// Свойство author(автор) - строка, имя автора книги.
// Свойство pages(количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).

// class Book {
//     // static title = 'Война и мир';
//     // static author = 'Лев Толстой';
//     // static pages = 1300;
//     constructor(title, author, pages) {
//         this.title = title,
//             this.author = author,
//             this.pages = pages;
//     }
//     displayInfo() {
//         console.log(`Название книги: ${this.title}. Автор: ${this.author}. Количество страниц: ${this.pages}`);
//     }
// }
// const book = new Book("Война и мир", "Лев Толстой", 1300);
// book.displayInfo(); // Название книги: Война и мир. Автор: Лев Толстой. Количество страниц: 1300

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name(имя) - строка, имя студента.
// Свойство age(возраст) - число, возраст студента.
// Свойство grade(класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте(имя, возраст и класс).
//     javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

// class Student {
//     constructor(name, age, grade) {
//         this.name = name,
//             this.age = age,
//             this.grade = grade;
//     }
//     displayInfo() {
//         console.log(`Имя студента: ${this.name}. Возраст: ${this.age}. Класс: ${this.grade}`);
//     }
// }
// const student1 = new Student("John Smith", 16, "10th grade");
// student1.displayInfo(); //Имя студента: John Smith. Возраст: 16. Класс: 10th grade
// const student2 = new Student("Jane Doe", 17, "11th grade");
// student2.displayInfo(); //Имя студента: Jane Doe. Возраст: 17. Класс: 11th grade