document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const fullText = "Muhammad Riski Halim";
    let index = 0;
  
    function type() {
      if (index < fullText.length) {
        textElement.innerHTML += fullText.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      }
    }
  
    textElement.innerHTML = ''; // Clear initial content
    type();
  });
  