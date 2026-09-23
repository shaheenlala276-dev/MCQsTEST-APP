// ========== MCQs TEST APP - Complete JavaScript File ==========

// ========== QUESTIONS DATABASE ==========
const questionDatabase = {
    "Computer Science": [
        {
            question: "What does 'CPU' stand for?",
            options: ["Central Process Unit", "Central Processing Unit", "Core Processing Unit", "Central Processor Utility"],
            correct: 1
        },
        {
            question: "Which of the following is not a programming language?",
            options: ["Python", "Java", "HTML", "C++"],
            correct: 2
        },
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
            correct: 2
        },
        {
            question: "Which data structure uses LIFO (Last In First Out)?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            correct: 1
        },
        {
            question: "What is the purpose of a compiler?",
            options: ["Run code directly", "Translate high-level code to machine code", "Store data", "Manage memory"],
            correct: 1
        },
        {
            question: "Which sorting algorithm is fastest on average?",
            options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
            correct: 1
        },
        {
            question: "What does 'RAM' stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Rapid Access Module", "Random Array Memory"],
            correct: 0
        },
        {
            question: "Which of these is a backend programming language?",
            options: ["HTML", "CSS", "Python", "JavaScript only"],
            correct: 2
        },
        {
            question: "What is the main purpose of HTML?",
            options: ["Styling web pages", "Creating structure of web pages", "Adding interactivity", "Managing databases"],
            correct: 1
        },
        {
            question: "What does 'API' stand for?",
            options: ["Application Programming Interface", "Advanced Programming Instruction", "Application Process Integration", "Automated Programming Interface"],
            correct: 0
        },
        {
            question: "Which is not a NoSQL database?",
            options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
            correct: 1
        },
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: ["They are the same", "'==' compares value, '===' compares type and value", "'===' compares value, '==' compares type", "There is no '===' operator"],
            correct: 1
        }
    ],
    "Mathematics": [
        {
            question: "What is the value of π (pi) approximately?",
            options: ["2.14", "3.14", "4.14", "5.14"],
            correct: 1
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            question: "If x + 5 = 12, what is the value of x?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            correct: 2
        },
        {
            question: "Which number is prime?",
            options: ["9", "15", "17", "21"],
            correct: 2
        },
        {
            question: "What is the area of a circle with radius 5?",
            options: ["25π", "15π", "10π", "5π"],
            correct: 0
        },
        {
            question: "What is 5! (factorial)?",
            options: ["25", "100", "120", "150"],
            correct: 2
        },
        {
            question: "What is the sum of all angles in a triangle?",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1
        },
        {
            question: "What is the slope of a vertical line?",
            options: ["0", "1", "Undefined", "-1"],
            correct: 2
        },
        {
            question: "What is the cube root of 27?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "What is log₁₀(100)?",
            options: ["1", "2", "10", "100"],
            correct: 1
        },
        {
            question: "What is the derivative of x²?",
            options: ["x", "2x", "x²", "2"],
            correct: 1
        }
    ],
    "Physics": [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1
        },
        {
            question: "The speed of light in vacuum is approximately:",
            options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
            correct: 1
        },
        {
            question: "Which law states that F = ma?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
            correct: 1
        },
        {
            question: "What is the SI unit of energy?",
            options: ["Erg", "Joule", "Calorie", "Watt"],
            correct: 1
        },
        {
            question: "Acceleration due to gravity on Earth is approximately:",
            options: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
            correct: 1
        },
        {
            question: "What is the formula for kinetic energy?",
            options: ["mgh", "½mv²", "mg", "m²v"],
            correct: 1
        },
        {
            question: "What is Planck's constant approximately?",
            options: ["6.62 × 10⁻³⁴ J·s", "6.62 × 10⁻³² J·s", "6.62 × 10³⁴ J·s", "6.62 × 10³² J·s"],
            correct: 0
        },
        {
            question: "What is the SI unit of pressure?",
            options: ["Joule", "Newton", "Pascal", "Bar"],
            correct: 2
        },
        {
            question: "Boyle's Law relates which properties?",
            options: ["Pressure and Volume", "Temperature and Volume", "Pressure and Temperature", "All of the above"],
            correct: 0
        },
        {
            question: "What is the speed of sound in air?",
            options: ["100 m/s", "200 m/s", "340 m/s", "500 m/s"],
            correct: 2
        },
        {
            question: "What is the SI unit of frequency?",
            options: ["Hertz", "Watt", "Joule", "Newton"],
            correct: 0
        },
        {
            question: "Einstein's mass-energy equation is:",
            options: ["E = mc", "E = mc²", "E = m²c", "E = mc³"],
            correct: 1
        }
    ],
    "English": [
        {
            question: "Which of these is a noun?",
            options: ["Run", "Beautiful", "Happy", "Book"],
            correct: 3
        },
        {
            question: "What is the opposite of 'hot'?",
            options: ["Warm", "Cold", "Cool", "Freezing"],
            correct: 1
        },
        {
            question: "Choose the correct spelling:",
            options: ["Definately", "Definatly", "Definitely", "Definitly"],
            correct: 2
        },
        {
            question: "Which word is an adjective?",
            options: ["Walk", "Quick", "Run", "Jump"],
            correct: 1
        },
        {
            question: "What is a synonym for 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correct: 1
        },
        {
            question: "Choose the correct sentence:",
            options: ["She go to school", "She goes to school", "She going to school", "She gone to school"],
            correct: 1
        },
        {
            question: "Which of these is a verb?",
            options: ["Happy", "Run", "Blue", "Table"],
            correct: 1
        },
        {
            question: "What is an antonym for 'small'?",
            options: ["Tiny", "Large", "Compact", "Miniature"],
            correct: 1
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["I have went there", "I has gone there", "I have gone there", "I go there yesterday"],
            correct: 2
        },
        {
            question: "What is a pronoun?",
            options: ["A word that describes nouns", "A word that replaces a noun", "A word that shows action", "A word that connects clauses"],
            correct: 1
        },
        {
            question: "Choose the correct verb tense:",
            options: ["She is playing now", "She are playing now", "She be playing now", "She playing now"],
            correct: 0
        },
        {
            question: "Which word is a preposition?",
            options: ["Beautiful", "Under", "Quickly", "Run"],
            correct: 1
        }
    ]
};

