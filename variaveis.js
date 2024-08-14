// Variáveis 
// tipo Number

const meuNumero = 6
const numeroUm = 10
const numeroDois = 11

const soma = numeroDois + numeroUm;
console.log(soma);

const subtracao = meuNumero - numeroDois;
console.log(subtracao);

const multiplicacao = numeroDois * numeroUm;
console.log(multiplicacao);

const divisao = meuNumero / numeroDois;
console.log(divisao);

//Float (numero decimal)
const numeroTres = 3.3;
const numeroQuatro = .5; //mesma coisa que 0.5

const operacaoM = numeroTres * numeroQuatro;
console.log(operacaoM);

// NaN not a number

const operacaoN = 'a' * meuNumero;
console.log(operacaoN);

const novaOperacao = "a" + meuNumero;
console.log(novaOperacao);

//string (texto)

const meuNome = 'Gustavo'
const frase = "Meu nome é: "
const IssoNaoEUmNumero = "50"

const minhaFrase = frase + meuNome;
console.log(minhaFrase);

const operacaoO = IssoNaoEUmNumero + meuNumero;
console.log(operacaoO);

// Boolean 
// True -> verdadeiro;
// False -> falso;

const comparacao = 6 === meuNumero;
console.log(comparacao);

const comparacaoII = "6" === meuNumero;
console.log(comparacaoII);

const comparacaoIII = "6" == meuNumero;
console.log(comparacaoIII);