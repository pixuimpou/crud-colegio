// Valor => São agrupados de bits da memória do computador que representam uma informação;

// Operador => É um símbolo que diz para o compilador ou interpretador realizar uma operação matemática, lógica, 
// relacional ou de atribuição;

// Variável => É um espaço na memória do computador que pode ser atribuído um valor e, esse valor, 
// consegue ser alterado durante a execução do programa;

// Constante => É um espaço na memória do computador que pode ser atribuído um valor, mas que o valor não pode ser alterado;

// Expressão => É a combinação de uma ou mais constantes, variáveis, funções e operadores que 
// a linguagem interpreta retornando outro valor;

// Argumento => É / São o(s) valor(es) que precisa(m) ser passado(s) para obter o resultado de uma função.


const piDeXFor = (num, counter) => {
    for(let i = 1; i <= counter; i++) {
        if(i % num === 0 || (i - num) % 10 === 0){
            console.log("Pi");
        } else {
            console.log(i);
        }
    }
}

const piDeXWhile = (num, counter) => {
    let i = 1;

    while (i <= counter) {
        if (i % num === 0 || (i - num) % 10 === 0) {
            console.log("Pi");
        } else {
            console.log(i);
        }
        i++
    }
}
