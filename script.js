var results = document.querySelector(".result");
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



let displayed = "";
let displayed2 = "";

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

function operate(operator, x, y) {
    
    if (operator === "add") {
        add(x, y);
    } else {
        subtract(x, y);
    }
}

function displayNum(numb) {
    displayed += numb;
    results.textContent = displayed;
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

