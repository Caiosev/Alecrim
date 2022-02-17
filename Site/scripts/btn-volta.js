myID = document.querySelector(".menu");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 700) {
        myID.className = "menu show"
    } else {
        myID.className = "menu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);