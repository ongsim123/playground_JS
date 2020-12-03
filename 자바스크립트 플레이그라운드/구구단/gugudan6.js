let gugudan = {};

gugudan.result = [];

gugudan.current = 0; //초기화

gugudan.cal = function (n) {
    this.current = n;
    for (let i = 0; i <= 9; i++) {
        this.result[i] = n * (i + 1);
    }
};

gugudan.print = function () {
    document.write(`<h2>${this.current}단</h2>`);
    for (let i = 0; i < 9; i++) {
        document.write(`${this.current} X ${i + 1} = ${this.result[i]}<br>`);
    }
};

function init() {
    for (let i = 2; i <= 9; i++) {
        gugudan.cal(i);
        gugudan.print();
    }
}
init();