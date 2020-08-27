const hamburger  = document.querySelector('.container'),
      showMenu = document.querySelector('.showMenu'),
      showMenuList = document.querySelector('.showMenu-list'),
      overflow   = document.querySelector('body');


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

// HAMBURGER MENU EVENT HANDLERS
function myFunction(e) {
    e.classList.toggle("change");
};

hamburger.addEventListener('click', () => {
    showMenu.classList.toggle('menu-opacity');
    showMenuList.classList.toggle('ul-show');
    overflow.classList.toggle('overflow');
});

if(vw >= 576) {
    document.querySelector('#aos-div').removeAttribute('data-aos');
}