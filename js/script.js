const text = "Oscar Cheung.";
let index = 0;
const caret = document.getElementById("caret");

function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 160);
    } else {
        caret.style.display = "none";
    }
}

window.onload = () => {
    type();
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = -100;  
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelector("form").onsubmit = function(e) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        e.preventDefault();
    }
};
