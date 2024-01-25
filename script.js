		document.addEventListener('DOMContentLoaded', function() {
    const codeInputs = document.querySelectorAll('.code');
  
    codeInputs.forEach((input, index) => {
      input.addEventListener('input', function(e) {
        const inputValue = e.target.value;
  
        if (inputValue.length === 1) {
          if (index < codeInputs.length - 1) {
            // Move focus to the next input
            codeInputs[index + 1].focus();
          } else {
            // Last input, blur to prevent issues on mobile
            input.blur();
          }
        } else if (inputValue.length === 0 && index > 0) {
          // Backspace pressed, move focus to the previous input
          codeInputs[index - 1].focus();
        }
      });
  
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
          // Backspace key pressed, delete the value
          if (index > 0) {
            codeInputs[index].value = '';
          }
  
          // Move focus to the previous input
          codeInputs[index].focus();
        }
      });
    });
  });
  