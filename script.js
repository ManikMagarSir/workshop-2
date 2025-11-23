let manik = document.querySelector('h1');
setInterval(() => {
    setTimeout(() => {
        manik.style.color = 'Red';
    }, 1000);
    manik.style.color = 'White';
}, 2000);