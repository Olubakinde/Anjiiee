// Get references to elements
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const timeline = document.querySelector('.timeline');
const loveQuestion = document.querySelector('.love-question');
const timelineItems = document.querySelectorAll('.timeline-item');
const loveQuestionSection = document.querySelector('.love-question');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const responseMessage = document.getElementById('response-message');

// Handle start button click
startButton.addEventListener('click', () => {
  // Start playing the music and unmute it
  bgMusic.muted = false;  // Unmute the music
  bgMusic.play();         // Play the music
  
  // Hide the initial content and show the timeline
  document.querySelector('.content').style.display = 'none';
  timeline.classList.remove('hidden');
  timeline.style.opacity = 1;
});

nextButton.addEventListener('click', () => {
  // Hide the initial content and show the timeline
  document.querySelector('.timeline').style.display = 'none';
  loveQuestion.classList.remove('hidden');
  loveQuestion.style.opacity = 1;
});

yesButton.addEventListener('click', () => {
  responseMessage.textContent = "I love you too! 💖";
  responseMessage.classList.add('love');
  responseMessage.classList.remove('wrong');
  // Optionally, disable the buttons to prevent multiple clicks
  // yesButton.disabled = true;
  // noButton.disabled = true;
});

// Handle the "No" button click
noButton.addEventListener('click', () => {
  responseMessage.textContent = "Wrong answer. Try again!";
  responseMessage.classList.add('wrong');
  responseMessage.classList.remove('love');
  // Optionally, disable the buttons to prevent multiple clicks
  // yesButton.disabled = true;
  // noButton.disabled = true;
});

// Handle music toggle
let isMusicMuted = false;
musicToggle.addEventListener('click', () => {
  if (isMusicMuted) {
    bgMusic.muted = false;
    musicToggle.textContent = '🔊'; // Unmute icon
  } else {
    bgMusic.muted = true;
    musicToggle.textContent = '🎵'; // Mute icon
  }
  isMusicMuted = !isMusicMuted;
});

// Scroll-triggered animations
const checkScrollPosition = () => {
  const windowHeight = window.innerHeight;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight * 0.8) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
      item.style.animation = 'fadeInUp 0.6s ease-out forwards';
    }
  });
};

// Listen for scroll event
window.addEventListener('scroll', checkScrollPosition);

// Initial check in case items are already in view
checkScrollPosition();
