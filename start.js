var five = require("johnny-five");
var board = new five.Board();


// hello world!
var helloWorld = function helloWorld() {
  // argument 13 corresponds to the pin#
  // 13 is also a blinker that is built into the board
  var led = new five.Led(13);
  led.blink(400);
};


var rainbow = function rainbow() {
  // the array takes in the pins 6, 5 and 3.
  var rgb = new five.Led.RGB([6, 5, 3]);
  var rainbow = ["FF0000", "FF7F00", "00FF00"];
  var index = 0;

  setInterval(function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    } else {
      rgb.color(rainbow[index++]);
    }
  }, 200);
};

var randomRainbow = function rainbow() {
  // the array takes in the pins 6, 5 and 3.
  var rgb = new five.Led.RGB([6, 5, 3]);
  // var rainbow = ["FF0000", "FF7F00", "00FF00"];
  var index = 0;

  var randomColor = function() {
    return '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
  };

  setInterval(function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    } else {
      // rgb.color(rainbow[index++]);
      rgb.color(randomColor());
    }
  }, 200);
};

var basicServoFx = function basicServoFx() {
  // using only pin#10
  var servo = new five.Servo(10);

  this.repl.inject({
    servo: servo
  });

  servo.sweep();
};

var dancingServos = function dancingServos() {
  // using pin# 9 and 10. note the S
  var servos = new five.Servos([9,10]);

  setInterval(function(){
    var degrees = 360 * Math.random();
    servos.to(degrees);
  }, 200);

  this.repl.inject({
    servos: servos
  });

};




// MAIN FUNCTION.
board.on("ready", helloWorld);