// ========== APP STATE ==========
const appState = {
    selectedSubject: null,
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: {},
    timerInterval: null,
    timeRemaining: 600,
    isPracticeMode: false,
    testStarted: false,
    testSubmitted: false,
    results: null
};

// ========== DOM ELEMENTS REFERENCE ==========
const dom = {
    // Home Section
    homeSection: document.getElementById('home-section'),
    subjectCs: document.getElementById('subject-cs'),
    subjectMath: document.getElementById('subject-math'),
    subjectPhysics: document.getElementById('subject-physics'),
    subjectEnglish: document.getElementById('subject-english'),
    startTestBtn: document.getElementById('start-test-btn'),
    practiceModeBtn: document.getElementById('practice-mode-btn'),
    
    // Test Section
    testSection: document.getElementById('test-section'),
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    questionText: document.getElementById('question-text'),
    option1: document.getElementById('option-1'),
    option2: document.getElementById('option-2'),
    option3: document.getElementById('option-3'),
    option4: document.getElementById('option-4'),
    option1Radio: document.getElementById('option-1-radio'),
    option2Radio: document.getElementById('option-2-radio'),
    option3Radio: document.getElementById('option-3-radio'),
    option4Radio: document.getElementById('option-4-radio'),
    option1Text: document.getElementById('option-1-text'),
    option2Text: document.getElementById('option-2-text'),
    option3Text: document.getElementById('option-3-text'),
    option4Text: document.getElementById('option-4-text'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    questionButtons: document.getElementById('question-buttons'),
    previousBtn: document.getElementById('previous-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitTestBtn: document.getElementById('submit-test-btn'),
    
    // Results Section
    resultsSection: document.getElementById('results-section'),
    scorePercentage: document.getElementById('score-percentage'),
    correctAnswers: document.getElementById('correct-answers'),
    totalAnswers: document.getElementById('total-answers'),
    displayCorrect: document.getElementById('display-correct'),
    displayWrong: document.getElementById('display-wrong'),
    displayUnanswered: document.getElementById('display-unanswered'),
    displayPercentage: document.getElementById('display-percentage'),
    reviewList: document.getElementById('review-list'),
    restartTestBtn: document.getElementById('restart-test-btn'),
    backHomeBtn: document.getElementById('back-home-btn'),
    
    // Navigation
    navHome: document.getElementById('nav-home'),
    navResults: document.getElementById('nav-results')
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Show a specific section
 */
function showSection(sectionName) {
    // Hide all sections
    if (dom.homeSection) dom.homeSection.classList.remove('active');
    if (dom.testSection) dom.testSection.classList.remove('active');
    if (dom.resultsSection) dom.resultsSection.classList.remove('active');
    
    // Show selected section
    if (sectionName === 'home' && dom.homeSection) {
        dom.homeSection.classList.add('active');
    } else if (sectionName === 'test' && dom.testSection) {
        dom.testSection.classList.add('active');
    } else if (sectionName === 'results' && dom.resultsSection) {
        dom.resultsSection.classList.add('active');
    }
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Format seconds to MM:SS
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Check if DOM elements exist
 */
function validateDOM() {
    return dom.homeSection && dom.testSection && dom.resultsSection;
}

// ========== SUBJECT SELECTION ==========

/**
 * Select a subject
 */
function selectSubject(subject) {
    if (!questionDatabase[subject]) {
        alert('Subject not found');
        return;
    }
    
    appState.selectedSubject = subject;
    appState.questions = [...questionDatabase[subject]];
    appState.questions = shuffleArray(appState.questions);
    
    // Update subject card visuals
    updateSubjectSelection(subject);
}

/**
 * Update visual indication of selected subject
 */
function updateSubjectSelection(subject) {
    // Remove previous selection
    [dom.subjectCs, dom.subjectMath, dom.subjectPhysics, dom.subjectEnglish].forEach(card => {
        if (card) card.style.border = '';
    });
    
    // Add selection to current subject
    const subjectMap = {
        'Computer Science': dom.subjectCs,
        'Mathematics': dom.subjectMath,
        'Physics': dom.subjectPhysics,
        'English': dom.subjectEnglish
    };
    
    if (subjectMap[subject]) {
        subjectMap[subject].style.border = '3px solid white';
    }
}

// ========== SUBJECT CARD EVENT LISTENERS ==========

/**
 * Attach subject selection listeners
 */
function attachSubjectListeners() {
    if (dom.subjectCs) {
        dom.subjectCs.addEventListener('click', () => selectSubject('Computer Science'));
    }
    if (dom.subjectMath) {
        dom.subjectMath.addEventListener('click', () => selectSubject('Mathematics'));
    }
    if (dom.subjectPhysics) {
        dom.subjectPhysics.addEventListener('click', () => selectSubject('Physics'));
    }
    if (dom.subjectEnglish) {
        dom.subjectEnglish.addEventListener('click', () => selectSubject('English'));
    }
}

// ========== TEST START ==========

/**
 * Start test button click handler
 */
function handleStartTest() {
    if (!appState.selectedSubject) {
        alert('Please select a subject first');
        return;
    }
    
    appState.isPracticeMode = false;
    initializeTest();
}

/**
 * Practice mode button click handler
 */
function handlePracticeMode() {
    if (!appState.selectedSubject) {
        alert('Please select a subject first');
        return;
    }
    
    appState.isPracticeMode = true;
    initializeTest();
}

/**
 * Initialize test
 */
function initializeTest() {
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.timeRemaining = 600;
    appState.testStarted = true;
    appState.testSubmitted = false;
    
    if (dom.totalQuestions) {
        dom.totalQuestions.textContent = appState.questions.length;
    }
    
    displayQuestion();
    generateQuestionButtons();
    showSection('test');
    
    if (!appState.isPracticeMode) {
        startTimer();
    } else {
        if (dom.timer) {
            dom.timer.textContent = 'Practice Mode';
        }
    }
    
    updateProgressBar();
}

// ========== QUESTION DISPLAY ==========

/**
 * Display current question
 */
function displayQuestion() {
    if (!appState.questions || appState.questions.length === 0) {
        alert('No questions available');
        return;
    }
    
    const question = appState.questions[appState.currentQuestionIndex];
    
    // Update question counter
    if (dom.currentQuestion) {
        dom.currentQuestion.textContent = appState.currentQuestionIndex + 1;
    }
    
    // Display question text
    if (dom.questionText) {
        dom.questionText.textContent = question.question;
    }
    
    // Display options
    const optionTexts = [dom.option1Text, dom.option2Text, dom.option3Text, dom.option4Text];
    const optionRadios = [dom.option1Radio, dom.option2Radio, dom.option3Radio, dom.option4Radio];
    const optionDivs = [dom.option1, dom.option2, dom.option3, dom.option4];
    
    optionTexts.forEach((optionEl, index) => {
        if (optionEl) {
            optionEl.textContent = question.options[index];
        }
    });
    
    // Reset radio buttons
    optionRadios.forEach((radio) => {
        if (radio) {
            radio.checked = false;
            radio.parentElement?.classList.remove('correct-option', 'wrong-option');
        }
    });
    
    // Remove highlight classes
    optionDivs.forEach((optionDiv) => {
        if (optionDiv) {
            optionDiv.classList.remove('correct-option', 'wrong-option');
        }
    });
    
    // Restore user's previous answer if exists
    if (appState.userAnswers[appState.currentQuestionIndex] !== undefined) {
        const selectedIndex = appState.userAnswers[appState.currentQuestionIndex];
        if (optionRadios[selectedIndex]) {
            optionRadios[selectedIndex].checked = true;
        }
    }
    
    // In practice mode, show correct/wrong answers
    if (appState.isPracticeMode) {
        highlightPracticeMode(question);
    }
    
    // Update button states
    updateNavigationButtonStates();
}

/**
 * Highlight correct/wrong answers in practice mode
 */
function highlightPracticeMode(question) {
    const selectedIndex = appState.userAnswers[appState.currentQuestionIndex];
    const correctIndex = question.correct;
    
    if (selectedIndex === undefined) {
        return;
    }
    
    const optionDivs = [dom.option1, dom.option2, dom.option3, dom.option4];
    
    optionDivs.forEach((optionDiv, index) => {
        if (optionDiv) {
            optionDiv.classList.remove('correct-option', 'wrong-option');
            
            if (index === correctIndex) {
                optionDiv.classList.add('correct-option');
            }
            if (index === selectedIndex && selectedIndex !== correctIndex) {
                optionDiv.classList.add('wrong-option');
            }
        }
    });
}

/**
 * Update navigation button states
 */
function updateNavigationButtonStates() {
    const isFirstQuestion = appState.currentQuestionIndex === 0;
    const isLastQuestion = appState.currentQuestionIndex === appState.questions.length - 1;
    
    if (dom.previousBtn) {
        dom.previousBtn.disabled = isFirstQuestion;
    }
    if (dom.nextBtn) {
        dom.nextBtn.disabled = isLastQuestion;
    }
}

// ========== QUESTION NAVIGATION BUTTONS ==========

/**
 * Generate question number buttons
 */
function generateQuestionButtons() {
    if (!dom.questionButtons) return;
    
    dom.questionButtons.innerHTML = '';
    
    for (let i = 0; i < appState.questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.textContent = i + 1;
        btn.id = `q-btn-${i}`;
        
        if (i === appState.currentQuestionIndex) {
            btn.classList.add('active');
        }
        
        if (appState.userAnswers[i] !== undefined) {
            btn.classList.add('answered');
        }
        
        btn.addEventListener('click', () => {
            appState.currentQuestionIndex = i;
            displayQuestion();
            generateQuestionButtons();
            updateProgressBar();
        });
        
        dom.questionButtons.appendChild(btn);
    }
}

// ========== ANSWER SELECTION ==========

/**
 * Handle answer selection
 */
function attachAnswerListeners() {
    const optionRadios = [dom.option1Radio, dom.option2Radio, dom.option3Radio, dom.option4Radio];
    
    optionRadios.forEach((radio, index) => {
        if (radio) {
            radio.addEventListener('change', () => {
                appState.userAnswers[appState.currentQuestionIndex] = index;
                generateQuestionButtons();
                
                // In practice mode, show result immediately
                if (appState.isPracticeMode) {
                    displayQuestion();
                }
            });
        }
    });
}

// ========== NAVIGATION ==========

/**
 * Go to next question
 */
function nextQuestion() {
    if (appState.currentQuestionIndex < appState.questions.length - 1) {
        appState.currentQuestionIndex++;
        displayQuestion();
        generateQuestionButtons();
        updateProgressBar();
    }
}

/**
 * Go to previous question
 */
function previousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        displayQuestion();
        generateQuestionButtons();
        updateProgressBar();
    }
}

// ========== TIMER ==========

/**
 * Start timer
 */
function startTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }
    
    appState.timerInterval = setInterval(() => {
        appState.timeRemaining--;
        
        if (dom.timer) {
            dom.timer.textContent = formatTime(appState.timeRemaining);
            
            // Remove all warning classes
            dom.timer.classList.remove('warning', 'critical');
            
            // Add warning at 2 minutes
            if (appState.timeRemaining <= 120 && appState.timeRemaining > 60) {
                dom.timer.classList.add('warning');
            }
            
            // Add critical at 1 minute
            if (appState.timeRemaining <= 60) {
                dom.timer.classList.add('critical');
            }
        }
        
        // Auto-submit when time is up
        if (appState.timeRemaining <= 0) {
            stopTimer();
            submitTest();
        }
    }, 1000);
}

