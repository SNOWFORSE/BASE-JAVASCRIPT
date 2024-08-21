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