function gugudan(){
    let ask = prompt('몇 단을 출력할까요?');
    let num = Number(ask);

    document.write(`<h1>${num}단</h1>`);
    let i = 1;
    while(i<=9){
        document.write(`${num} * ${i} = ${num * i}<br>`);
        i++;
    }

}
gugudan();