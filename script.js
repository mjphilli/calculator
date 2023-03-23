//CURRENTLY DOES NOT FACTOR IN PREVIOUS RESULT

var displayDiv = document.querySelector("#display");
var first, second, last, operator;

function press(n) {
    if (last)
    {
        displayDiv.innerText = 0;
        last = false;
    }

    if (displayDiv.innerText == 0)
    {
        displayDiv.innerText = n;
    }
    else
    {
        displayDiv.innerText += n;
    }
}

function setOP(op) {
    operator = op;
    last = true;

    if (!first)
    {
        first = displayDiv.innerText;
    }
    else
    {
        second = displayDiv.innerText;
    }
}

function clr() {
    displayDiv.innerText = 0;
    first = "";
    second = "";
    operator = "";
}

function calculate() {
    last = true; //indicating calculate was called
    second = displayDiv.innerText;
    switch(operator) {
        case '+':
            displayDiv.innerText = Number(first) + Number(second);
            break;
        case '-':
            displayDiv.innerText = Number(first) - Number(second);
            break;
        case '*':
            displayDiv.innerText = Number(first) * Number(second);
            break;
        case '/':
            displayDiv.innerText = Number(first) / Number(second);
            break;
    }

    console.log("first: " + first + ", operator: " + operator + ", second: " + second + ", total: " + displayDiv.innerText);
    first = "";
    second = "";
    operator = "";
}