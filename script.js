// ==========================================
// MCQs TEST APP - Main JavaScript
// ==========================================


// ---------- MCQ DATABASE ----------

const questionBank = {

    "Computer Science": [
        {
            question: "Which of the following is a programming language?",
            options: ["HTML", "CSS", "C++", "HTTP"],
            answer: 2,
            explanation: "C++ is a programming language used to develop many types of software."
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            answer: 0,
            explanation: "CPU stands for Central Processing Unit. It executes instructions in a computer."
        },
        {
            question: "Which data structure uses FIFO?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1,
            explanation: "A Queue follows FIFO: First In, First Out."
        },
        {
            question: "Which language is mainly used to query databases?",
            options: ["SQL", "HTML", "CSS", "XML"],
            answer: 0,
            explanation: "SQL stands for Structured Query Language and is used to work with databases."
        },
        {
            question: "What is the binary representation of decimal 5?",
            options: ["100", "101", "110", "111"],
            answer: 1,
            explanation: "Decimal 5 is represented as 101 in binary."
        }
    ],


    "Mathematics": [
        {
            question: "What is 5 × 6?",
            options: ["20", "25", "30", "35"],
            answer: 2,
            explanation: "5 × 6 = 30."
        },
        {
            question: "What is the value of 2²?",
            options: ["2", "4", "6", "8"],
            answer: 1,
            explanation: "2² means 2 × 2 = 4."
        },
        {
            question: "What is sin 90°?",
            options: ["0", "1", "-1", "1/2"],
            answer: 1,
            explanation: "The value of sin 90° is 1."
        },
        {
            question: "What is the derivative of x²?",
            options: ["x", "2x", "x²", "2"],
            answer: 1,
            explanation: "Using the power rule, the derivative of x² is 2x."
        },
        {
            question: "What is the value of 10 + 15?",
            options: ["20", "25", "30", "35"],
            answer: 1,
            explanation: "10 + 15 = 25."
        }
    ],


    "Physics": [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            answer: 2,
            explanation: "The SI unit of force is Newton (N)."
        },
        {
            question: "What is the formula for speed?",
            options: [
                "Distance × Time",
                "Distance / Time",
                "Time / Distance",
                "Mass × Acceleration"
            ],
            answer: 1,
            explanation: "Speed = Distance ÷ Time."
        },
        {
            question: "What is the SI unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            answer: 2,
            explanation: "Electric current is measured in Ampere (A)."
        },
        {
            question: "Who gave the three laws of motion?",
            options: [
                "Albert Einstein",
                "Isaac Newton",
                "Galileo Galilei",
                "James Watt"
            ],
            answer: 1,
            explanation: "Isaac Newton formulated the three laws of motion."
        },
        {
            question: "What is the SI unit of energy?",
            options: ["Newton", "Joule", "Watt", "Volt"],
            answer: 1,
            explanation: "The SI unit of energy is Joule (J)."
        }
    ],


    "English": [
        {
            question: "Choose the synonym of 'Happy'.",
            options: ["Sad", "Joyful", "Angry", "Weak"],
            answer: 1,
            explanation: "Joyful means happy."
        },
        {
            question: "Choose the antonym of 'Fast'.",
            options: ["Quick", "Rapid", "Slow", "Speedy"],
            answer: 2,
            explanation: "Slow is the opposite of fast."
        },
        {
            question: "Choose the correct sentence.",
            options: [
                "He go to school.",
                "He going to school.",
                "He goes to school.",
                "He gone to school."
            ],
            answer: 2,
            explanation: "With 'He', we use 'goes' in the simple present tense."
        },
        {
            question: "What is the plural of 'Child'?",
            options: ["Childs", "Childes", "Children", "Childrens"],
            answer: 2,
            explanation: "The correct plural form is Children."
        },
        {
            question: "Choose the correct article: ___ apple.",
            options: ["A", "An", "The", "No article"],
            answer: 1,
            explanation: "We use 'an' before a vowel sound: an apple."
        }
    ]
};


// ---------- TEST VARIABLES ----------

let selectedSubject = "";
let questions = [];
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

let timeLeft = 300;
let timer;


// ---------- START SUBJECT SELECTION ----------

function showSubjects() {

    const subjects = document.getElementById("subjects");

    if (subjects) {
        subjects.style.display = "block";
    }

    const startButton = document.querySelector(".start-btn");

    if (startButton) {
        startButton.style.display = "none";
    }
}


// ---------- SELECT SUBJECT ----------

function selectSubject(subject) {

    selectedSubject = subject;

    questions = questionBank[subject];

    if (!questions || questions.length === 0) {
        alert("No questions available for this subject yet.");
        return;
    }

    currentQuestion = 0;
    score = 0;

    userAnswers = new Array(questions.length).fill(null);

    startTest();
}


// ---------- START TEST ----------

