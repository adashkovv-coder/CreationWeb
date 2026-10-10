// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ТЕСТЫ
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
            { q: 'Что изучает физика?', options: ['Живую природу', 'Законы природы', 'Химические реакции', 'Космос'], correct: 1 },
            { q: 'Что такое атом?', options: ['Частица', 'Молекула', 'Клетка', 'Планета'], correct: 0 },
            { q: 'Что такое ДНК?', options: ['Молекула', 'Клетка', 'Белок', 'Вирус'], correct: 0 },
            { q: 'Что такое гравитация?', options: ['Сила', 'Энергия', 'Масса', 'Скорость'], correct: 0 },
            { q: 'Что изучает биология?', options: ['Живую природу', 'Космос', 'Химию', 'Физику'], correct: 0 },
        ]
    },
    {
        title: '🐋 Тест про китов',
        questions: [
            { q: 'Какое самое большое животное?', options: ['Синий кит', 'Слон', 'Жираф', 'Кашалот'], correct: 0 },
            { q: 'Сколько сердец у кита?', options: ['1', '2', '3', '4'], correct: 0 },
            { q: 'Как киты общаются?', options: ['Песнями', 'Танцами', 'Криками', 'Молчат'], correct: 0 },
            { q: 'Что едят синие киты?', options: ['Криль', 'Рыбу', 'Планктон', 'Водоросли'], correct: 0 },
            { q: 'Сколько живут киты?', options: ['10 лет', '30 лет', '50-100 лет', '200 лет'], correct: 2 },
        ]
    }
];

let currentQuiz = 0;
let currentQuestion = 0;
let score = 0;

function startQuiz(index) {
    currentQuiz = index;
    currentQuestion = 0;
    score = 0;
    document.getElementById('quizModal').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const quiz = quizzes[currentQuiz];
    const container = document.getElementById('quizContainer');

    if (currentQuestion >= quiz.questions.length) {
        container.innerHTML = `
            <h2>${quiz.title}</h2>
            <div class="quiz-result">
                🎉 Ты набрал ${score} из ${quiz.questions.length}!<br><br>
                <button class="quiz-option" onclick="startQuiz(${currentQuiz})">Пройти заново</button>
            </div>
        `;
        return;
    }

    const q = quiz.questions[currentQuestion];
    container.innerHTML = `
        <h2>${quiz.title}</h2>
        <div class="quiz-question">${currentQuestion + 1}. ${q.q}</div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <div class="quiz-option" onclick="selectAnswer(${i})">${opt}</div>
            `).join('')}
        </div>
    `;
}

function selectAnswer(index) {
    const quiz = quizzes[currentQuiz];
    const q = quiz.questions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');

    options.forEach((opt, i) => {
        opt.onclick = null;
        if (i === q.correct) opt.classList.add('correct');
        else if (i === index) opt.classList.add('wrong');
    });

    if (index === q.correct) score++;

    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1200);
}

function closeQuiz() {
    document.getElementById('quizModal').classList.remove('active');
}
