/*================================== toggle icon navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*================================== scroll section active link ===========================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const options = {
  rootMargin: "-50px 0px -50px 0px", // Adjust as needed
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    if (entry.isIntersecting) {
      document.querySelector(`.nav-link[href="#${id}"]`).classList.add("active");
    } else {
      document.querySelector(`.nav-link[href="#${id}"]`).classList.remove("active");
        /*================================== sticky navbar ===========================*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
        /*================================== remove toggel icon amd navbar===========================*/
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);

});
/*==================================scroll reveal==========================================*/
 ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content, .Technical-bars', {origin:'right'});

/*==================================typed js==========================================*/

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer","Web Developer", 
    "Software Developer", "Graphic Designer", "Android Developer"],
    typeSpeed:70,
    backSpeed:60,
    backDelay:1000,
    loop: true

});








/*================================== scroll section active link ===========================*/

// let section = document.querySelectorAll('sections');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = ()=>{
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height =sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach.apply(links =>{
//                 document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active');

//             });
//         };
//     });
//         /*================================== sticky navbar ===========================*/
//         let header = document.querySelector('header');
//         header.classList.toggle('sticky', window.scrollY > 100);
//         /*================================== remove toggel icon amd navbar===========================*/
//         menuIcon.classList.remove('fa-xmark');
//         navbar.classList.remove('active');
// };
// /*================================== scroll section active link ===========================*/