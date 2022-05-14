let audio = document.getElementById("myaudio");
let playPause_btn = document.getElementById("playPause_btn");
let volume = document.getElementById("myvolume");
let count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    audio.loop = true;
    playPause_btn.innerHTML =
      "<img src='./Images/pause.png' width='250px'>";
  } else {
    count = 0;
    audio.pause();
    playPause_btn.innerHTML =
      "<img src='./Images/play.png' width='250px'>";
  }
}

function stop() {
  playPause();
  audio.pause();
  audio.currentTime = 0;
  playPause_btn.innerHTML = "Play";
}
var e = document.querySelector(".volume-slider-con");
var eInner = document.querySelector(".volume-slider");
var audio1 = document.querySelector("audio");
var drag = false;
e.addEventListener("mousedown", function (ev) {
  drag = true;
  updateBar(ev.clientX);
});
document.addEventListener("mousemove", function (ev) {
  if (drag) {
    updateBar(ev.clientX);
  }
});
document.addEventListener("mouseup", function (ev) {
  drag = false;
});
var updateBar = function (x, vol) {
  var volume = e;
  var percentage;
  //if only volume have specificed
  //then direct update volume
  if (vol) {
    percentage = vol * 100;
  } else {
    var position = x - volume.offsetLeft;
    percentage = (100 * position) / volume.clientWidth;
  }

  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }

  //update volume bar and video volume
  eInner.style.width = percentage + "%";
  audio1.volume = percentage / 100;
};

const hidden = document.querySelector(".hidden");

hidden.addEventListener("mouseover", function (event) {
  if (event.target.nodeName === "DIV") {
    hidden.classList.toggle("hidden1");
  }
});