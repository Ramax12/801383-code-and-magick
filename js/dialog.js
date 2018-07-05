'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var dialogOpen = document.querySelector('.setup-open');
  var dialog = document.querySelector('.setup');
  var dialogClose = dialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    dialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    dialog.classList.add('hidden');
    dialog.style.top = 80 + 'px';
    dialog.style.left = 50 + '%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  dialogOpen.addEventListener('click', function () {
    openPopup();
  });

  dialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  dialogClose.addEventListener('click', function () {
    closePopup();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var form = document.querySelector('.setup-wizard-form');
  var error = document.querySelector('.error');

  error.addEventListener('click', function () {
    error.style.display = 'none';
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closePopup, onError);
  });

  var onError = function (textError) {
    error.style.display = 'block';
    error.textContent = textError;
    document.body.insertAdjacentElement('afterbegin', error);
  };

  var changeCoat = document.querySelector('.setup-wizard .wizard-coat');
  var changeEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var changeFireball = document.querySelector('.setup-fireball-wrap');
  var inputChangeCoat = document.querySelector('input[name=coat-color]');
  var inputChangeEyes = document.querySelector('input[name=eyes-color]');
  var inputChangeFireball = document.querySelector('input[name=fireball-color]');

  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  changeCoat.addEventListener('click', function () {
    var newColor = window.renderItem(COAT_COLOR);
    changeCoat.style.fill = newColor;
    inputChangeCoat.value = newColor;
    window.wizard.onCoatChange(newColor);
  });

  changeEyes.addEventListener('click', function () {
    var newColor = window.renderItem(EYES_COLOR);
    changeEyes.style.fill = newColor;
    inputChangeEyes.value = newColor;
    window.wizard.onEyesChange(newColor);
  });

  changeFireball.addEventListener('click', function () {
    var color = window.renderItem(FIREBALL_COLOR);
    changeFireball.style.background = color;
    inputChangeFireball.value = color;
  });

  window.dialog = {
    onError: onError
  };
})();
