

//Declaring the Variables

const calcDisplay = document.getElementById("calc-display");
const calcFrameButtons = document.querySelector("#frame");

let userInput = ""

let currentOperation = "";

let result = "";


//Function to Update the display when operations are performed

function UpdateCalcDisplay(value){

calcDisplay.textContent = value;

}

//Attaching an event listener to listen the user inputs the & update the value & dipslay

calcFrameButtons.addEventListener('click', (event)=>{

  const target = event.target;
// If the button clicked is a number button

if(event.target.classList.contains('number-button')){

  // Add the value of the button to the userInput variable
  userInput += target.textContent;

  // Update the calculator display with the new userInput value

  UpdateCalcDisplay(userInput)

  console.log(userInput)


}
// else If the button clicked is an operation button

else if (event.target.classList.contains('operation-button')){

  // Set the current operation to the value of the clicked button

  //When an operation button is clicked, the current value of the userInput variable is stored in the result variable. This value becomes the first operand of the calculation, and userInput is cleared to make room for the second operand.

  currentOperation = target.textContent

  console.log(target.textContent)
// Parse the userInput value as a floating-point number and store it in the result variable
  
result = parseFloat(userInput);

console.log(userInput)

  userInput = ''

  console.log(result)

}else if(target.classList.contains("equals-button")){

  if(result && currentOperation !== null && userInput !== ''){

    switch(currentOperation){

      case'+' :
      
      result += parseFloat(userInput);
      break;

      case '-' :

      result -= parseFloat(userInput);
      break;

      case '*':

      result * parseFloat(userInput);
      break;

      case '/':

      result /= parseFloat(userInput)
      break;

    }

  //Update the result with final value

   UpdateCalcDisplay(result)


  }






}




})


