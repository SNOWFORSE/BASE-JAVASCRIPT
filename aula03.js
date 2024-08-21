// alguns erros conuns

//const numero; 1º erro: não declarar um a constante;
const minhaVar = "oi" // 2º Erro: Não declarar uma variável e chamar no código;
console.log(minhaVar);// exemplo, chamar minhavar com V minúsculo;

console.error("isso esta errado")// 3º "Erro": Você pode declarar um erro com o console.log

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
}else {
    console.log("Suco de Laranja")
}

//Valor ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco de Maça")
//modo ternário, utilizando a estrutura _____ >= _____ ? _____ : _____
//modo ternário, utilizando a estrutura _____ <= _____ ? _____ : _____
//modo ternário, utilizando a estrutura _____ == _____ ? _____ : _____

//Template string

const nome = "Gustavo";
const idade = 17;
const cidadeNatal = "Curitiba";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " anos e nasci em " + cidadeNatal;
console.log(apresentacao)

//template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade}, e minha cidade natal é ${cidadeNatal}`;
console.log(apresentacao2)