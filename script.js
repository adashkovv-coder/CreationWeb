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

// ==================== СОЗВЕЗДИЕ ====================
(function () {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let drawing = false;
    let lastPoint = null;
    let dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        generateStars();
    }

    function generateStars() {
        stars = [];
        const rect = canvas.getBoundingClientRect();
        const count = Math.floor((rect.width * rect.height) / 4000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                r: Math.random() * 1.5 + 0.3,
                twinkle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function drawStars() {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        const grad = ctx.createRadialGradient(
            rect.width / 2, rect.height / 2, 0,
            rect.width / 2, rect.height / 2, rect.width
        );
        grad.addColorStop(0, '#0a1a3a');
        grad.addColorStop(1, '#000000');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, rect.width, rect.height);

        stars.forEach(s => {
            s.twinkle += s.speed;
            const alpha = 0.5 + Math.sin(s.twinkle) * 0.5;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 220, 255, ' + alpha + ')';
            ctx.shadowColor = 'rgba(106, 165, 255, ' + alpha + ')';
            ctx.shadowBlur = 8;
            ctx.fill();
        });
        ctx.shadowBlur = 0;
    }

    function drawLine(from, to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(150, 200, 255, 0.9)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(106, 165, 255, 1)';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(to.x, to.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220, 235, 255, 1)';
        ctx.shadowColor = 'rgba(106, 165, 255, 1)';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    function animate() {
        drawStars();
        requestAnimationFrame(animate);
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function startDraw(e) {
        e.preventDefault();
        drawing = true;
        lastPoint = getPos(e);
    }

    function drawMove(e) {
        if (!drawing) return;
        e.preventDefault();
        const pos = getPos(e);
        if (lastPoint) drawLine(lastPoint, pos);
        lastPoint = pos;
    }

    function endDraw(e) {
        e.preventDefault();
        drawing = false;
        lastPoint = null;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', drawMove);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseleave', endDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', drawMove, { passive: false });
    canvas.addEventListener('touchend', endDraw, { passive: false });
    canvas.addEventListener('touchcancel', endDraw, { passive: false });

    window.clearCanvas = function () {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        // Перерисовываем фон и звёзды
        drawStars();
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('load', () => {
        resizeCanvas();
        animate();
    });
})();
