// Var -> criando uma variável

//var altura = 5;
//var largura = 8;

//var area = altura * largura;z
//console.log(area);

// let -> Cria uma variável ( forma mais atualizada de criar uma variável);
 
const altura = 5;
const largura = 8;
const forma = "retângulo";
let area;

if(forma === "retângulo"){
    area = altura * largura
}else if(forma === "triângulo"){
    area = (altura * largura) / 2
}else{
    console.log("Deveria ser uma")
}

console.log(area);

// const -> (usada para criar "variáveis" fixas, que não se alteram);
// condições booleanas (Truly ou falsy);
// 0 = false;
// 1 = true;

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false); // true;
console.log(contaPaga == 0) // true;
console.log(contaPaga === 0) // false;
console.log("" == false); // true;
console.log(1 == true); // false;

// Nulo e indefinido
// nulo -> vazio ou nada

let vitor;
let luanna = null;
let numero = 3
let texto = "Eu gosto de programação <3"

// Consultando os tipos de variáveis;

console.log(typeof vitor);
console.log(typeof luanna);
console.log(typeof numero);
console.log(typeof texto);

// Conversão de variável

const numeroNumber = 390;
const numeroString = "390";

console.log(numeroNumber == numeroString) // compara apenas o valor;
console.log(numeroNumber === numeroString)// compara tambem o tipo;
console.log(numeroNumber + numeroString)// concatenação;
console.log(numeroNumber + Number(numeroString))// Soma de numeros;