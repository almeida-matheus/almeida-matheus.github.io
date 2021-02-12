/*===== LOADER ====*/
// quando carregar o javascript exclui a div do loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    // loader.className += " hidden";
    loader.parentElement.removeChild(loader);
});

/*===== LIGHT MODE =====*/
//Get our img element by using document.getElementById
const img = document.querySelector(".profile-photo");
const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

//se a chave tiver algum valor = tema claro
if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
    html.classList.toggle(theme)
    img.setAttribute('src', "./img/logo_black.png");
    checkbox.checked = true;
}

//se o checkbox for clicado
checkbox.addEventListener('change', function () {
    html.classList.toggle('light-mode')
    //Set the src property of our element to the new image URL
    // if (img.getAttribute('src')=="./img/logo_white.png")
    // if (html.getAttribute('class')=="sr light-mode") {
    if (html.classList[1] == 'light-mode') {
        img.setAttribute('src', "./img/logo_black.png");
        localStorage.setItem("theme", "light-mode")
        // img.src="./img/logo_black.png"
    }
    else {
        img.setAttribute('src', "./img/logo_white.png");
        localStorage.setItem("theme", "")
    }
})

/*===== CHANGE FLAG =====*/
const flag = document.querySelector(".flag-icon");

flag.addEventListener("mouseover", function () {
    flag.setAttribute('class', "flag-icon flag-icon-us")
})
flag.addEventListener("mouseout", function () {
    flag.setAttribute('class', "flag-icon flag-icon-br")
})

/*===== TYPING ANIMATION =====*/
var typed = new Typed(".typing", {
    strings: ["Desenvolvimento Front-end", "Desenvolvimento Back-end", "Sistemas Operacionais", "Segurança da Informação", "Redes de Computadores"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*===== SCROLL REVEAL ANIMATION =====*/
const r = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});
/*scroll top*/
r.reveal('.animation-scroll', { delay: 200 });
/*scroll about*/
r.reveal('.animation-img-about', { delay: 400 });
r.reveal('.animation-text-about', { delay: 800 });
// r.reveal('.test', { interval: 200 });

/*===== CLICK NAME ANIMATION =====*/
var foo = document.querySelector('#main-name');

foo.addEventListener('click', function () {
    foo.className = 'animate__animated animate__pulse';
});

foo.addEventListener('webkitAnimationEnd', removeClass);
foo.addEventListener('mozAnimationEnd', removeClass);
foo.addEventListener('MSAnimationEnd', removeClass);
foo.addEventListener('oanimationend', removeClass);
foo.addEventListener('animationend', removeClass);

function removeClass() {
    foo.className = '';
}

/*===== CLICK CONTACT ANIMATION =====*/
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "E-mail enviado com sucesso";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Erro";
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
//adicionar a url form-s endpoint no action e metodo post e id="my-form"
//copiar o <script> na aba ajax do formspree e colar aqui