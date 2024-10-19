// Устанавливаем таймер на 3 секунды для скрытия загрузчика
window.addEventListener("load", function() {
    setTimeout(function() {
        document.body.classList.add("loaded");
    }, 3000);  // 3000 миллисекунд = 3 секунды
});






// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// modal.js

const modal = document.getElementById('instruction-modal');
const closeBtn = document.querySelector('.close-btn');

// Показываем модальное окно при загрузке страницы
window.onload = function() {
    modal.style.display = 'flex';
}

// Закрываем модальное окно с анимацией
closeBtn.addEventListener('click', function() {
    modal.classList.add('fade-out'); // Добавляем класс для анимации закрытия

    setTimeout(() => {
        modal.style.display = 'none'; // После завершения анимации скрываем окно
        modal.classList.remove('fade-out'); // Убираем класс, чтобы сбросить состояние
    }, 500); // Задержка для завершения анимации (0.5 секунды)
});
