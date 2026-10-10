// ==================== ПЛАВНАЯ ПРОКРУТКА ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==================== АНИМАЦИЯ ПОЯВЛЕНИЯ ====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ==================== СВЕЧЕНИЕ НА КАРТОЧКАХ ====================
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', x + '%');
        card.style.setProperty('--y', y + '%');
    });
});

// ==================== ТЕСТЫ ====================
const quizzes = [
    {
        title: '🧠 Тест про осьминогов',
        questions: [
            { q: 'Сколько сердец у осьминога?', options: ['1', '2', '3', '4'], correct: 2 },
            { q: 'Сколько мозгов у осьминога?', options: ['1', '3', '9', '12'], correct: 2 },
            { q: 'Как осьминоги защищаются?', options: ['Убегают', 'Меняют цвет', 'Прячутся', 'Атакуют'], correct: 1 },
            { q: 'Что делают осьминоги при опасности?', options: ['Выпускают чернила', 'Спят', 'Едят', 'Прячутся'], correct: 0 },
            { q: 'Сколько живут осьминоги?', options: ['1-2 года', '10 лет', '50 лет', '100 лет'], correct: 0 },
        ]
    },
    {
        title: '🌌 Тест про космос',
        questions: [
            { q: 'Сколько планет в Солнечной системе?', options: ['7', '8', '9', '10'], correct: 1 },
            { q: 'Какая планета самая большая?', options: ['Земля', 'Марс', 'Юпитер', 'Сатурн'], correct: 2 },
            { q: 'Сколько лет Солнцу?', options: ['1 млрд', '4.6 млрд', '10 млрд', '100 млн'], correct: 1 },
            { q: 'Что такое чёрная дыра?', options: ['Планета', 'Звезда', 'Объект с гравитацией', 'Комета'], correct: 2 },
            { q: 'Сколько спутников у Марса?', options: ['0', '1', '2', '3'], correct: 2 },
        ]
    },
    {
        title: '🦈 Тест про мегалодона',
        questions: [
            { q: 'Когда вымер мегалодон?', options: ['1 млн лет назад', '3,6 млн лет назад', '10 млн лет назад', '100 млн лет назад'], correct: 1 },
            { q: 'Сколько метров достигал мегалодон?', options: ['5-10', '10-15', '15-20', '20-25'], correct: 2 },
            { q: 'Что осталось от мегалодона?', options: ['Скелет', 'Зубы', 'Кожа', 'Ничего'], correct: 1 },
            { q: 'Чем питался мегалодон?', options: ['Рыбой', 'Китами', 'Планктоном', 'Водорослями'], correct: 1 },
            { q: 'Жив ли мегалодон?', options: ['Да', 'Нет', 'Неизвестно', 'Возможно'], correct: 1 },
        ]
    },
    {
        title: '🌍 Тест про природу',
        questions: [
            { q: 'Сколько процентов океана не исследовано?', options: ['20%', '50%', '80%', '95%'], correct: 2 },
            { q: 'Какое самое большое животное?', options: ['Слон', 'Синий кит', 'Жираф', 'Кальмар'], correct: 1 },
            { q: 'Сколько деревьев на Земле?', options: ['1 млрд', '100 млрд', '3 трлн', '10 трлн'], correct: 2 },
            { q: 'Что такое биоразнообразие?', options: ['Разнообразие жизни', 'Разнообразие погоды', 'Разнообразие гор', 'Разнообразие воды'], correct: 0 },
            { q: 'Сколько лет Земле?', options: ['1 млрд', '2 млрд', '4,5 млрд', '10 млрд'], correct: 2 },
        ]
    },
    {
        title: '🔬 Тест про науку',
        questions: [
            { q: 'Что изучает физика?', options: ['Живую природу', 'Законы природы', 'Химические реакции', 'Космос'], correct: 1
