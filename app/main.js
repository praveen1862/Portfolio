// Variables
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

// Function: Toggle settings
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Function: Play or pause audio
function playpause() {
    if (document.getElementById("switchforsound").checked == false) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Function: Toggle visual mode
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function(element) {
        element.classList.toggle("invertapplied");
    });
}

// Window load event
window.addEventListener("load", function() {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Variables for toggle menu
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Function: Toggle hamburger menu
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Function: Hide menu by list item click
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Sections and navigation
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        let offset = section.offsetTop;
        if (pageYOffset >= offset - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(item => {
        item.classList.remove("activeThismobiletab");
        if (item.classList.contains(currentSection)) {
            item.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(item => {
        item.classList.remove("activeThistab");
        if (item.classList.contains(currentSection)) {
            item.classList.add("activeThistab");
        }
    });
});

// Console log for developer credit
console.log("%c Designed and Developed by Praveen ", 
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;");

// Back to top button
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};

// Prevent right-click on images
document.addEventListener("contextmenu", function(event) {
    if (event.target.nodeName === "IMG") {
        event.preventDefault();
    }
}, false);

// Variables for pupil movement
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

// Mouse movement event
const mouseMove = (event) => {
    fracXValue = (event.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (event.clientY) / mouseYEndPoint;

    let moveX = pupilStartPoint + fracXValue * pupilRangeX;
    let moveY = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
};

// Window resize event
const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);