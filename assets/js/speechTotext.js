function voice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
      console.log(event);
      document.getElementById("word-input").value =
        event.results[0][0].transcript;
    };
    recognition.start();
  } else {
    console.log("Your Browser does not support speech Recognition");
    alert("Your Browser does not support Speech Recognition");
  }
}
