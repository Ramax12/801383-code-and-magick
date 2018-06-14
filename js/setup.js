'use strict';

// Открытие/закрытие окна настройки персонажа
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var renderName = function () {
  var randomNames = Math.floor(Math.random() * names.length);
  var randomSurnames = Math.floor(Math.random() * surnames.length);
  var nickName = names[randomNames] + ' ' + surnames[randomSurnames];

  return nickName;
};

var renderCoat = function () {
  var randomCoatColor = Math.floor(Math.random() * coatColor.length);

  return coatColor[randomCoatColor];
};

var renderEyes = function () {
  var randomEyesColor = Math.floor(Math.random() * eyesColor.length);

  return eyesColor[randomEyesColor];
};

var renderFireball = function () {
  var randomFireballColor = Math.floor(Math.random() * fireballColor.length);

  return fireballColor[randomFireballColor];
};

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = renderName();
  wizardElement.querySelector('.wizard-coat').style.fill = renderCoat();
  wizardElement.querySelector('.wizard-eyes').style.fill = renderEyes();

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

// Изменение цвета по нажатию
var changeCoat = document.querySelector('.setup-wizard .wizard-coat');
var changeEyes = document.querySelector('.setup-wizard .wizard-eyes');
var changeFireball = document.querySelector('.setup-fireball-wrap');

changeCoat.addEventListener('click', function () {
  changeCoat.style.fill = renderCoat();
});

changeEyes.addEventListener('click', function () {
  changeEyes.style.fill = renderEyes();
});

changeFireball.addEventListener('click', function () {
  changeFireball.style.background = renderFireball();
});
