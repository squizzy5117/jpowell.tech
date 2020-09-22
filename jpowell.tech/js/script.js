
document.getElementById("openOrClosed");
var openOrClosedJS = document.getElementById("openOrClosed");
var time = new Date().getHours();
var message;
if (time < 8 || time > 18)
{
    message = "CLOSED";
}
else 
{
    message = "NOW OPEN !";
}
openOrClosedJS.innerText = message;

//-------------Nav Bar-----------//

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    
    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visable";
        getSidebar.style.width = "160px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLenght = getSidebarLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "1px";
        getSidebarTitle.style.opacity = "0.5";
        let arrayLenght = getSidebarLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "initial";

        toggleNavStatus = false;
    }
}
//-------Button-----//
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add(`open`);
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});