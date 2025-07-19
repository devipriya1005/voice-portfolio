// Scroll to section
function goToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Voice Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('Voice activated');
};

recognition.onresult = (event) => {
  const spoken = event.results[0][0].transcript.toLowerCase();
  console.log('You said:', spoken);

  if (spoken.includes('about')) goToSection('about');
  else if (spoken.includes('skills')) goToSection('skills');
  else if (spoken.includes('projects')) goToSection('projects');
  else if (spoken.includes('contact')) goToSection('contact');
  else alert('Sorry, command not recognized');
};

// Press "v" to start voice
document.addEventListener('keydown', (e) => {
  if (e.key === 'v') recognition.start();
});
