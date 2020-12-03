function init() {
    let result = [];

    for (let ask = 2; ask <= 9; ask++) {
        for (let i = 1; i <= 9; i++) {
            result[i] = ask * i;
        }
        document.write(`<h2>${ask}단</h2>`)
        for (let i = 1; i <= 9; i++) {
            let str = `${ask} X ${i} = ${result[i]}<br>`;
            document.write(str);
        }
    }
}
init();