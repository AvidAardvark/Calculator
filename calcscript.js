function display(number) {
    var x = document.getElementById('calculation').value;
    if (x == "") {
        document.getElementById('calculation').value = number;
    }
    else {
        document.getElementById('calculation').value = x + number;
    }
}

function clearText() {
    document.getElementById('calculation').value = "";
}

function solve() {
    var expression = document.getElementById('calculation').value;
    if (expression != "") {
        var num1 = Number(expression.slice(0,1));
        var operation = expression.slice(1,2);
        var num2 = Number(expression.slice(2));
        if (operation == "+") {
            document.getElementById('calculation').value = num1 + num2;
        }
        else if (operation == "-") {
            document.getElementById('calculation').value = num1 - num2;
        }
        else if (operation == "x") {
            document.getElementById('calculation').value = num1 * num2;
        }
        else if (operation == "/") {
            document.getElementById('calculation').value = num1 / num2;
        }
        else {
            document.getElementById('calculation').value = "Error."
        }
    }
}