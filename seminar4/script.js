// Задание 1 - setTimeout
// 1. Создайте функцию delayedMessage(message, delay),
//     которая принимает аргументы message(строка) и delay
//         (число).Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками.Например:
// a.delayedMessage("Сообщение 1", 2000)
// b.delayedMessage("Сообщение 2", 1000)
// c.delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().
// Ожидаемый результат
// Сообщение 2
// Сообщение 1
// Сообщение 3
// Конец программы


// console.log("Гагарин: Поехали в космос");

// function delayedMessage(message, delay) {
//     setTimeout(() => {
//         console.log(`Стадия ракеты: ${message}`);
//     }, delay);
// }

// delayedMessage("Зажигание", 1000);
// delayedMessage("Взлёт", 2000);
// delayedMessage("Отделение первого ракета носителя", 3000);
// delayedMessage("Отделение второго ракета носителя", 4000);
// delayedMessage("Ракета в космосе", 5000);
// delayedMessage("Пристыковались к МКС", 6000);
// delayedMessage("Миссия выполнена", 7000);

// Задание 2
// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.
// const tasks = [
//     { name: ' task 1', time: 1000 },
//     { name: ' task 2', time: 2000 },
//     { name: ' task 3', time: 3000 },
//     { name: ' task 4', time: 4000 },
//     { name: ' task 5', time: 5000 }
// ];


// const allTasks = (taskList, interval) => {
//     let delay = 0;
//     taskList.forEach(task => {
//         setTimeout(() => {
//             console.log(task.name);
//         }, delay);
//         delay += interval;
//         //либо так: delay += task.time;
//     });
// }
// const tasks = [
//     { name: ' task 1', time: 1000 },
//     { name: ' task 2', time: 2000 },
//     { name: ' task 3', time: 3000 },
//     { name: ' task 4', time: 4000 },
//     { name: ' task 5', time: 5000 }
// ];

// allTasks(tasks, 1000)


// Задание 3
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4.Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send(

// function loadData(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open("GET", url, true)
//     xhr.send();
// }
// loadData("https://jsonplaceholder.typicode.com/users")

// тоже самое, только вмесето XMLHttpRequest меняем на fetch

// fetch('https://jsonplaceholder.typicode.com/users')

//     .then((result) => {
//         if (result.ok) {
//             return result.text();
//         }
//         throw new Error('Что то пошло не так')
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error('Ошибок слишком много, решай вопрос');
//     });


// тоже самое, только сортируем пользователей
// Задание 4
// Вы разрабатываете простой веб-интерфейс для отображения списка пользователей с сервера и возможности сортировки этих пользователей по имени. У вас уже есть функциональность для получения списка пользователей с сервера и отображения их в виде списка на странице.
// Ваша задача - реализовать сортировку пользователей по имени и добавить кнопку, при нажатии на которую список пользователей будет автоматически сортироваться по имени.
// https://isonpiacehoider.tvDicode.com/users


// const usersList = document.querySelector('users-list');

// const renderUsersList = (users) => {
//     usersList.innerHTML = '';
//     users.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <div>
//                 <h2>${user.name}</h2>
//                 <p>${user.email}</p>
//             </div>
//         `
//         usersList.append(listItem);
//     });
// }

// const sortUsersByName = (users) => {
//     const sortedUsers = users.sort((a, b) => {
//         const nameA = a.name.toLowerCase();
//         const nameB = b.name.toLowerCase();
//         if (nameA < nameB) {
//             return -1;
//         }
//         if (nameA > nameB) {
//             return 1;
//         }
//         return 0;
//     });
//     renderUsersList(sortedUsers);
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result) => result.json())
//     .then(data => {
//         renderUsersList(data);
//         const sortEl = document.querySelector('.sort')
//         sortEl.addEventListener('click', function (e) {
//             sortUsersByName(data)
//         });
//     })
//     .catch((err) => {
//         console.error('Ошибок слишком много, решай вопрос');
//     });

// // Не получил список почему то
// // Ошибок слишком много, решай вопрос

// Ещё задания, которые были в Workshop, но небыло на видео
// Задание 3
// Напишите функцию getData, которая делает асинхронный запрос к
// API и возвращает данные в виде объекта.
// Внутри функции происходит асинхронный запрос к API с помощью
// функции fetch. Затем, с использованием оператора await, ожидается
// ответ от сервера и его парсинг в формате JSON с помощью метода
// response.json(). Полученные данные возвращаются из функции.

// Задание 3 Дополнение
// В случае возникновения ошибки при выполнении асинхронных
// операций, используется конструкция try/catch для обработки и
// отображения ошибки.
// В функции main вызывается функция getData с использованием
// await, чтобы получить данные асинхронно. Полученные данные
// выводятся в консоль. Если происходит ошибка, она ловится и
// выводится сообщение об ошибке. Функция main также объявлена как
// асинхронная с использованием ключевого слова async. В конце
// вызывается функция main для запуска процесса получения данных.