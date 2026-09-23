/* ========== MCQs TEST APP - Complete CSS Stylesheet ========== */

/* ========== CSS VARIABLES (Colors & Spacing) ========== */
:root {
    /* Primary Colors */
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    
    /* Secondary Colors */
    --secondary-color: #ec4899;
    --secondary-dark: #be185d;
    
    /* Success & Warning Colors */
    --success-color: #10b981;
    --success-light: #d1fae5;
    --error-color: #ef4444;
    --error-light: #fee2e2;
    --warning-color: #f59e0b;
    
    /* Neutral Colors */
    --bg-color: #f9fafb;
    --white: #ffffff;
    --gray-dark: #1f2937;
    --gray-light: #e5e7eb;
    --gray-lighter: #f3f4f6;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 300ms ease;
    --transition-slow: 500ms ease;
}

/* ========== RESET & BASE STYLES ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
    color: var(--gray-dark);
    min-height: 100vh;
    padding-bottom: var(--spacing-lg);
}

/* ========== TYPOGRAPHY ========== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

p {
    line-height: 1.6;
    color: var(--gray-dark);
}

/* ========== MAIN CONTAINER ========== */
.main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-md);
    min-height: calc(100vh - 120px);
}

/* ========== NAVIGATION BAR ========== */
.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.navbar-menu {
    display: flex;
    gap: var(--spacing-xl);
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: var(--gray-dark);
    font-weight: 500;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
    background: rgba(99, 102, 241, 0.1);
}

/* ========== SECTIONS ========== */
.section {
    display: none;
    animation: fadeIn var(--transition-normal);
}

.section.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========== HOME SECTION ========== */
#home-section {
    padding: var(--spacing-lg) var(--spacing-md);
}

.home-content {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-xl);
    max-width: 900px;
    margin: 0 auto;
}

.hero-section {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.app-title {
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
    font-size: clamp(2rem, 5vw, 3rem);
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.app-subtitle {
    font-size: 1.25rem;
    color: var(--gray-dark);
    opacity: 0.8;
}

/* ========== SUBJECT CARDS ========== */
.subjects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}

.subject-card {
    background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    user-select: none;
    position: relative;
    overflow: hidden;
}

.subject-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left var(--transition-normal);
}

.subject-card:hover::before {
    left: 100%;
}

.subject-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--white);
}

.subject-card:active {
    transform: translateY(-4px);
}

.subject-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.subject-name {
    color: var(--white);
    margin-bottom: var(--spacing-sm);
    font-size: 1.25rem;
}

.subject-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    margin: 0;
}

/* ========== BUTTONS ========== */
.action-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: var(--spacing-md) var(--spacing-xl);
    border: none;
    border-radius: var(--radius-lg);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-fast);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    min-height: 44px;
    min-width: 120px;
    box-shadow: var(--shadow-md);
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width var(--transition-normal), height var(--transition-normal);
}

.btn:active::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: var(--white);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-secondary {
    background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
    color: var(--white);
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary:active {
    transform: translateY(0);
}

.btn-outline {
    background: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-outline:hover {
    background: var(--primary-color);
    color: var(--white);
}

.btn-submit {
    background: linear-gradient(135deg, var(--success-color), #059669);
    color: var(--white);
    width: 100%;
    margin-top: var(--spacing-lg);
}

.btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

/* ========== TEST SECTION ========== */
.test-container {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-xl);
    max-width: 900px;
    margin: 0 auto;
    animation: slideUp 0.4s ease;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Test Header */
.test-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--spacing-lg);
    border-bottom: 2px solid var(--gray-lighter);
    margin-bottom: var(--spacing-lg);
    flex-wrap: wrap;
    gap: var(--spacing-md);
}

.test-info {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-color);
}

.timer-section {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 1.1rem;
}

.timer-label {
    font-weight: 600;
    color: var(--gray-dark);
}

.timer {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    font-family: 'Courier New', monospace;
    min-width: 60px;
}

.timer.warning {
    color: var(--warning-color);
    animation: pulse 1s ease-in-out infinite;
}

