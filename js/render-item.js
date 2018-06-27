'use strict';

(function () {
  window.renderItem = function (itemColor) {
    var randomItemColor = Math.floor(Math.random() * itemColor.length);

    return itemColor[randomItemColor];
  };
})();
