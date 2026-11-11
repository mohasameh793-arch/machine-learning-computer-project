// "PRESS START": play the video and make it fill the screen.
const vid = document.getElementById('vid');
const start = document.getElementById('start');

start.addEventListener('click', () => {
  start.hidden = true;
  vid.play().catch(() => {});                    // blocked autoplay: controls stay available
  const fs = vid.requestFullscreen || vid.webkitRequestFullscreen;
  if (fs) fs.call(vid).catch?.(() => {});
  else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();   // iPhone Safari
  vid.focus();
});
