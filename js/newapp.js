document.addEventListener("DOMContentLoaded", function() {
    //Get all the keys
    var keys = document.querySelectorAll("#keys span");
    var operators = ["+", "/", "-", "*"];
    var decimalAdded = false;
   //Add onclick event to all the keys
   for (let i = 0; i < keys.length; i++) {
       keys[i].onclick = function (event) {
        var display = document.querySelector("#display");
        var displayVal = display.innerHTML;
        var btnValue = this.innerHTML;
       // console.log(btnValue);
            if (btnValue == "C") {
                display.innerHTML = "";
                // console.log(displayVal);
            }
            
            else if (btnValue == "=") {
                var equation = displayVal;
                var lastChar = equation[equation.length - 1];

                //check the last character of the equation, if it's a decimal or an operator remove it
                if (operators.indexOf(lastChar) > -1 || lastChar == ".") {
                    equation = equation.replace(/.$/, "");
                }
                if (equation) {
                    display.innerHTML = eval(equation);
                    decimalAdded = false;
                }
            }
            /*Basic functionalties is now complete. Issues to be solved are
                1. No two operators should be added consecutively
                2. The equation shouldn't start with an operator except minus
                3. Not more than one decimal should be present in a number
            */
            //1.
               else if (operators.indexOf(btnValue) > -1) {
                lastChar = displayVal[displayVal.length - 1];
                //only add operators if display is not empty and there's no operator at the last
                if (displayVal != "" && operators.indexOf(lastChar) == -1) {
                    display.innerHTML += btnValue;

                }
                 //2. Allow minus if the string is empty
                else if (displayVal == "" && btnValue == "-") {
                    display.innerHTML += btnValue;
                }
                //Replace the last operator (if it exists) with the newly pressed operator
                if (operators.indexOf(lastChar) > -1 && displayVal.length > -1) {
                    display.innerHTML += displayVal.replace(/.$/, btnValue);
                    // Here, '.' matches any character while $ denotes the end of string, so anything 
                    //(will be an operator in this case) at the end of string will get replaced by new operator
                }
                decimalAdded = false;  
            }
            // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once 
            //the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator,
            // eval or clear key is pressed.
            else if (btnValue == ".") {
                if (!decimalAdded) {
                    display.innerHTML += btnValue;
                    decimalAdded = true;
                }
            }
             
            else    {
                display.innerHTML += btnValue;
            }
            // Prevent page jumps
            event.preventDefault();
        };//keys ends
       
   }//for ends
});//addEventListener ends

