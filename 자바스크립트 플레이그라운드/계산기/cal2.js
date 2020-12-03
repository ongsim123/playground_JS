function main() {
    let askNumber1 = Number(document.getElementById('n1').value);
    let askNumber2 = Number(document.getElementById('n2').value);

    document.write(`<h1>계산 결과</h1>`)
    document.write(`덧셈 : ${askNumber1 + askNumber2}<br>`);
    document.write(`뺄셈 : ${askNumber1 - askNumber2}<br>`);
    document.write(`곱셈 : ${askNumber1 * askNumber2}<br>`);
    document.write(`나눗셈 : ${askNumber1 / askNumber2}<br>`);
}
main();