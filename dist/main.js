window.onload = function() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  setInterval(drawClock, 1000);


  function drawClock() {

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    drawFace(200);
    ctx.translate(radius, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);

  }


  function drawFace(ratio) {

    ctx.beginPath();
    ctx.moveTo(0.325 * ratio, 0.055 * ratio);
    ctx.lineTo(0.787 * ratio, 0.125 * ratio);
    ctx.lineTo(0.878 * ratio, 0.333 * ratio);
    ctx.lineTo(0.870 * ratio, 0.673 * ratio);
    ctx.lineTo(0.619 * ratio, 0.909 * ratio);
    ctx.lineTo(0.201 * ratio, 0.844 * ratio);
    ctx.lineTo(0.015 * ratio, 0.617 * ratio);
    ctx.lineTo(0.075 * ratio, 0.214 * ratio);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(0.340 * ratio, 0.064 * ratio);
    ctx.lineTo(0.780 * ratio, 0.128 * ratio);
    ctx.lineTo(0.871 * ratio, 0.334 * ratio);
    ctx.lineTo(0.863 * ratio, 0.668 * ratio);
    ctx.lineTo(0.623 * ratio, 0.902 * ratio);
    ctx.lineTo(0.233 * ratio, 0.834 * ratio);
    ctx.lineTo(0.082 * ratio, 0.616 * ratio);
    ctx.lineTo(0.116 * ratio, 0.217 * ratio);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0.207 * ratio, 0.238 * ratio);
    ctx.lineTo(0.359 * ratio, 0.150 * ratio);
    ctx.lineTo(0.701 * ratio, 0.180 * ratio);
    ctx.lineTo(0.825 * ratio, 0.354 * ratio);
    ctx.lineTo(0.825 * ratio, 0.656 * ratio);
    ctx.lineTo(0.593 * ratio, 0.857 * ratio);
    ctx.lineTo(0.266 * ratio, 0.788 * ratio);
    ctx.lineTo(0.159 * ratio, 0.552 * ratio);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0.501 * ratio, 0.478 * ratio);
    ctx.lineTo(0.522 * ratio, 0.499 * ratio);
    ctx.lineTo(0.501 * ratio, 0.520 * ratio);
    ctx.lineTo(0.480 * ratio, 0.499 * ratio);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

  }

  function drawNumbers(ctx, radius) {
    var ang;
    var num;
    var randomNum;
    ctx.font = radius * 0.25 + "px Barrio";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      randomNum = Math.floor(Math.random() * (360 - 1) + 1);
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.55);
      ctx.rotate(randomNum);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(-randomNum);
      ctx.translate(0, radius * 0.55);
      ctx.rotate(-ang);
    }
  }

  function drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6);
    drawHand(ctx, hour, radius * 0.3, radius * 0.04);
    //minute
    minute = (minute * Math.PI / 30);
    drawHand(ctx, minute, radius * 0.5, radius * 0.04);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.6, radius * 0.02);
  }

  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }









  relogio = setInterval(tick, 1000);


  function tick() {

    var dataAgora = new Date();
    document.getElementById('dataRelogio').innerHTML = dataAgora.toLocaleDateString('en-US');
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    document.getElementById('dataRelogio').innerHTML = dataAgora.toLocaleDateString('en-US', options);

  }










percent = 34.3;

setInterval(count, 700);

function count() {
     randomNum = Math.random() * (1 - 0.1) + 0.1;

    if(percent < 35.6) {
       percent = percent +  randomNum;
    } else {
       percent = percent - randomNum;
    }

    document.getElementById('percent').innerHTML = percent.toFixed(1) + "%";

};

}
