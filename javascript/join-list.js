var trigger = document.getElementsByClassName('join-maillist-trigger')[0],
    // mobileTrigger = document.getElementsByClassName('mobile-join-maillist')[0],
    popup   = document.getElementsByClassName('join-maillist')[0],
    close   = popup.getElementsByClassName('close')[0];

var openPopup = function() {
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
  }
}

var closePopup = function() {
  if (!popup.classList.contains('hidden')) {
    popup.classList.add('hidden');
  }
}

trigger.addEventListener('click', function(e) {
  e.preventDefault();

  openPopup();
});

// mobileTrigger.addEventListener('click', function(e) {
//   e.preventDefault();
//
//   openPopup();
// });

close.addEventListener('click', function(e) {
  e.preventDefault();

  closePopup();
});
