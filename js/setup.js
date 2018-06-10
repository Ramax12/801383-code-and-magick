'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

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
