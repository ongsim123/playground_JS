function main() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let giho = document.getElementById('giho').value;

    const result = document.getElementById('result');
    let str = '';
    switch (giho) {
        case '+':
            str += `덧셈 : ${n1 + n2}<br>`;
            break;

        case '-':
            str += `뺄셈 : ${n1 - n2}<br>`
            break;

        case '*':
            str += `곱셈 : ${n1 * n2}<br>`
            break;

        case '/':
            str += `나눗셈 : ${n1 / n2}<br>`
            break;

        default:
            str += '입력오류'
            break;
    }
    result.innerHTML = str;
} main();

/*if문 활용
if(giho === '+'){
    str += `더하기 : ${n1 + n2}<br>`
}
else if(giho === '-'){
    str += `빼기: ${n1 - n2}<br>`
}
else if(giho === '*'){
    str += `곱하기 : ${n1 * n2}<br>`
}
else if(giho === '/'){
    str += `나누기 : ${n1 / n2}<br>`
}
else{
    str += '입력오류'
}*/