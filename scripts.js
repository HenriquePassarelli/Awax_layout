
function Navfunction(x) {
    x.classList.toggle("change");
    let topnav = document.getElementById('nav');
    if (topnav.style.display != "flex") {
        topnav.style.display = "flex";
    } else {
        topnav.style.display = "none";
    }
}

let top_button = document.getElementById('top-button')
let navbutton = document.getElementById('topnav');
window.onresize = function () {
    let x = window.innerWidth;
    if (x <= 500) {
        navbutton.style.display = "inline-block";
    }
    else {
        navbutton.style.display = "none";
    }
    

}

let onScroll = function () {
    var y = window.scrollY;
    if (y >= 300) {
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }
}

window.addEventListener("scroll", onScroll);
