const display = document.querySelector(".display");
const opDisplay = document.querySelector(".operation-display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let totalInput = "";
let result = "";
let action = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.textContent, " was pressed");
        let input = button.textContent;

        if (button.classList.contains("action-button") && input !== "=") {
            if (currentInput === "") { //handling for action pressed when no number infront
                action = null;
            }

            else if (input === "⌫") {
                console.log("⌫ is clicked");
                currentInput = currentInput.slice(0,-1);
                if (currentInput.length === 0) {
                    display.textContent = "0";
                    action = null;
                    currentInput = "";
                    previousInput = "";
                    totalInput = "";
                } else {
                    display.textContent = previousInput + currentInput;
                }
            }

            else if (input === "AC") {
                console.log("cleared display");
                currentInput = "";
                previousInput = "";
                totalInput = "";
                action = null;
                display.textContent = "0";
            }

            else if (input === "+" || input === "-" || input === "×" || input === "÷") {
                if (input === "×") {
                    input = "*";
                }
                else if (input === "÷") {
                    input = "/";
                }
                action = input;
                previousInput += currentInput + input;
                currentInput = "";
                totalInput = previousInput;
                console.log(totalInput);
                display.textContent = previousInput;
            }
        }

        else if (input === "=") {
                result = eval(totalInput);
                console.log(result);
                display.textContent = result;
                opDisplay.textContent = totalInput;
            }
        
        else if (button.classList.contains("number-button")) {
            if ((input === "00" || input === "0") && currentInput === "") { //handle for 0 and 00 when current value is already at 0
                //do nothing
            }
            else {
            currentInput += input;
            display.textContent = previousInput + currentInput;
            totalInput = previousInput + currentInput;
            console.log("total input = "+ totalInput);
            }
        }
    })
})