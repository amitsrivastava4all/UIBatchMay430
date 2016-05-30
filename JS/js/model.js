/*
var calculatorObject = {
 add:function(firstNumber, secondNumber){
    return parseInt(firstNumber) + parseInt(secondNumber);
},
subtract:function (firstNumber, secondNumber){
    return parseInt(firstNumber) - parseInt(secondNumber);
}
}*/

function calculate(firstNumber,secondNumber,operator){
    var expression = firstNumber + operator + secondNumber;
    return eval(expression);
}