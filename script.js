var results = document.querySelector(".resulttext");
var resultbox = document.querySelector(".result")

//numbers
var zero = document.querySelector("#zero");
var nine = document.querySelector("#nine");
var eight = document.querySelector("#eight");
var seven = document.querySelector("#seven");
var six = document.querySelector("#six");
var five = document.querySelector("#five");
var four = document.querySelector("#four");
var three = document.querySelector("#three");
var two = document.querySelector("#two");
var one = document.querySelector("#one");
var point = document.querySelector("#point");

var clear = document.querySelector("#clear");
var onOff = document.querySelector("#onOff");


//operators

var X = document.querySelector("#X");
var inputDivide = document.querySelector("#divide");
var inputAdd = document.querySelector("#add");
var inputSubtract = document.querySelector("#subtract");
var squared = document.querySelector("#square");




var equals = document.querySelector("#equals");


num1="";
num2 = "";
operator = "";
let beforeOperator = true;
let calculatorOn = true;

function add(x, y) {
    let result = x + y;
    return result;
} 

function subtract(x, y) {
    let result = x - y;
    return result;
}

function multiply(x, y) {
    let result = x * y;
    return result;
}

function divide(x, y) {
    let result = x / y;
    return result;
}

function square(x) {
    let result = Number(x * x);
    results.textContent = parseFloat(result).toFixed(2);
    num1 = parseFloat(result).toFixed(2);
}
let finalResult = "";

function operate(operator, x, y) {
    if (operator === " * ") {
        finalResult = multiply(x, y);
    } else if (operator === " / ") {
        finalResult = divide(x, y);
    } else if (operator === " + ") {
        finalResult = add(x, y);
    } else if (operator === " - ") {
        finalResult = subtract(x, y);
    }
    results.textContent = parseFloat(finalResult).toFixed(2);
    num1 = parseFloat(finalResult).toFixed(2);
    num2 = "";
    operator = "";
    beforeOperator = true;
}

function displayNum(numb) {
    if (beforeOperator === true) {
    num1 += numb;
    } else {
    num2 += numb;
    }
    displayAll();
}

function displayOperator(num) {
    if (beforeOperator === true) {
    operator = num;
    beforeOperator = false;
    displayAll();
    }
}

function displayAll() {
let displayed = num1 + operator + num2;
results.textContent = displayed;
}

function clearAll() {
    num1 = "";
    operator = "";
    num2 = "";
    displayAll();
}

function toggleOn() {
    if(calculatorOn === true) {
        resultbox.className= "result";
        calculatorOn = false;
        clearAll();
    } else {
        resultbox.className = "resultOff";
        calculatorOn = true;
    }
}

// seven.addEventListener('click', displaySeven);
// eight.addEventListener('click', displayEight);
zero.addEventListener('click', function(){ displayNum('0');}, false);
nine.addEventListener('click', function(){ displayNum('9');}, false);
eight.addEventListener('click', function(){ displayNum('8');}, false);
seven.addEventListener('click', function(){ displayNum('7');}, false);
six.addEventListener('click', function(){ displayNum('6');}, false);
five.addEventListener('click', function(){ displayNum('5');}, false);
four.addEventListener('click', function(){ displayNum('4');}, false);
three.addEventListener('click', function(){ displayNum('3');}, false);
two.addEventListener('click', function(){ displayNum('2');}, false);
one.addEventListener('click', function(){ displayNum('1');}, false);
point.addEventListener('click', function(){ displayNum('.');}, false);



//operator event listeners
X.addEventListener('click', function(){ displayOperator(' * ');}, false);
inputDivide.addEventListener('click', function(){ displayOperator(' / ');}, false);
inputAdd.addEventListener('click', function(){ displayOperator(' + ');}, false);
inputSubtract.addEventListener('click', function(){ displayOperator(' - ');}, false);
clear.addEventListener('click', clearAll);
squared.addEventListener('click', function(){ square(num1);}, false);



//operate event listeners
equals.addEventListener('click', function(){ operate(operator, num1, num2);}, false);
onOff.addEventListener('click', toggleOn);
