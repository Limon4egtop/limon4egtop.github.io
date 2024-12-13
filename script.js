// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
}

// Функция для извлечения utm_term из URL и изменения текста H1
function updateHeadingWithUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = utmTerm || h1.textContent;
    }
}

// Функция для логирования текущего времени
function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('ru-RU');
    console.log(`Текущее время: ${time}`);
}

// Функция для сброса цвета фона к белому
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Вызов функций после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    showMessage('Скрипт загружен!');
    logCurrentTime();
    resetBackgroundColor();
    changeBackgroundColor('lightblue');
    toggleVisibility('.content'); // Замените '.content' на существующий класс
    updateHeadingWithUTM();
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Обработчик click на заголовке H1
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!');
    });

    // 2. Обработчик click на кнопку для смены тем практик
    const secondSemesterBtn = document.getElementById('second-semester-btn');
    const practicesTable = document.getElementById('practices-table');

    secondSemesterBtn.addEventListener('click', () => {
        const secondSemesterPractices = [
            'Базовое бэкенд-приложение',
            'HTTP-запросы',
            'JSON и работа с ним',
            'HTTP-ответы',
            'Проектирование API',
            'Роутинг и его настройка',
            'NoSQL базы данных',
            'Обеспечение авторизации и доступа пользователей',
            'Работа сторонних сервисов уведомления и авторизации',
            'Основы ReactJS',
            'Работа с компонентами динамической DOM',
            'Использование хуков в React',
            'Основы микросервисной архитектуры',
            'Разработка классических модулей веб-приложений',
        ];

        let rows = '';
        secondSemesterPractices.forEach((practice, index) => {
            rows += `<tr><td>${index + 1}</td><td>${practice}</td></tr>`;
        });
        practicesTable.querySelector('tbody').innerHTML = rows;
    });

    // 3. Обработчик mouseover для увеличения фотографии студента
    const studentPhoto = document.getElementById('student-photo');

    studentPhoto.addEventListener('mouseover', () => {
        studentPhoto.style.width = '165px';
        studentPhoto.style.height = 'auto';
    });

    // Уменьшаем размер обратно при mouseout
    studentPhoto.addEventListener('mouseout', () => {
        studentPhoto.style.width = '150px';
        studentPhoto.style.height = 'auto';
    });

    // 4. Обработчик click для смены фотографии студента
    studentPhoto.addEventListener('click', () => {
        studentPhoto.src = '1691772756_grizly-club-p-kartinki-gerb-rtu-mirea-bez-fona-45.jpg'; // Укажите путь к изображению преподавателя
        studentPhoto.alt = 'Фотография любимого преподавателя';
    });

    // 5. Обработчик dblclick для вывода сообщения
    studentPhoto.addEventListener('dblclick', () => {
        alert('Не налегай, у меня не так много любимых преподавателей.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // H1 анимация
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!');
    });

    // Кнопка смены тем практик
    const secondSemesterBtn = document.getElementById('second-semester-btn');
    const practicesTable = document.getElementById('practices-table');

    secondSemesterBtn.addEventListener('click', () => {
        practicesTable.classList.add('visible');
    });

    // Анимация фотографии
    const studentPhoto = document.getElementById('student-photo');
    studentPhoto.addEventListener('mouseover', () => {
        studentPhoto.style.transform = 'rotate(360deg)';
        studentPhoto.style.transition = 'transform 0.5s ease';
    });

    // Показ сообщения о форме
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Форма отправлена!');
        });
    }
});

const showLecturesBtn = document.getElementById('show-lectures-btn');
const lecturesTable = document.getElementById('lectures-table');

showLecturesBtn.addEventListener('click', () => {
    lecturesTable.classList.add('visible');
});

const form = document.getElementById('student-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    // Отображаем сообщение
    formMessage.textContent = 'Форма отправлена!';
    formMessage.style.display = 'block';
    formMessage.style.opacity = '1';

    // Скрываем сообщение через 3 секунды
    setTimeout(() => {
        formMessage.style.opacity = '0';
    }, 3000);
});
