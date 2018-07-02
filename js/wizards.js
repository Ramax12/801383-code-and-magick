'use strict';

// Рандомное изменение персонажей
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var wizardContainer = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.renderWizards = function (wizards) {
    wizardContainer.innerHTML = '';
    wizards.sort(function () {
      return 0.5 - Math.random();
    });
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardContainer.appendChild(fragment);
  };
})();
