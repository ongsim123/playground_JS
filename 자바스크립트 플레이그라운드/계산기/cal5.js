const output = document.getElementById('output');

function getFirstValue() {
    let n1 = Number(prompt(`첫번째 숫자를 입력해 주세요.`));
    return n1;
}

let n = 2;
function getSecondValue() {
    let n2 = Number(prompt(`${n}번째 숫자를 입력해 주세요.`));
    n++;
    return n2;
}

function getOperator() {
    while (true) {
        var op = prompt('연산자(기호)를 입력해 주세요.');
        if (op === "+" || op === "-" || op === "*" || op === "/" || op === "q") {
            break
        } else {
            alert("연산자 입력 오류!");
        }
    }
    return op;
}

function calculate(first, second, giho) {
    let ret;
    switch (giho) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
    }
    return ret;
}

function print(value) {
    return `최종 결과값은 ${value} 입니다.`;
}

function main() {
    let num1 = getFirstValue();
    while (true) {
        let giho = getOperator();
        if (giho === 'q') {
            break;
        }
        let num2 = getSecondValue();
        num1 = calculate(num1, num2, giho);
    }
    output.innerHTML = print(num1);
}
main();
