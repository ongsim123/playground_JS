function main() {
    const output = document.getElementById('output');
    let n1 = Number(prompt(`첫번째 숫자를 입력해 주세요.`));
    
    let giho, n2;
    let result = n1;
    let n = 2;

    while (true) {
        giho = prompt('연산자를 입력해 주세요.');

        if( giho === 'q') {
            break
        }
        
        n2 = Number(prompt(`${n}번째 숫자를 입력해 주세요.`));

        if (giho === '+') {
            result += n2;
        }
        else if (giho === '-') {
            result -= n2;
        }
        else if (giho === '*') {
            result *= n2;
        }
        else if (giho === '/') {
            result /= n2;
        }
        else {
            result = `잘못 입력하였습니다.`;
            break
        }
        n++;
    }
    output.innerHTML = `최종결과값 : ${result}`;
} main();