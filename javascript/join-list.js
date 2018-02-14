var trigger = document.getElementsByClassName('join-maillist')[0],
    popup   = document.getElementsByClassName('join-maillist-card')[0],
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

close.addEventListener('click', function(e) {
  e.preventDefault();

  closePopup();
});
