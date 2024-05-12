/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})


/*LOGO*/

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/*chatgpt*/

const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const formData = new FormData();

formData.append(
  "file",
  fs.createReadStream("assets/img/Quentin.pdf")
);

const options = {
  headers: {
    "x-api-key": "sec_bTXMrSoX6Aa62uuQEHS7hzdSgFQuBryj",
    ...formData.getHeaders(),
  },
};

axios
  .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
  .then((response) => {
    console.log("Source ID:", response.data.sourceId);
  })
  .catch((error) => {
    console.log("Error:", error.message);
    console.log("Response:", error.response.data);
  });
// Fonction pour envoyer la question à l'API et afficher la réponse
function sendQuestion() {
    // Récupérer la question de l'utilisateur depuis l'input
    const question = document.getElementById("user-input").value;

    // Envoyer la question à l'API ChatPDF
    const chatData = {
        stream: false,
        sourceId: "src_xxxxxx", // Remplacez "src_xxxxxx" par l'ID de votre source
        messages: [
            {
                role: "user",
                content: question,
            },
        ],
    };

    axios.post("https://api.chatpdf.com/v1/chats/message", chatData, {
        headers: {
            "x-api-key": "sec_bTXMrSoX6Aa62uuQEHS7hzdSgFQuBryj", // Remplacez "sec_bTXMrSoX6Aa62uuQEHS7hzdSgFQuBryj" par votre clé API
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        // Afficher la réponse dans le chat-box
        const chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += `<div class="user-message">${question}</div>`;
        chatBox.innerHTML += `<div class="bot-message">${response.data.content}</div>`;
    })
    .catch((error) => {
        console.error("Erreur:", error.message);
    });
}
