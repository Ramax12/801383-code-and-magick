'use strict';

// Рандомное изменение персонажей
(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  window.FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  window.renderName = function () {
    var randomNames = Math.floor(Math.random() * NAMES.length);
    var randomSurnames = Math.floor(Math.random() * SURNAMES.length);
    var nickName = NAMES[randomNames] + ' ' + SURNAMES[randomSurnames];

    return nickName;
  };

  var renderWizard = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = window.renderName();
    wizardElement.querySelector('.wizard-coat').style.fill = window.renderItem(window.COAT_COLOR);
    wizardElement.querySelector('.wizard-eyes').style.fill = window.renderItem(window.EYES_COLOR);

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);
})();
