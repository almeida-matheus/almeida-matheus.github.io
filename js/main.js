/*===== LIGHT MODE =====*/
//Get our img element by using document.getElementById
const img = document.querySelector(".profile-photo");
const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

checkbox.addEventListener('change', function () {
    html.classList.toggle('light-mode')
    //Set the src property of our element to the new image URL
    // img.src="./img/logo_black.png"
    if (img.getAttribute('src')=="./img/logo_white.png") {
        img.setAttribute('src', "./img/logo_black.png");
     } 
     else {
        img.setAttribute('src', "./img/logo_white.png");
     }
})

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