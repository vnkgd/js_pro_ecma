// Задание 1
// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя(ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

//     Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера.Если запрос успешен(с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе.Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.



// function getUserData(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('User not found');
//             }
//             return response.json();
//         })
// }

// const userId = 1;

// getUserData(userId)
//     .then(userData => {
//         console.log(userData); // Вывод данных о пользователе
//     })
//     .catch(error => {
//         console.error(error); // Вывод сообщения об ошибке
//     });







// Задание 2
// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения.Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// * Подсказка *
// // Пример использования функции
// const user = {
//     name: 'John Smith',
//     age: 30,
//     email: 'john@example.com'
// };

// saveUserData(user)
//     .then(() => {
//         console.log('User data saved successfully');
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// // saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.Она отправляет POST - запрос на URL - адрес / users с указанием типа содержимого application / json и сериализует объект с данными о пользователе в JSON - строку с помощью JSON.stringify().Если запрос успешен(с кодом 200), функция разрешает промис.Если запрос неуспешен, функция отклоняет промис с сообщени

// // не знаю где взять сервер для теста

// function saveUserData(userData) {
//     // URL для отправки данных
//     const url = 'https://example.com/saveUserData';
//     // Опции для запроса
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     };
//     // Отправка данных на сервер
//     return fetch(url, options)
//         .then(response => {
//             if (response.ok) {
//                 // Если ответ успешен, возвращаем успешное разрешение промиса
//                 return Promise.resolve();
//             } else {
//                 // Если ответ не успешен, генерируем исключение
//                 return Promise.reject(new Error('Failed to save user data'));
//             }
//         })
//         .catch(error => {
//             // Обрабатываем ошибку при выполнении запроса
//             return Promise.reject(new Error('Network error'));
//         });
// }
// // Пример использования функции
// const user = {
//     name: 'John Smith',
//     age: 30,
//     email: '',
//     age: 30,
// };

// // Пример использования функции saveUserData
// const userData = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     age: 30,
// };

// saveUserData(userData)
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.error(error);
//     });


// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"


function changeStyleDelayed(elementId, delay) {
    // Получаем элемент по его идентификатору
    var element = document.getElementById(elementId);
    // Проверяем, есть ли такой элемент в DOM
    if (element) {
        // Используем функцию setTimeout для установки задержки
        setTimeout(function () {
            // Изменяем стиль элемента через указанное время
            element.style.color = 'red'; // Пример изменения цвета текста на красный
            element.style.fontWeight = 'bold'; // Пример изменения жирности текста на жирный
            // Добавьте другие нужные стили в соответствии с вашими требованиями
            // Выводим сообщение в консоль для проверки
            console.log('Стиль элемента ' + elementId + ' изменен через ' + delay + ' миллисекунд');
        }, delay); // Устанавливаем задержку
    } else {
        // Если элемент не найден, выводим сообщение об ошибке в консоль
        console.error('Элемент с id ' + elementId + ' не найден');
    }
}

// Пример использования функции
// в странице HTML элемент 
// <h1 id="myElement">Мой элемент</h1>
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'


