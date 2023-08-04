
let display = document.getElementById('display');
    let highlightedButton = null;

   function appendCharacter(character) {
  display.value += character;
  
  // Reset the color of the previously highlighted button
  if (highlightedButton) {
    highlightedButton.style.backgroundColor = '';
  }

  // Set the color of the clicked button
  const buttonId = `btn${character}`;
  const button = document.getElementById(buttonId);
  button.style.backgroundColor = 'yellow';
  highlightedButton = button;
}


    function calculateResult() {
      try {
        const expression = display.value;
        const result = evaluateExpression(expression);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    }

    function evaluateExpression(expression) {
      const operands = expression.split(/[+\-*/]/);
      const operator = expression.match(/[+\-*/]/);

      if (operands.length !== 2 || !operator) {
        throw new Error('Invalid expression');
      }

      const num1 = parseFloat(operands[0]);
      const num2 = parseFloat(operands[1]);

      switch (operator[0]) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            throw new Error('Division by zero');
          }
          return num1 / num2;
        default:
          throw new Error('Invalid operator');
      }
    }