.timer.critical {
    color: var(--error-color);
    animation: pulse 0.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

/* Progress Bar */
.progress-container {
    width: 100%;
    height: 6px;
    background: var(--gray-lighter);
    border-radius: var(--radius-full);
    margin-bottom: var(--spacing-lg);
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
    border-radius: var(--radius-full);
    width: 0%;
    transition: width var(--transition-normal);
}

/* Question Card */
.question-card {
    margin-bottom: var(--spacing-xl);
}

.question-section {
    margin-bottom: var(--spacing-xl);
}

.question-text {
    color: var(--gray-dark);
    font-size: 1.3rem;
    line-height: 1.6;
    padding: var(--spacing-lg);
    background: var(--gray-lighter);
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--primary-color);
}

/* Options Container */
.options-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.option {
    display: flex;
    align-items: flex-start;
    padding: var(--spacing-md);
    border: 2px solid var(--gray-light);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-fast);
    background: var(--white);
    position: relative;
    user-select: none;
}

.option:hover {
    border-color: var(--primary-color);
    background: rgba(99, 102, 241, 0.05);
}

.option-radio {
    width: 20px;
    height: 20px;
    min-width: 20px;
    margin-right: var(--spacing-md);
    margin-top: 2px;
    cursor: pointer;
    accent-color: var(--primary-color);
}

.option-label {
    flex: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.option-text {
    font-size: 1rem;
    color: var(--gray-dark);
    line-height: 1.5;
}

.option input:checked ~ .option-label {
    color: var(--primary-color);
    font-weight: 600;
}

.option input:checked {
    border-color: var(--primary-color);
}

.option.correct-option {
    border-color: var(--success-color);
    background: var(--success-light);
}

.option.correct-option .option-text {
    color: var(--success-color);
    font-weight: 600;
}

.option.wrong-option {
    border-color: var(--error-color);
    background: var(--error-light);
}

.option.wrong-option .option-text {
    color: var(--error-color);
    font-weight: 600;
}

/* Test Footer */
.test-footer {
    display: grid;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
}

.question-navigator {
    padding: var(--spacing-md);
    background: var(--gray-lighter);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.navigator-label {
    font-weight: 600;
    color: var(--gray-dark);
    white-space: nowrap;
}

.question-buttons {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
}

.question-btn {
    width: 36px;
    height: 36px;
    border: 2px solid var(--gray-light);
    background: var(--white);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-weight: 600;
    color: var(--gray-dark);
    transition: all var(--transition-fast);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.question-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.question-btn.active {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
}

.question-btn.answered {
    background: var(--success-color);
    color: var(--white);
    border-color: var(--success-color);
}

.control-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
}

.submit-section {
    margin-top: var(--spacing-lg);
}

/* ========== RESULTS SECTION ========== */
.results-container {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-xl);
    max-width: 900px;
    margin: 0 auto;
    animation: slideUp 0.4s ease;
}

.results-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.results-title {
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
}

.results-subtitle {
    color: var(--gray-dark);
    opacity: 0.8;
    font-size: 1.1rem;
}

/* Score Card */
.score-card {
    background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
    box-shadow: var(--shadow-lg);
}

.score-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2xl);
    flex-wrap: wrap;
}

.score-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    animation: scaleUp 0.6s ease;
}

@keyframes scaleUp {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.score-percentage {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--white);
    text-align: center;
}

.score-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.score-text {
    color: var(--white);
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
}

/* Results Summary */
.results-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
    padding: var(--spacing-lg);
    background: var(--gray-lighter);
    border-radius: var(--radius-lg);
}

.result-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: var(--white);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--primary-color);
    text-align: center;
}

.result-label {
    color: var(--gray-dark);
    font-weight: 600;
    font-size: 0.95rem;
}

.result-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
}

.result-value.correct {
    color: var(--success-color);
    border-color: var(--success-color);
}

.result-value.wrong {
    color: var(--error-color);
    border-color: var(--error-color);
}

.result-value.unanswered {
    color: var(--warning-color);
    border-color: var(--warning-color);
}

.result-value.percentage {
    color: var(--primary-color);
    border-color: var(--primary-color);
}

/* Answer Review */
.answer-review {
    margin-bottom: var(--spacing-2xl);
}