function startTest() {

    const app = document.querySelector(".card");

    if (!app) return;

    app.innerHTML = `
        <div class="test-header">

            <div>
                <strong>${selectedSubject}</strong>
            </div>

            <div id="timer">
                ⏱️ 05:00
            </div>

        </div>

        <div id="question-area"></div>

        <div id="navigation"></div>
    `;

    startTimer();

    displayQuestion();
}


// ---------- TIMER ----------

function startTimer() {

    clearInterval(timer);

    timeLeft = 300;

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            finishTest();
        }

    }, 1000);
}


function updateTimer() {

    const timerElement = document.getElementById("timer");

    if (!timerElement) return;

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timerElement.textContent =
        "⏱️ " +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


// ---------- DISPLAY QUESTION ----------

function displayQuestion() {

    const area = document.getElementById("question-area");

    const navigation = document.getElementById("navigation");

    if (!area || !navigation) return;

    const q = questions[currentQuestion];

    let optionsHTML = "";

    q.options.forEach((option, index) => {

        const selected =
            userAnswers[currentQuestion] === index
                ? "selected"
                : "";

        optionsHTML += `
            <button
                class="answer-option ${selected}"
                onclick="selectAnswer(${index})">

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>${option}</span>

            </button>
        `;
    });


    area.innerHTML = `

        <div class="question-info">
            Question ${currentQuestion + 1} of ${questions.length}
        </div>

        <div class="question-card">

            <h2>
                ${q.question}
            </h2>

            <div class="options">
                ${optionsHTML}
            </div>

        </div>

    `;


    navigation.innerHTML = `

        <div class="nav-buttons">

            <button
                class="nav-btn"
                onclick="previousQuestion()"
                ${currentQuestion === 0 ? "disabled" : ""}>

                ◀ Previous

            </button>

            ${
                currentQuestion === questions.length - 1

                ? `
                    <button
                        class="nav-btn finish-btn"
                        onclick="finishTest()">

                        Finish ✓

                    </button>
                `

                : `
                    <button
                        class="nav-btn next-btn"
                        onclick="nextQuestion()">

                        Next ▶

                    </button>
                `
            }

        </div>


        <div class="question-numbers">

            ${questions.map((_, index) => `

                <button
                    class="number-btn
                    ${index === currentQuestion ? "active" : ""}
                    ${userAnswers[index] !== null ? "answered" : ""}"
                    onclick="goToQuestion(${index})">

                    ${index + 1}

                </button>

            `).join("")}

        </div>

    `;
}


// ---------- SELECT ANSWER ----------

function selectAnswer(answerIndex) {

    userAnswers[currentQuestion] = answerIndex;

    displayQuestion();
}


// ---------- NEXT QUESTION ----------

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();
    }

}


// ---------- PREVIOUS QUESTION ----------

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();
    }

}


// ---------- QUESTION NAVIGATION ----------

function goToQuestion(index) {

    currentQuestion = index;

    displayQuestion();
}


// ---------- FINISH TEST ----------

function finishTest() {

    clearInterval(timer);

    score = 0;

    questions.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {

            score++;
        }

    });

    showResult();
}


// ---------- RESULT SCREEN ----------

function showResult() {

    const app = document.querySelector(".card");

    if (!app) return;

    const percentage =
        Math.round((score / questions.length) * 100);

    let message;

    if (percentage >= 80) {

        message = "Excellent! 🎉";

    } else if (percentage >= 60) {

        message = "Good job! 👍";

    } else if (percentage >= 40) {

        message = "Keep practicing! 📚";

    } else {

        message = "Don't give up! 💪";
    }


    app.innerHTML = `

        <div class="result-screen">

            <div class="result-icon">
                🏆
            </div>

            <h1>Test Complete!</h1>

            <h2>${message}</h2>

            <div class="score-box">

                <div class="score">
                    ${score}/${questions.length}
                </div>

                <div class="percentage">
                    ${percentage}%
                </div>

            </div>

            <p>
                Subject: <strong>${selectedSubject}</strong>
            </p>

            <button
                class="start-btn"
                onclick="restartTest()">

                🔄 Try Again

            </button>

            <button
                class="home-btn"
                onclick="goHome()">

                🏠 Home

            </button>

        </div>

    `;
}


// ---------- RESTART ----------

function restartTest() {

    currentQuestion = 0;

    score = 0;

    userAnswers = new Array(questions.length).fill(null);

    startTest();
}


// ---------- GO HOME ----------

function goHome() {

    location.reload();

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const themeButton = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        if (themeButton) {
            themeButton.textContent = "☀️";
            themeButton.title = "Switch to Light Mode";
        }

        localStorage.setItem("theme", "dark");

    } else {

        if (themeButton) {
            themeButton.textContent = "🌙";
            themeButton.title = "Switch to Dark Mode";
        }

        localStorage.setItem("theme", "light");
    }
}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    const themeButton = document.getElementById("themeButton");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.textContent = "☀️";
            themeButton.title = "Switch to Light Mode";
        }

    }

}); 