/**
 * Stop timer
 */
function stopTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
    }
}

// ========== PROGRESS BAR ==========

/**
 * Update progress bar
 */
function updateProgressBar() {
    if (!dom.progressBar) return;
    
    const totalQuestions = appState.questions.length;
    const progressPercentage = ((appState.currentQuestionIndex + 1) / totalQuestions) * 100;
    
    dom.progressBar.style.width = progressPercentage + '%';
}

// ========== SUBMIT TEST ==========

/**
 * Submit test
 */
function submitTest() {
    if (!appState.testStarted) {
        alert('Please start a test first');
        return;
    }
    
    stopTimer();
    appState.testSubmitted = true;
    calculateResults();
    displayResults();
    showSection('results');
}

/**
 * Calculate test results
 */
function calculateResults() {
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    
    appState.questions.forEach((question, index) => {
        if (appState.userAnswers[index] === undefined) {
            unansweredCount++;
        } else if (appState.userAnswers[index] === question.correct) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });
    
    const totalQuestions = appState.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    appState.results = {
        correct: correctCount,
        wrong: wrongCount,
        unanswered: unansweredCount,
        percentage: percentage,
        total: totalQuestions
    };
}

// ========== RESULTS DISPLAY ==========

/**
 * Display results
 */
function displayResults() {
    const results = appState.results;
    
    if (!results) return;
    
    // Update score percentage
    if (dom.scorePercentage) {
        dom.scorePercentage.textContent = results.percentage + '%';
    }
    
    // Update score display
    if (dom.correctAnswers) {
        dom.correctAnswers.textContent = results.correct;
    }
    if (dom.totalAnswers) {
        dom.totalAnswers.textContent = results.total;
    }
    
    // Update summary
    if (dom.displayCorrect) {
        dom.displayCorrect.textContent = results.correct;
    }
    if (dom.displayWrong) {
        dom.displayWrong.textContent = results.wrong;
    }
    if (dom.displayUnanswered) {
        dom.displayUnanswered.textContent = results.unanswered;
    }
    if (dom.displayPercentage) {
        dom.displayPercentage.textContent = results.percentage + '%';
    }
    
    // Display answer review
    displayAnswerReview();
}

