'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 300;

  var lastTimout;
  window.debounce = function (fun) {
    if (lastTimout) {
      window.clearTimeout(lastTimout);
    }
    lastTimout = window.setTimeout(fun, DEBOUNCE_INTERVAL);
  };
})();
