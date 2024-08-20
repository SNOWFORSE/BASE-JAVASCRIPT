// Var -> criando uma variável

//var altura = 5;
//var largura = 8;

//var area = altura * largura
//console.log(area);

// let -> Cria uma variável ( forma mais atualizada de criar uma variável)
 
const altura = 5;
const largura = 8;
const forma = "retângulo"
let area;

if(forma === "retângulo"){
    area = altura * largura
}
else{
    area = (altura * largura)/2;
}

console.log(area);

// const -> (usada para criar "variáveis" fixas, que não se alteram)
// condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false);
console.log(contaPaga == 0)
console.log(contaPaga === 0)