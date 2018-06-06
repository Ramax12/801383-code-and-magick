'use strict';

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLUMN_X = 155;
var COLUMN_Y = 90;
var MARGIN = 50;
var TEXT_HEIGHT = 15;
var FONT_MARGIN = 5;

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(160, 20);
  ctx.lineTo(210, 70);
  ctx.lineTo(260, 20);
  ctx.lineTo(380, 20);
  ctx.lineTo(430, 70);
  ctx.lineTo(480, 20);
  ctx.lineTo(530, 20);
  ctx.lineTo(500, 145);
  ctx.lineTo(530, 290);
  ctx.lineTo(480, 290);
  ctx.lineTo(430, 270);
  ctx.lineTo(380, 290);
  ctx.lineTo(260, 290);
  ctx.lineTo(210, 270);
  ctx.lineTo(160, 290);
  ctx.lineTo(110, 290);
  ctx.lineTo(140, 145);
  ctx.lineTo(110, 20);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(150, 10);
  ctx.lineTo(200, 50);
  ctx.lineTo(250, 10);
  ctx.lineTo(370, 10);
  ctx.lineTo(420, 50);
  ctx.lineTo(470, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(490, 135);
  ctx.lineTo(520, 280);
  ctx.lineTo(470, 280);
  ctx.lineTo(420, 260);
  ctx.lineTo(370, 280);
  ctx.lineTo(250, 280);
  ctx.lineTo(200, 260);
  ctx.lineTo(150, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(130, 135);
  ctx.lineTo(100, 10);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 235, 40);
  ctx.fillText('Список результатов:', 150, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var blueTransparency = 'rgba(66, 134, 244,' + (Math.random() * (1 - 0.5) + 0.5) + ')';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = blueTransparency;
    }
    var unstable = COLUMN_Y - ((COLUMN_Y * times[i]) / maxTime);

    ctx.fillText(Math.ceil(times[i]), COLUMN_X + (BAR_WIDTH + MARGIN) * i, (COLUMN_Y - FONT_MARGIN) + unstable);
    ctx.fillRect(COLUMN_X + (BAR_WIDTH + MARGIN) * i, COLUMN_Y + unstable, BAR_WIDTH, BAR_HEIGHT - unstable);
    ctx.fillText(players[i], COLUMN_X + (BAR_WIDTH + MARGIN) * i, COLUMN_Y + BAR_HEIGHT + TEXT_HEIGHT);
  }
};
