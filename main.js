let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            if (this.isEnd) {
                this.autoplay.start();
            }
        }
    }
});

function exibirConvite() {
    var contactSection = document.getElementById('contact');
    if (contactSection) {
        if (confirm('Dont forget following us on social media.')) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
setTimeout(exibirConvite, 30000);

function changeSeason(season, currentImage) {
    var images = document.querySelectorAll('.place-img img');
    var seasonImages = {
        'fall': ['places1.jpg', 'fall1.jpg', 'fall2.jpg', 'fall3.jpg'],
        'winter': ['winter1.jpg', 'places2.jpg', 'winter2.jpg', 'winter3.jpg'],
        'spring': ['spring1.jpg', 'spring2.jpg', 'places3.jpg', 'spring3.jpg'],
        'summer': ['summer1.jpg', 'summer2.jpg', 'summer3.jpg', 'places4.jpg']
    };
    images.forEach(function(image, index) {
        if (image.src !== currentImage) {
            var seasonImage = seasonImages[season][index];
            image.src = 'img/' + seasonImage;
        }
    });
}
    


function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var confirmationMessage = "Thank you, " + name + "! Your message has been submitted.";
    document.getElementById('confirmation').innerText = confirmationMessage;
}

document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.querySelector('.nav-icon');
    const navbar = document.querySelector('.navbar');

    navIcon.addEventListener('click', function() {
        navbar.classList.toggle('navbar-open');
    });
});


