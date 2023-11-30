document.addEventListener("DOMContentLoaded", () => {
  let playPauseBtn = document.querySelector(".cir-box-mid");
  var audio = new Audio("./music.mp3");
  
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = "<i class='ri-pause-fill'></i>";
    } else {
      audio.pause();
      playPauseBtn.innerHTML = "<i class='ri-play-fill'></i>";
    }
  });

  audio.addEventListener('timeupdate', () => {
    let currentTime = formatTime(audio.currentTime);
    let duration = formatTime(audio.duration); 
    document.querySelector(".left").innerHTML = currentTime;
    document.querySelector(".right").innerHTML = duration;
    document.querySelector("#musicRange").value = (audio.currentTime / audio.duration * 100); // Change here
  });

  function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.round(time % 60);
    return (
      (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
    );
  }
});
