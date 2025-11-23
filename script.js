let manik = document.querySelector('h1');
setInterval(() => {
    setTimeout(() => {
        manik.style.color = 'Red';
    }, 1000);
    manik.style.color = 'White';
}, 2000);
let ex = document.querySelector('.ex');
let ham = document.getElementById('hamburger');
let navUl = document.querySelector('nav ul');
    ham.addEventListener('click', function() {
    if (navUl.style.display === 'flex') {
        navUl.style.display = 'none';
        ex.style.display = 'none';
    }
    else {
        navUl.style.display = 'flex';
        ham.style.display = 'none';
        ex.style.display = 'flex';
    }
});

    ex.addEventListener('click', function() {
    if (navUl.style.display === 'flex') {
        navUl.style.display = 'none';
        ex.style.display = 'none';
        ham.style.display = 'flex';
    }
});

let button = document.querySelector('.btn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let hehe = document.querySelector('.hehe');
let msg = document.querySelector('.msg');
let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        if (name.value === '' || email.value === '' || message.value === '') {
            event.preventDefault();
            msg.style.display = 'flex';
            hehe.style.color = 'red';
            hehe.textContent = 'Please fill in all fields.';
            setTimeout(() => {
                msg.style.display = 'none';
            }, 1000);
        }
        else {
            event.preventDefault();
            msg.style.display = 'flex';
            hehe.style.color = 'black';
            hehe.textContent = 'Thank you for your message! I will touch u shortly.';
            setTimeout(() => {
                msg.style.display = 'none';
                form.reset();
            }, 1500);
        }
    });