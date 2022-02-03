myID = document.getElementById("btn-volta");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);