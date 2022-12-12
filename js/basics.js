const toggle_button = document.querySelector('#js-button-toggle');
const menu = document.querySelector('#js-id-menu');

function toggle_menu () {
    if (menu.style.display === 'none'|| menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

const intro = document.querySelector('#js-intro-container');
intro.style.display = 'flex';

function introDisplayNone () {
    intro.style.display = 'none';
    toggle_button.style.stroke = "#4b0000";
}

function introDisplayFlex () {
    intro.style.display = 'flex';
    toggle_button.style.stroke = "#faf5f4";
}
