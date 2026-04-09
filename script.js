/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    scroll-behavior: smooth;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
    text-align: center;
}

/* Header & Nav */
header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d5a27;
}

.logo span {
    color: #8bc34a;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: #333;
    margin-left: 20px;
    font-weight: 600;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #2d5a27;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background: #8bc34a;
    color: #fff;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    background: #2d5a27;
}

/* Grid de Cards */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.card {
    background: #f9f9f9;
    padding: 30px;
    border-radius: 8px;
    border-bottom: 4px solid #8bc34a;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

/* Formulário */
form {
    max-width: 600px;
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
}

/* Footer */
footer {
    background: #2d5a27;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

/* Responsividade Menu Mobile */
.menu-toggle {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #333;
}

@media (max-width: 768px) {
    .nav-links {
        display: none; /* Seria ativado via JS */
    }
    .hero-content h1 {
        font-size: 2rem;
    }
    .menu-toggle {
        display: block
