const toggle_button = document.querySelector('#js-button-toggle');
const menu = document.querySelector('#js-id-menu');
const tz_toggle = document.querySelector('#tz-toggle');
const tz_blade = document.querySelector('#tz-blade');

//function toggle_menu () {
//    if (menu.style.display === 'none'|| menu.style.display === '') {
//        menu.style.display = 'flex';
//    } else {
//        menu.style.display = 'none';
//    }
//}

function toggle_menu () {
    menu.classList.toggle('display-flex');
    tz_toggle.classList.toggle('display-none');
    tz_blade.classList.toggle('display-none');
}

const intro = document.querySelector('#js-intro-container');
intro.style.display = 'flex';

const body = document.querySelector('body');
body.style.overflowY = 'hidden';

function introDisplayNone () {
    intro.style.display = 'none';
    toggle_button.style.stroke = 'var(--accent-color)';
    body.style.overflowY = 'scroll';
    menu.style.color = 'var(--accent-color)';
}

function menuA8Rem () {
    menu.style.top = '8rem';
}

function introDisplayFlex () {
    intro.style.display = 'flex';
    toggle_button.style.stroke = '#faf5f4';
    body.style.overflowY = 'hidden';
    menu.style.color = '#faf5f4';
    menu.style.top = '0';
}

function theme_mode () {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}

window.addEventListener('scroll', 
    function() {
        const scrollPosition = this.window.scrollY;
        if (scrollPosition > 30) {
            menu.style.top = 0;
        } else {
            menu.style.top = '8rem';
        }
})