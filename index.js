const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


// Sélectionnez l'élément de la navbar
const nav = document.getElementById('nav');

// Sélectionnez les liens de la barre de navigation transparente
const transparentLinks = document.querySelectorAll('nav.transparent a');

// Sélectionnez les liens de la barre de navigation non transparente
const nonTransparentLinks = document.querySelectorAll('nav:not(.transparent) a');

// Ajoutez un gestionnaire d'événements de défilement à la fenêtre
window.addEventListener('scroll', function () {
  // Vérifiez la position de défilement de la page
  if (window.scrollY > 0) {
    // Si la page est défilée, ajoutez la classe non transparente à la navbar
    nav.classList.remove('transparent');

    // Changez la couleur des liens dans la barre de navigation transparente
    transparentLinks.forEach(link => {
      link.style.color = '#919191';
    });

    // Changez la couleur des liens dans la barre de navigation non transparente
    nonTransparentLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
  } else {
    // Si la page est en haut, ajoutez la classe transparente à la navbar
    nav.classList.add('transparent');

    // Changez la couleur des liens dans la barre de navigation transparente
    transparentLinks.forEach(link => {
      link.style.color = '#ffffff';
    });

    // Changez la couleur des liens dans la barre de navigation non transparente
    nonTransparentLinks.forEach(link => {
      link.style.color = '#919191';
    });
  }
});




document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 809) {
    const sr = ScrollReveal();

    sr.reveal('.top', {
      origin:'top',
      distance:'50px',
      duration: 1000,
      easing: 'ease-in-out',
    });
    // Configurer l'animation pour titre-l et txt-l (de gauche à droite)
    sr.reveal('.titre-l, .txt-l', {
      origin: 'left',
      distance: '50px', // ou une autre valeur
      duration: 2000,
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('#frame', {
      duration:3000,
    });


    // Configurer l'animation pour titre-r et txt-r (de droite à gauche)
    sr.reveal('.titre-r, .txt-r', {
      origin: 'right',
      distance: '50px', // ou une autre valeur
      duration: 2000,
      easing: 'ease-in-out',
    });

    sr.reveal('.rimg', {
      origin: 'top',
      distance: '50px',
      duration: 2000,
      easing: 'ease-in-out',
    });

    sr.reveal('.tek', {
      origin:'bottom',
      distance: '30px',
      duration: 500,
      easing:'ease-in-out',
    });
    sr.reveal('.tek1', {
      origin:'bottom',
      distance: '30px',
      duration: 1000,
      easing:'ease-in-out',
    });
    sr.reveal('.tek2', {
      origin:'bottom',
      distance: '30px',
      duration: 1500,
      easing:'ease-in-out',
    });
    sr.reveal('.tek3', {
      origin:'bottom',
      distance: '30px',
      duration: 2000,
      easing:'ease-in-out',
    });
    sr.reveal('.tek4', {
      origin:'bottom',
      distance: '30px',
      duration: 2500,
      easing:'ease-in-out',
    })
  }});

  var typed = new Typed(".auto-type", {
    strings: ["WEB", "MOBILE"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });
