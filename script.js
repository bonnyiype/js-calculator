//Declaring the Variables

const calcDisplay = document.getElementById("calc-display");
const calcFrameButtons = document.querySelector("#frame");

let currentInput = "";

let currentOperation = null;

let result = null;


//Function to Update the display when operations are performed

function UpdateCalcDisplay(value){
  calcDisplay.textContent = value;
}

//Attaching an event listener to listen the user inputs the & update the value & display

calcFrameButtons.addEventListener('click', (event) => {

  const target = event.target;

  // If the button clicked is a number button
  if (target.classList.contains('number-button')) {
    // Add the value of the button to the currentInput variable
    currentInput += target.textContent;

    // Update the calculator display with the new currentInput value
    UpdateCalcDisplay(currentInput);
  }

  // else If the button clicked is an operation button
  else if (target.classList.contains('operation-button')) {
    // Set the current operation to the value of the clicked button
    currentOperation = target.textContent;

    // Parse the currentInput value as a floating-point number and store it in the result variable
    //When operations button is pressed we store first operand to result variable
    result = parseFloat(currentInput);

    // Clear the currentInput variable to make room for the second operand
    currentInput = '';
  }

  // else If the button clicked is the equals button
  else if (target.classList.contains('equals-button')) {
    // Perform the calculation if there is a current operation and a second operand has been entered
    if (result && currentOperation !== null && currentInput !== '') {
      // Parse the currentInput value as a floating-point number and perform the appropriate operation
      switch (currentOperation) {
        case '+':
          result += parseFloat(currentInput);
          break;
        case '-':
          result -= parseFloat(currentInput);
          break;
        case '*':
          result *= parseFloat(currentInput);
          break;
        case '/':
          result /= parseFloat(currentInput);
          break;
      }

      // Update the calculator display with the result
      UpdateCalcDisplay(result);

      // Reset the variables for the next calculation
      currentInput = '';
      currentOperation = null;
      result = null;
    }
  } else if (target.classList.contains("reset-button")) {
    currentInput = "";
    currentOperation = null;
    result = null;
    UpdateCalcDisplay("");
  }
});

