function gugudan(x){
    let arr = [];
    for(let i=1;i<=9;i++){
        arr[i-1] = x * i;
    }
    return arr;
}

function printResult(x,arr){
    document.write(`<h2>${x}단</h2>`);
    for(let i=1;i<=9;i++){
        document.write(`${x} X ${i} = ${x * i}<br>`)
    }
}

function init(){
    for(let i=2;i<=9;i++){
        let result = gugudan(i);
        printResult(i,result);
    }
}
init();