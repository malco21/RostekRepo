/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validate()
{
    // Get references to input elements
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    // Reset all borders 
    first.style.border = "black thin solid";
    init.style.border = "black thin solid";
    last.style.border = "black thin solid";
    // Define patterns for name and initial
    var namePattern = /^[A-Z][a-z]+$/;
    var valid = true;  // Assume input data is valid
    // Check validity of inputs
    if (!first.value.match(namePattern))
    {
        valid = false;
        first.style.border = "red thick solid ";
    }
    if (!last.value.match(namePattern))
    {
        valid = false;
        last.style.border = "red thick solid ";
    }
    return valid;
}

