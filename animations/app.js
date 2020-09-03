const hamburger    = document.querySelector('.container'),
      showMenu     = document.querySelector('.showMenu'),
      showMenuList = document.querySelector('.showMenu-list'),
      body         = document.querySelector('body');

// HAMBURGER MENU EVENT HANDLERS
function myFunction(e) {
    e.classList.toggle("change");
};

hamburger.addEventListener('click', () => {
    showMenu.classList.toggle('menu-opacity');
    showMenuList.classList.toggle('ul-show');
    body.classList.toggle('overflow');
});