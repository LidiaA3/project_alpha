const toggle_button = document.querySelector('#js-button-toggle');
const menu = document.querySelector('#js-id-menu');

//function toggle_menu () {
//    if (menu.style.display === 'none'|| menu.style.display === '') {
//        menu.style.display = 'flex';
//    } else {
//        menu.style.display = 'none';
//    }
//}

function toggle_menu () {
    menu.classList.toggle('display-flex');
}

const intro = document.querySelector('#js-intro-container');
intro.style.display = 'flex';

const body = document.querySelector('body');
body.style.overflowY = 'hidden';

function introDisplayNone () {
    intro.style.display = 'none';
    toggle_button.style.stroke = "#4b0000";
    body.style.overflowY = 'scroll';
}

function introDisplayFlex () {
    intro.style.display = 'flex';
    toggle_button.style.stroke = "#faf5f4";
    body.style.overflowY = 'hidden';
}