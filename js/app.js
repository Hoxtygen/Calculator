//Get all the keys from the document
var keys = document.querySelectorAll('#calculator span');
var operators = ["+", "*", "-", "/"];
var decimal_added = false;
//console.log(keys);
//Add onclick event to all the keys and perform operations
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick= function (event) {
        //Get the input and button values
        var display = document.querySelector("#display");
        var displayVal = display.innerHTML;
        var btnValue = this.innerHTML;
        //console.log(btnValue);

        //Append the key values btnValue to the display string and finally use javascript's eval to get the result
        if (btnValue === "C") {
            display.innerHTML = "";
        }

        //if the eval key is pressed calculate and display it
        if (btnValue === "=") {
            var equation = displayVal;
            var lastChar = equation[equation.length - 1];
            if (equation) {
                display.innerHTML = eval(equation).toFixed(3);
                decimal_added = false;
            }//inner if ends
        }//outer if ends

        //Basic functionalties
        else if(operators.indexOf(btnValue > -1))   {
            var lastChar = displayVal[displayVal.length - 1];

            //Only add operators if input is not empty and there is no operator at the last
            if (displayVal != "" && operators.indexOf(lastChar) == -1) {
                display.innerHTML += displayVal
            }
            //Allow minus if the string is empty
            else if (displayVal === "" && btnValue == "-") {
                display.innerHTML += btnValue;
                
                //Replace the last operator if exists with the newly pressed operator
                if (operators.indexOf(lastChar) > -1 && displayVal.length > 1) {
                    //.matches any character while $ denotes the end of string, so anything
                    //(will be an operator in this case) at the end of the string will get 
                    //replaced by the new operator
                    display.innerHTML = displayVal.replace(/.$/, displayVal);
                    //Check to see if the last character of the equation is an operator or a decimal
                    //if so, remove it
                    if (operators.indexOf(lastChar) > -1 || lastChar == "") {
                        equation = equation.replace(/.$/, "");
                    }
                }
                decimal_added = false;
            }

            //Solving the decimal issue
            else if (btnValue == ".") {
                if (decimal_added) {
                    display.innerHTML += btnValue;
                    decimal_added = true;
                }
            }
        }//else if ends
        //if any other key is pressed append it 
        else {
            display.innerHTML  += btnValue;
        }//if ends
    };//onclick ends
    
}//for ends