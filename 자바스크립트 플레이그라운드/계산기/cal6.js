const result = document.getElementById('result');
let n = 1;

function getFirstnum() {
    let num1 = Number(prompt(`${n}번째 숫자를 입력해 주세요.`));
    n++;
    return num1;
}

function getNnum() {
    let num_N = Number(prompt(`${n}번째 숫자를 입력해 주세요.`));
    n++;
    return num_N;
}

function getOp() {
    while (true) {
        var op = prompt(`연산자를 입력해 주세요.`);
        if (op === '+' || op === '-' || op === '*' || op === '/' || op === 'q') {
            break
        } else {
            alert(`연산자 입력 오류. 다시 입력해 주세요.`);
        }
    }
        return op;
}

function calculate(first, second, op) {
    let cal;
    switch (op) {
        case '+':
            cal = first + second;
            break
        case '-':
            cal = first - second;
            break
        case '*':
            cal = first * second;
            break
        case '/':
            cal = first / second;
            break
    }
    return cal;
}

function print(result) {
    return `최종결과값은 ${result}입니다.`;
}

function main() {
    let num1 = getFirstnum();
    while (true) {
        let op = getOp();
        if (op === 'q') {
            break;
        }
        let num2 = getNnum();
        num1 = calculate(num1, num2, op);
    }
    result.innerHTML = print(num1);
}
main();