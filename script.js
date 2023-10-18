let menuIcon = document.querySelector('#menu-icon');
let navbarHeader = document.querySelector('navbar-header');

 menuIcon.onClick = () => {
     menuIcon.classList.toggle('bx bx-x-circle');
     navbarHeader.classList.toggle('active');
    };

// -------------scroll-active-link--section-------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('ul li a[href*='+ id + ']').classList.add('active');
            });
        };
    });
};

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('bx bx-x-circle');
navbarHeader.classList.remove('active');

// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home', { origin: 500 });
// ScrollReveal().reveal('.home-content,.header',{origin: 'top'});

const typed  = new Typed('.multiple-text',{
    strings: ['Mobile Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});