// //código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }


// exercicio 1
const nome = prompt('digite seu nome')
const resultado = nome === "pedro henrique"? "seu nome é ph": "seu nome é "+ nome	
console.log(resultado)

// exercicio 2

const idade = +prompt('digite sua idade')
const resultadoIdade = idade >= 18? 'pode tirar a carteira de motorista' : 'ainda não pode tirar carteira de motorista'
console.log(resultadoIdade)