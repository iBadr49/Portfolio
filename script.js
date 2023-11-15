/* -------------------------- MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /* --------------------- REMOVE MENU MOBILE */
  const navLink = document.querySelectorAll(".nav__link");
  
  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  // -------------------------- TypeWriter
  const texts = ["AD student", "Frontender"]; // Array met de te typen teksten
  const delay = 100; // Vertraging tussen elke letter (in milliseconden)
  
  const typewriter = document.getElementById("typewriter");
  let textIndex = 0; // Index van de huidige tekst in de array
  let charIndex = 0; // Index van de huidige letter in de tekst
  
  function type() {
    if (charIndex < texts[textIndex].length) {
      typewriter.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, delay);
    } else {
      setTimeout(erase, 2000); // Wacht 2 seconden voordat de tekst wordt gewist
    }
  }
  
  function erase() {
    if (charIndex >= 0) {
      typewriter.textContent = texts[textIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(erase, delay);
    } else {
      textIndex = (textIndex + 1) % texts.length; // Wissel naar de volgende tekst in de array
      charIndex = 0;
      setTimeout(type, delay); // Begin opnieuw met typen
    }
  }
  
  window.addEventListener("load", type);
  
  
  // -----------------------  ScrollAnimatie
  
  // Wacht tot het document volledig is geladen
  document.addEventListener("DOMContentLoaded", function () {
    // Selecteer de sectietitel elementen
    const sectionTitles = document.querySelectorAll(".text");
  
    // Activeer GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  
    // Loop door elke sectietitel
    sectionTitles.forEach((title) => {
      // Maak een GSAP-timeline voor de animatie
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 80%", // Pas dit aan op basis van wanneer je de animatie wilt activeren
          end: "+=100", // Pas dit aan op basis van de duur van de animatie
          scrub: true, // Scroll animatie wanneer je scrollt
          markers: false, // Voegt markers toe voor debugdoeleinden (optioneel)
        },
      });
  
      // Voer de gewenste animatie uit (hier gebruiken we opacity en y-position)
      tl.from(title, { opacity: 0, y: 50 });
    });
  });
  
  // -----------------  Backtotop Button
  window.addEventListener("scroll", function () {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.pageYOffset > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  