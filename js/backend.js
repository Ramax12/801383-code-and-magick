'use strict';

(function () {
  var LOAD_TIMEOUT = 5000;
  var LOAD_SUCCESS = 200;
  var SAVE_TIMEOUT = 10000;

  var load = function (onLoad, onError) {
    var URL = 'http://127.0.0.1:8000/code-and-magic.json';
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = LOAD_TIMEOUT;

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case LOAD_SUCCESS:
          onLoad(xhr.response);
          break;
        default:
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.open('GET', URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.timeout = SAVE_TIMEOUT;

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case LOAD_SUCCESS:
          onLoad();
          break;
        default:
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Данные не успели отправиться за ' + xhr.timeout + 'мс');
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
