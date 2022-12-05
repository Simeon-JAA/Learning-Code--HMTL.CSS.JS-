// grab elements from dom
const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const swicthBlock = document.querySelector('.switch');
const preloader = document.querySelector('.preloader');

switchBtn.addEventListener('click', function() {
  
  swicthBlock.classList.toggle('switch-active');
  if (swicthBlock.classList.contains('switch-active')) {
    video.pause();
  }
  else {
    video.play();
  }
})