/**
 * Display answer review
 */
function displayAnswerReview() {
    if (!dom.reviewList) return;
    
    dom.reviewList.innerHTML = '';
    
    appState.questions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const userAnswer = appState.userAnswers[index];
        const correctIndex = question.correct;
        const isCorrect = userAnswer === correctIndex;
        const isUnanswered = userAnswer === undefined;
        
        // Add status class
        if (isUnanswered) {
            reviewItem.classList.add('unanswered');
        } else if (isCorrect) {
            reviewItem.classList.add('correct');
        } else {
            reviewItem.classList.add('wrong');
        }
        
        // Determine status text
        let statusText = 'Unanswered';
        if (!isUnanswered) {
            statusText = isCorrect ? 'Correct' : 'Wrong';
        }
        
        // Build HTML
        const reviewHTML = `
            <div class="review-question">
                <strong>Q${index + 1}: ${question.question}</strong>
                <span class="review-status">${statusText}</span>
            </div>
            <div class="review-options">
                <p><strong>Your Answer:</strong> ${isUnanswered ? 'Not answered' : question.options[userAnswer]}</p>
                <p><strong>Correct Answer:</strong> ${question.options[correctIndex]}</p>
            </div>
        `;
        
        reviewItem.innerHTML = reviewHTML;
        dom.reviewList.appendChild(reviewItem);
    });
}

