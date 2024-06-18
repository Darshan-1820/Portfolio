(function() {
    // Menu Show Y hidden
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    // Menu Show
    /* validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Menu Hidden
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }


     /*==================== CONTACT FORM ====================*/ 
     const contactForm = document.getElementById('contactForm');
     let formSubmitListenerAdded = false; // Flag to check if listener is added
 
     if (contactForm && !formSubmitListenerAdded) {
         contactForm.addEventListener('submit', function(event) {
             event.preventDefault(); // Prevent the default form submission
             console.log("Form submit event triggered");
             SendMail();
         });
         formSubmitListenerAdded = true; // Set the flag to true after adding the listener
     }
 
     function SendMail() {
         console.log("SendMail function called");
         var params = {
             from_name: document.getElementById("name").value,
             email_id: document.getElementById("email").value,
             message: document.getElementById("message").value
         };
 
         console.log("Sending email with params:", params);
         emailjs.send("service_59wj3te", "template_dxo8cwk", params)
             .then(function(res) {
                 console.log("Email sent successfully", res.status);
                 alert("Message Sent! " + res.status);
                 contactForm.reset(); // Reset the form after the message is sent
             })
             .catch(function(err) {
                 console.error("Failed to send message", err);
                 alert("Failed to send message. Please try again later.");
             });
     }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));


    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

})();

// function toggleProjectDetails(id, icon) {
//     var details = document.getElementById(id);
//     if (details.style.display === "block") {
//         details.style.display = "none";
//         icon.classList.remove('bx-chevron-up');
//         icon.classList.add('bx-chevron-down');
//     } else {
//         details.style.display = "block";
//         icon.classList.remove('bx-chevron-down');
//         icon.classList.add('bx-chevron-up');
//     }
// }


