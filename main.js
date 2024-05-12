const musicButton = document.getElementById('musicButton');
const audio = document.getElementById('audio');
const playPauseIcon = document.getElementById('playPauseIcon');
musicButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseIcon.src = "images/pause-btn.svg";
    } else {
        audio.pause();
        audio.currentTime = 0;
        playPauseIcon.src = "images/music-btn.svg";
    }
});

var loader = document.getElementById("preloader"); 
window.addEventListener("load", function () { 
    loader.style.display = "none"; document.querySelector('.hey').classList.add('popup') 
})

let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu"); 
function hamburgerMenu() { 
    document.body.classList.toggle("stopscrolling"); document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"); 
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"); 
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"); 
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3") 
}

function hidemenubyli() { 
    document.body.classList.toggle("stopscrolling"); document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"); 
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1"); 
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2"); 
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3") 
}

const sections = document.querySelectorAll('section'); 
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li'); 
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li'); window.addEventListener('scroll', () => {
  let current = ""; 
  sections.forEach(section => { 
    const sectionTop = section.offsetTop; const sectionHeight = section.clientHeight; if (pageYOffset >= (sectionTop - 200)) { current = section.getAttribute('id') } 
    })
  mobilenavLi.forEach(li => { 
    li.classList.remove('activeThismobiletab'); if (li.classList.contains(current)) { li.classList.add('activeThismobiletab') } 
    })
  navLi.forEach(li => { 
    li.classList.remove('activeThistab'); if (li.classList.contains(current)) { li.classList.add('activeThistab') } 
    })
})

let mybutton = document.getElementById("backtotopbutton"); 
window.onscroll = function () { scrollFunction() }; 
function scrollFunction() { 
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) { 
        mybutton.style.display = "block"
     } else { 
            mybutton.style.display = "none" 
        } 
}
function scrolltoTopfunction() { 
    document.body.scrollTop = 0; document.documentElement.scrollTop = 0
}

const windowResize = (event) => { mouseXEndPoint = window.innerWidth; mouseYEndPoint = window.innerHeight; mouseXRange = mouseXEndPoint - mouseXStartPoint }
window.addEventListener('mousemove', mouseMove); window.addEventListener('resize', windowResize)
