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
            
            if (btnValue == "=") {
                var equation = displayVal;
                var lastChar = equation[equation.length - 1];
                //console.log(lastChar);
                if (equation) {
                    display.innerHTML = eval(equation);
                    decimalAdded = false;
                }
            }
            
            else    {
                display.innerHTML += btnValue;
            }
        };//keys ends
       
   }//for ends
});//addEventListener ends