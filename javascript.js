var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function myNavbar() {
    var x = document.getElementById("mynav");
    if (x.className === "navbar") {
        x.className = x.className + " responsive"
    } else {
        x.className = "navbar";
    }

}
/* Case 1/
function myNavbar() {
    var x = document.getElementById("mynav");
    if (x.className === "navbar") {
        x.classList.add("responsive");
    } else {
        x.className = "navbar";
    }

}
*/
function validateOrder() {
    var notification;
    var select = document.getElementById("cake").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var date = document.getElementById("date").value;
    var address = document.getElementById("address").value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;

    if (select == "select") {
        notification = "Please select our product";
    } else {
        notification = "";
    }
    document.getElementById("error-select").innerHTML = notification;

    if (name == "") {
        notification = "Please fill out your name";
    } else if (name.length > 100) {
        notification = "Your name should not exceed 100 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-name").innerHTML = notification;

    if (message.length > 30) {
        notification = "Message should not exceed 30 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-message").innerHTML = notification;
    if (date == "") {
        notification = "Please fill out the deliver date";
    } else if (date < today) {
        notification = " Please select Deliver date from today";
    } else {
        notification = "";
    }

    document.getElementById("error-date").innerHTML = notification;
    if (address.length == 0) {
        notification = "Please fill out your address";
    } else if (name.length > 500) {
        notification = "Your address should not exceed 500 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-address").innerHTML = notification;

}

function validateContact() {
    var notification;
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;

    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === "") {
        notification = "Please fill out your name";

    } else if (name.length > 100) {
        notification = "Your name should not exceed 100 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-name").innerHTML = notification;

    if (mail === "") {
        notification = "Please fill out your email";
    } else if (!mailFormat.test(mail)) {
        notification = " Your email format is invalid"
    } else if (mail.length > 100) {
        notification = "Your email should not exceed 100 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-mail").innerHTML = notification;

    if (subject === "") {
        notification = "Please fill out your subject";
    } else if (subject.length < 50) {
        notification = "Your subject should not shorter than 50 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-subject").innerHTML = notification;

    if (message === "") {
        notification = "Please fill out your message";
    } else if (message.length > 500) {
        notification = "Message should not exceed 500 characters";
    } else {
        notification = "";
    }
    document.getElementById("error-message").innerHTML = notification;

}