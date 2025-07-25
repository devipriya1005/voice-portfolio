function handleVoiceCommand(command) {
  command = command.toLowerCase();

  if (command.includes("open about")) {
    document.getElementById("about").scrollIntoView();
    speak("Opening About section");
  } 
  else if (command.includes("open projects")) {
    document.getElementById("projects").scrollIntoView();
    speak("Opening Projects section");
  }
  else if (command.includes("open contact")) {
    document.getElementById("contact").scrollIntoView();
    speak("Opening Contact section");
  }
  else {
    speak("Sorry, I didn't understand that command.");
  }
}
