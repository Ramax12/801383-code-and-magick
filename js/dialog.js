'use strict';

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');
var shopElement = document.querySelector('.setup-artifacts-cell img');

dialogHandler.addEventListener('mousedown', function (evt) {

  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (e) {
        e.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

shopElement.addEventListener('mousedown', function (evt) {

  evt.preventDefault();

  var shift = {
    x: evt.clientX - shopElement.offsetLeft,
    y: evt.clientY - shopElement.offsetTop
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    shopElement.style.position = 'absolute';
    shopElement.style.left = moveEvt.clientX - shift.x + 'px';
    shopElement.style.top = moveEvt.clientY - shift.y + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    shopElement.style.position = 'static';

    var element = document.elementFromPoint(upEvt.clientX, upEvt.clientY).closest('.setup-artifacts-cell');

    if (element) {
      element.appendChild(shopElement);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  if (shopElement) {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
});


