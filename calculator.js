//  set number on calculator screen
let outputScreen = document.getElementById("outputScreen");

function display(num){
    outputScreen.value += num;
}
// end

// set invalid number to get alert
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("Invalid")
    }
}
// end

//clear the numbers
function Clear(){
    outputScreen.value = " ";
}
// end

// delete the numbers
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
// end