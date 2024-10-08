//FUNÇÕES!!!

let x = "nada";
console.log(x)
x = "oi"
y = 'Tchau'

// Declaração de função 

imprimeTexto(y)

// 1) Declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Chamar/executar a função

imprimeTexto(x)
imprimeTexto("Eu sou não sou o x9 que contou pra diretora")
imprimeTexto("estão se doendo ate hoje por isso e eu nn fiz nada <3")

function soma(){
    return 2 + 2
}
console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4, 7))
imprimeTexto(somaDeNumeros(24, 11))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} o minha idade é ${idade}`
}

// A ordem dos parâmetros é importante!!
imprimeTexto(nomeIdade("Gustavo", 17))
imprimeTexto(nomeIdade(17, "Gustavo"))

imprimeTexto(multiplicacao())
//Você pode definir um parâmetro inicial para sua função
function multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
imprimeTexto(multiplicacao(somaDeNumeros(3,4), somaDeNumeros(5,10)));

// Expressão de funcão

const constanteSoma = function(nume1, nume2){return nume1 + nume2}
console.log(constanteSoma(1000, 999))

// Funções e var são "listadas" no topo do arquivo

//Arrow function
const apresentaArrow = nome => `Meu nome é ${nome}`;
const somaEmFlecha = (nu1, nu2) => nu1 + nu2;

console.log (apresentaArrow("Apolo"))
console.log(somaEmFlecha(99, 623))

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "Essa função é apenas para números pequenos"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2, 3))