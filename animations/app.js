const hamburger  = document.querySelector('.container'),
      hiddenMenu = document.querySelector('.hiddenMenu'),
      overflow   = document.querySelector('body'),
      header     = document.querySelector('.main');

// HAMBURGER MENU EVENT HANDLERS
function myFunction(e) {
    e.classList.toggle("change");
};

hamburger.addEventListener('click', () => {
    hiddenMenu.classList.toggle('showMenu');
    overflow.classList.toggle('overflow');
    header.classList.toggle('hide-main');
});
