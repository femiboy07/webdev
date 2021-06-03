/*var get = document.getElementById("deep");

function check(e) {

    if (!e) {
        e = window.event;
    }

    var el = e.target || e.srcElement;

    get = el.nextSibling;
    var feed = document.getElementById("feedback");
    var change = document.querySelector("a.header-cases");

    change.innerHTML = "not ready";



}


function change() {
    var change = document.querySelector("a.header-cases");

    change.innerHTML = "cases";
}







get.addEventListener('click', function(e) {
    check(e);
}, false);

get.addEventListener('dblclick', change, false);


function setup() {

    var textinput = document.getElementById('set');

    textinput.focus();
}


window.onload = setup;


window.addEventListener('load', setup, false);
/*
var msg = '<div class="header"><a id="close" href="#">close X</a></div>';

msg += '<div><h1>Service Maintenance</h1>';

msg += 'our servers are being updated between 3am and 4am';
msg += 'During this time, there may be minor disruptions to service </div>';


var elnote = document.createElement('div');



elnote.setAttribute('id', 'note');



// var me = document.createElement(elnote);


document.body.appendChild(elnote);

function dissmissnote() {
    document.body.removeChild(elnote);
}

var elclose = document.getElementById("close");

elclose.addEventListener('click', dissmissnote, false);*/


/*
function moveElement(ElementId, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(ElementId)) return false;
    var elem = document.getElementById(ElementId);

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }

    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + ElementId + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(repeat, interval);

}

*/

/*
function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById('move')) return false;

    var elem = document.getElementById('move');
    elem.style.position = 'absolute';
    elem.style.left = '100px';
    elem.style.top = "200px";
    moveElement('move', 400, 400, 5);
}



*/

function addloadevent(func) {
    var onload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        onload();
        func();
    }

}






const hamburger = document.querySelector('.hamburger');

const list = document.querySelector('.list');

const links = document.querySelectorAll('.lists li')



hamburger.addEventListener("click", () => {

    list.classList.toggle('open');
}, false);