.review-title {
    color: var(--primary-color);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 2px solid var(--gray-lighter);
}

.review-list {
    display: grid;
    gap: var(--spacing-md);
    max-height: 500px;
    overflow-y: auto;
    padding-right: var(--spacing-md);
}

.review-item {
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    background: var(--gray-lighter);
    border-left: 4px solid var(--gray-light);
}

.review-item.correct {
    background: var(--success-light);
    border-color: var(--success-color);
}

.review-item.wrong {
    background: var(--error-light);
    border-color: var(--error-color);
}

.review-item.unanswered {
    background: #fef3c7;
    border-color: var(--warning-color);
}

.review-question {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
}

.review-question strong {
    color: var(--gray-dark);
    flex: 1;
}

.review-status {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: 0.85rem;
    white-space: nowrap;
}

.review-item.correct .review-status {
    background: var(--success-color);
    color: var(--white);
}

.review-item.wrong .review-status {
    background: var(--error-color);
    color: var(--white);
}

.review-item.unanswered .review-status {
    background: var(--warning-color);
    color: var(--white);
}

.review-options {
    font-size: 0.95rem;
    color: var(--gray-dark);
    line-height: 1.6;
}

.review-options p {
    margin: var(--spacing-xs) 0;
}

/* Results Actions */
.results-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
}

/* ========== FOOTER ========== */
.footer {
    background: rgba(0, 0, 0, 0.1);
    color: var(--white);
    text-align: center;
    padding: var(--spacing-lg);
    margin-top: var(--spacing-2xl);
}

.footer p {
    color: var(--white);
    margin: 0;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablets (768px and up) */
@media (min-width: 768px) {
    .navbar-container {
        padding: var(--spacing-lg) var(--spacing-2xl);
    }
    
    .main-container {
        padding: var(--spacing-lg) var(--spacing-md);
    }
    
    .subjects-container {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-xl);
    }
    
    .control-buttons {
        grid-template-columns: 1fr 1fr;
    }
    
    .results-actions {
        grid-template-columns: 1fr 1fr;
    }
}

/* Laptops (1024px and up) */
@media (min-width: 1024px) {
    .subjects-container {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .test-container {
        padding: var(--spacing-2xl);
    }
    
    .results-container {
        padding: var(--spacing-2xl);
    }
}

/* Small phones (320px) */
@media (max-width: 480px) {
    html {
        font-size: 14px;
    }
    
    .navbar-container {
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .navbar-menu {
        gap: var(--spacing-md);
    }
    
    .app-title {
        font-size: 1.8rem;
    }
    
    .subjects-container {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }
    
    .action-buttons {
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .btn {
        width: 100%;
    }
    
    .test-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .control-buttons {
        grid-template-columns: 1fr;
    }
    
    .question-navigator {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .question-buttons {
        width: 100%;
    }
    
    .results-actions {
        grid-template-columns: 1fr;
    }
    
    .score-circle {
        width: 150px;
        height: 150px;
    }
    
    .score-percentage {
        font-size: 2.5rem;
    }
    
    .results-summary {
        grid-template-columns: 1fr 1fr;
    }
    
    .home-content {
        padding: var(--spacing-lg);
    }
}

/* Large screens (1920px and up) */
@media (min-width: 1920px) {
    .main-container {
        max-width: 1400px;
    }
    
    .test-container,
    .results-container,
    .home-content {
        max-width: 1000px;
    }
}

/* ========== ACCESSIBILITY ========== */

/* High contrast mode support */
@media (prefers-contrast: more) {
    .subject-card {
        border: 2px solid var(--white);
    }
    
    .btn {
        border: 2px solid currentColor;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Focus styles for keyboard navigation */
.btn:focus-visible,
.nav-link:focus-visible,
.option-radio:focus-visible,
.question-btn:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}

/* ========== PRINT STYLES ========== */
@media print {
    body {
        background: var(--white);
    }
    
    .navbar,
    .footer,
    .btn {
        display: none;
    }
    
    .main-container {
        max-width: 100%;
    }
}

/* ========== SCROLLBAR STYLING ========== */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--gray-lighter);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}
