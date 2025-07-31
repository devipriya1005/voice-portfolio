// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  const micButton = document.getElementById('mic-btn');

  recognition.onstart = () => {
    console.log('Voice recognition started');
    micButton.textContent = '🎙️ Listening...';
    micButton.classList.add('listening');
  };

  recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript.toLowerCase().trim();
    console.log('You said:', spoken);

    // Match spoken command with page routes
    if (spoken.includes('home')) window.location.href = 'index.html';
    else if (spoken.includes('about')) window.location.href = 'about.html';
    else if (spoken.includes('skills')) window.location.href = 'skills.html';
    else if (spoken.includes('projects')) window.location.href = 'projects.html';
    else if (spoken.includes('contact')) window.location.href = 'contact.html';
    else alert('Sorry, command not recognized');
  };

  recognition.onerror = (event) => {
    console.error('Voice recognition error:', event.error);
    alert('Error: ' + event.error);
  };

  recognition.onend = () => {
    console.log('Voice recognition ended');
    micButton.textContent = '🎤 Start Voice';
    micButton.classList.remove('listening');
  };

  // Trigger recognition on "v" key
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'v') {
      recognition.start();
    }
  });

  // Trigger recognition on mic button click
  micButton.addEventListener('click', () => {
    recognition.start();
  });

} else {
  alert('Speech Recognition is not supported in this browser.');
}
