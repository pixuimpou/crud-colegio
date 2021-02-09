// Valor => São agrupados de bits da memória do computador que representam uma informação;

// Operador => É um símbolo que diz para o compilador ou interpretador realizar uma operação matemática, lógica, 
// relacional ou de atribuição;

// Variável => É um espaço na memória do computador que pode ser atribuído um valor e, esse valor, 
// consegue ser alterado durante a execução do programa;

// Constante => É um espaço na memória do computador que pode ser atribuído um valor, mas que o valor não pode ser alterado;

// Expressão => É a combinação de uma ou mais constantes, variáveis, funções e operadores que 
// a linguagem interpreta retornando outro valor;

// Argumento => É / São o(s) valor(es) que precisa(m) ser passado(s) para obter o resultado de uma função.


// const piDeXFor = (num, counter) => {
//     for(let i = 1; i <= counter; i++) {
//         if(i % num === 0 || (i - num) % 10 === 0){
//             console.log("Pi");
//         } else {
//             console.log(i);
//         }
//     }
// }

// const piDeXWhile = (num, counter) => {
//     let i = 1;

//     while (i <= counter) {
//         if (i % num === 0 || (i - num) % 10 === 0) {
//             console.log("Pi");
//         } else {
//             console.log(i);
//         }
//         i++
//     }
// }

let perguntas = [
    {
        id: 1,
        label: "Qual é a minha cor favorita?",
        opcoes: [
            { id: 1, label: "amarelo" },
            { id: 2, label: "vermelho" },
            { id: 3, label: "verde" },
            { id: 4, label: "rosa" }
        ]
    },
    {
        id: 2,
        label: "Qual é o meu nome?",
        opcoes: [
            { id: 1, label: "Rafael Marcos" },
            { id: 2, label: "Marcos Rafael" },
            { id: 3, label: "Marcos" },
            { id: 4, label: "Rafael" }
        ]
    },
    {
        id: 3,
        label: "Qual é a melhor forma cientificamente comprovada de chamar o Toy?",
        opcoes: [
            { id: 1, label: "Totoy" },
            { id: 2, label: "Apenas toy" },
            { id: 3, label: "Toyzinho" },
            { id: 4, label: "Cachorro" }
        ]
    }
];
let respostas = [
    { idPergunta: 1, idOpcao: 3 },
    { idPergunta: 2, idOpcao: 4 },
    { idPergunta: 3, idOpcao: 1 },

];

const Fazergabarito = () => {
    let gabarito = [];

    respostas.forEach(resposta => {
        let idResposta = resposta.idPergunta;
        let verificadorPergunta = false;
        let verificadorOpcao = false;
        perguntas.forEach(pergunta => {
            let labelOpcao;
            let respostaDaPergunta = pergunta.id === idResposta;
            

            if(respostaDaPergunta) {
                
                verificadorPergunta = true;
                pergunta.opcoes.forEach(opcao => {
                    let opcaoCerta = resposta.idOpcao === opcao.id;

                    if(opcaoCerta) {
                        verificadorOpcao = true;
                        labelOpcao = opcao.label;
                        gabarito.push({ id: idResposta, label: pergunta.label, resposta: labelOpcao, idOpcao: resposta.idOpcao })
                    }
                })     
            }
            
        })
        if (verificadorOpcao === false) {
            console.log("A pergunta com id:", idResposta, "não possui opção com id:", resposta.idOpcao);
        }
        if(verificadorPergunta === false){
            console.log("A pergunta com id:",idResposta,"não existe")
        }
    });
    console.log(gabarito);
}

Fazergabarito()