// ========== RESTART AND HOME ==========

/**
 * Restart test
 */
function restartTest() {
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.timeRemaining = 600;
    appState.testStarted = false;
    appState.testSubmitted = false;
    stopTimer();
    
    // Keep subject selected
    appState.questions = [...questionDatabase[appState.selectedSubject]];
    appState.questions = shuffleArray(appState.questions);
    
    initializeTest();
}

/**
 * Go back to home
 */
function backToHome() {
    stopTimer();
    appState.selectedSubject = null;
    appState.currentQuestionIndex = 0;
    appState.questions = [];
    appState.userAnswers = {};
    appState.testStarted = false;
    appState.testSubmitted = false;
    
    // Remove subject selection visuals
    [dom.subjectCs, dom.subjectMath, dom.subjectPhysics, dom.subjectEnglish].forEach(card => {
        if (card) card.style.border = '';
    });
    
    showSection('home');
}

// ========== NAVIGATION LINKS ==========

/**
 * Handle navigation links
 */
function attachNavigationListeners() {
    if (dom.navHome) {
        dom.navHome.addEventListener('click', (e) => {
            e.preventDefault();
            backToHome();
        });
    }
    
    if (dom.navResults) {
        dom.navResults.addEventListener('click', (e) => {
            e.preventDefault();
            if (appState.testSubmitted) {
                showSection('results');
            } else {
                alert('Please complete a test first to view results');
            }
        });
    }
}

