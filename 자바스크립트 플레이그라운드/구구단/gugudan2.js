function gugudan(){
    let ask = prompt("몇 단을 출력할까요?");
    let num = Number(ask);
    document.write(`<h1>${num}단 (1 ~ 9)</h1>`);
    for(let i=1;i<=9;i++){
        document.write(`${num} * ${i} = ${num * i}<br>`);
    }
}
gugudan();