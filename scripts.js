

let choice = document.getElementById('button01')




let top_button = document.getElementById('top-button')
let topnav = document.getElementById('topnav');
/* window.onresize = function () {
    let x = window.innerWidth;
    if (x > 700) {
        topnav.style.display = "block";
    }
    else {
        topnav.style.display = "none";
    }

} */

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