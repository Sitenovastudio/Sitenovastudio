const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

musicBtn.addEventListener('click', () => {

  if(isPlaying){
    music.pause();
    musicBtn.innerHTML = '🔇';
  }
  else{
    music.play();
    musicBtn.innerHTML = '🔊';
  }

  isPlaying = !isPlaying;

});

// Scroll Animation
const cards = document.querySelectorAll('.service-card, .portfolio-card');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }

  });

});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = '0.8s';
});
