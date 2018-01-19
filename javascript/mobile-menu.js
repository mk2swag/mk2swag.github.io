var menuTrigger = document.getElementsByClassName('mobile-nav-trigger')[0],
    menuTray    = document.getElementsByClassName('header-mobile')[0];

var toggleMobileMenu = function() {
  if (menuTray.classList.contains('expanded')) {
    menuTray.classList.remove('expanded');
    document.body.style.overflow = 'initial';
  } else {
    menuTray.classList.add('expanded');
    document.body.style.overflow = 'hidden';
  }
}

menuTrigger.addEventListener('click', function() {
  toggleMobileMenu();
});
