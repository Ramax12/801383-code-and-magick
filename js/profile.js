'use strict';

// Изменение цвета по нажатию
(function () {
  var changeCoat = document.querySelector('.setup-wizard .wizard-coat');
  var changeEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var changeFireball = document.querySelector('.setup-fireball-wrap');
  var inputChangeCoat = document.querySelector('input[name=coat-color]');
  var inputChangeEyes = document.querySelector('input[name=eyes-color]');
  var inputChangeFireball = document.querySelector('input[name=fireball-color]');

  changeCoat.addEventListener('click', function () {
    var color = window.renderItem(window.COAT_COLOR);
    changeCoat.style.fill = color;
    inputChangeCoat.value = color;
  });

  changeEyes.addEventListener('click', function () {
    var color = window.renderItem(window.EYES_COLOR);
    changeEyes.style.fill = color;
    inputChangeEyes.value = color;
  });

  changeFireball.addEventListener('click', function () {
    var color = window.renderItem(window.FIREBALL_COLOR);
    changeFireball.style.background = color;
    inputChangeFireball.value = color;
  });
})();
