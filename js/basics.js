const toggle_button = document.getElementById('js-button-toggle');
const menu = document.getElementById('js-id-menu');

function toggle_menu () {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

const intro = document.getElementById('js-intro-container');

function introDisplayNone () {
    intro.style.display = 'none';
}

function introDisplayFlex () {
    intro.style.display = 'flex';
}

if (intro.style.display === 'none') {
    alert('Hi! I am active');
    toggle_button.style.stroke = "#4b0000";
}