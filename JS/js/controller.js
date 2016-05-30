window.addEventListener("DOMContentLoaded",init);
function init(){
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click",doCalculation);
    }
    //document.getElementById("add").addEventListener("click",doCalculation);
    //document.getElementById("subtract").addEventListener("click",doCalculation);
    
}

function doCalculation(event){
    //var value = event.srcElement.innerHTML;  // html5 style
    var value = event.srcElement.getAttribute("data-operation");
    var result = 0;
    var firstNumber= parseInt(document.getElementById("firstNumber").value);
        var secondNumber = parseInt(document.getElementById("secondNumber").value);
    //if(this.innerHTML==="Add"){
    //result = calculatorObject[value](firstNumber,secondNumber);
    result = calculate(firstNumber,secondNumber,value);
    /*if(value==="Add"){
        result= calculatorObject.add(firstNumber,secondNumber);
    }
    else
    if(this.innerHTML==="Subtract"){
        result= calculatorObject.subtract(firstNumber,secondNumber);
    }*/
    document.getElementById("result").innerHTML="Calc Result is "+result;
}
/*
function add(firstNo,secondNo){
        var firstNumber= parseInt(document.getElementById("firstNumber").value);
        var secondNumber = parseInt(document.getElementById("secondNumber").value);
        var result = firstNo + secondNo;
        return result;
        //document.getElementById("result").innerHTML="Sum is "+result;    
    //alert("Sum is "+result);
    }
    function subtract(firstNo,secondNo){
         //var firstNumber= document.getElementById("firstNumber").value;
        //var secondNumber = document.getElementById("secondNumber").value;
        return firstNo - secondNo;
        //document.getElementById("result").innerHTML="Subtraction is "+result;
    }*/