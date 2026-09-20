/* ================================
   GLOBAL
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f1f5f9;
    color: #0f172a;
    min-height: 100vh;
}


/* ================================
   APP
================================ */

.app {
    width: 100%;
    min-height: 100vh;
}


/* ================================
   HEADER
================================ */

.topbar {
    width: 100%;
    max-width: 1200px;
    margin: auto;

    padding: 25px 25px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}


.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}


.brand-icon {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #0f172a;
    border-radius: 14px;

    font-size: 24px;
}


.brand h2 {
    font-size: 20px;
    margin-bottom: 3px;
}


.brand span {
    font-size: 12px;
    color: #64748b;
}


.theme-btn {
    width: 44px;
    height: 44px;

    border: none;
    border-radius: 12px;

    background: white;

    font-size: 20px;

    cursor: pointer;

    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.08);

    transition: 0.2s;
}


.theme-btn:hover {
    transform: translateY(-2px);
}


/* ================================
   DASHBOARD
================================ */

.dashboard {
    max-width: 1200px;
    margin: auto;
    padding: 20px 25px 50px;
}


/* ================================
   WELCOME
================================ */

.welcome {
    min-height: 330px;

    padding: 50px;

    border-radius: 28px;

    background: #0f172a;

    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;

    position: relative;
}


.welcome::before {
    content: "";

    position: absolute;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    background: rgba(59, 130, 246, 0.15);

    right: 80px;
    top: -150px;
}


.welcome-text {
    max-width: 650px;

    position: relative;

    z-index: 2;
}


.welcome-label {
    display: inline-block;

    font-size: 12px;
    font-weight: bold;

    letter-spacing: 1px;

    color: #93c5fd;

    margin-bottom: 15px;
}


.welcome h1 {
    font-size: 48px;
    line-height: 1.1;

    margin-bottom: 18px;
}


.welcome h1 span {
    color: #60a5fa;
}


.welcome p {
    max-width: 580px;

    color: #cbd5e1;

    font-size: 16px;
    line-height: 1.7;

    margin-bottom: 28px;
}


.start-btn {
    border: none;

    background: #3b82f6;
    color: white;

    padding: 15px 25px;

    border-radius: 12px;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.25s;

    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}


.start-btn:hover {
    transform: translateY(-3px);
    background: #2563eb;
}


.welcome-icon {
    font-size: 130px;

    position: relative;

    z-index: 2;

    animation: float 3s ease-in-out infinite;
}


@keyframes float {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }

}


/* ================================
   STATISTICS
================================ */

.stats {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 18px;

    margin-top: 22px;
}


.stat-card {
    background: white;

    border-radius: 18px;

    padding: 20px;

    display: flex;
    align-items: center;

    gap: 15px;

    box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);

    transition: 0.25s;
}


.stat-card:hover {
    transform: translateY(-4px);
}


.stat-icon {
    width: 48px;
    height: 48px;

    border-radius: 13px;

    background: #eff6ff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
}


.stat-card strong {
    display: block;

    font-size: 24px;

    margin-bottom: 3px;
}


.stat-card span {
    font-size: 12px;

    color: #64748b;
}


/* ================================
   SUBJECT SECTION
================================ */

.subjects-section {
    margin-top: 50px;
}


.section-heading {
    display: flex;

    align-items: end;
    justify-content: space-between;

    margin-bottom: 22px;
}


.section-heading span {
    font-size: 12px;

    color: #3b82f6;

    font-weight: bold;

    letter-spacing: 1px;
}


.section-heading h2 {
    font-size: 28px;

    margin-top: 5px;
}


.section-heading p {
    color: #64748b;

    font-size: 14px;
}


/* ================================
   SUBJECT GRID
================================ */

.subject-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 18px;
}


.subject-card {
    width: 100%;

    border: none;

    background: white;

    border-radius: 20px;

    padding: 22px;

    display: flex;

    align-items: center;

    text-align: left;

    gap: 18px;

    cursor: pointer;

    box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);

    transition: 0.25s;
}


.subject-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.10);
}


.subject-icon {
    width: 58px;
    height: 58px;

    flex-shrink: 0;

    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 27px;
}


.subject-icon.computer {
    background: #dbeafe;
}


.subject-icon.mathematics {
    background: #fef3c7;
}


.subject-icon.physics {
    background: #ede9fe;
}


.subject-icon.english {
    background: #dcfce7;
}


.subject-info {
    flex: 1;
}


.subject-info h3 {
    font-size: 18px;

    margin-bottom: 6px;
}


.subject-info p {
    color: #64748b;

    font-size: 13px;

    line-height: 1.5;
}


.arrow {
    font-size: 25px;

    color: #94a3b8;

    transition: 0.2s;
}


.subject-card:hover .arrow {
    transform: translateX(5px);

    color: #3b82f6;
}


/* ================================
   FOOTER
================================ */

footer {
    text-align: center;

    padding: 25px;

    color: #64748b;

    font-size: 13px;
}


footer p {
    color: #0f172a;

    font-weight: bold;

    margin-bottom: 5px;
}


/* ================================
   MOBILE
================================ */

@media (max-width: 800px) {

    .welcome {
        padding: 35px 25px;

        min-height: auto;
    }


    .welcome h1 {
        font-size: 38px;
    }


    .welcome-icon {
        display: none;
    }


    .stats {
        grid-template-columns: repeat(2, 1fr);
    }


    .subject-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 500px) {

    .topbar {
        padding: 18px 15px 10px;
    }


    .dashboard {
        padding: 15px 15px 40px;
    }


    .brand h2 {
        font-size: 17px;
    }


    .welcome {
        border-radius: 20px;

        padding: 30px 22px;
    }


    .welcome h1 {
        font-size: 32px;
    }


    .welcome p {
        font-size: 14px;
    }


    .stats {
        gap: 10px;
    }


    .stat-card {
        padding: 15px;

        gap: 10px;
    }


    .stat-icon {
        width: 40px;
        height: 40px;

        font-size: 18px;
    }


    .stat-card strong {
        font-size: 20px;
    }


    .section-heading {
        display: block;
    }


    .section-heading p {
        margin-top: 8px;
    }


    .subject-card {
        padding: 17px;
    }

}