// ========== EVENT LISTENERS ==========

/**
 * Attach all event listeners
 */
function attachEventListeners() {
    // Subject selection
    attachSubjectListeners();
    
    // Start and practice buttons
    if (dom.startTestBtn) {
        dom.startTestBtn.addEventListener('click', handleStartTest);
    }
    if (dom.practiceModeBtn) {
        dom.practiceModeBtn.addEventListener('click', handlePracticeMode);
    }
    
    // Navigation buttons
    if (dom.previousBtn) {
        dom.previousBtn.addEventListener('click', previousQuestion);
    }
    if (dom.nextBtn) {
        dom.nextBtn.addEventListener('click', nextQuestion);
    }
    
    // Submit button
    if (dom.submitTestBtn) {
        dom.submitTestBtn.addEventListener('click', submitTest);
    }
    
    // Results buttons
    if (dom.restartTestBtn) {
        dom.restartTestBtn.addEventListener('click', restartTest);
    }
    if (dom.backHomeBtn) {
        dom.backHomeBtn.addEventListener('click', backToHome);
    }
    
    // Navigation links
    attachNavigationListeners();
    
    // Answer selection
    attachAnswerListeners();
}

// ========== INITIALIZATION ==========

/**
 * Initialize the app
 */
function initializeApp() {
    if (!validateDOM()) {
        console.error('Required DOM elements not found');
        return;
    }
    
    attachEventListeners();
    showSection('home');
    console.log('MCQs Test App initialized successfully');
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
