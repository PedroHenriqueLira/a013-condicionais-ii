// Codigo de Murilo
// const num = 15;
// if(num){
//     console.log(num % 2 === 0? 'O número é divisivel por 2' : '')
//     if(num % 3 === 0) {
//       console.log('O número é divisivel por 3')
//     }
//   }




// ifs aninhados
const num = +prompt('Digite seu numero aqui.')

if (num % 2 === 0){
    console.log('seu numero é divisivel por 2')

    if (num % 3 === 0){
    console.log('seu numero é divisivel por 3')

    }else{ console.log('O numero não é divisivel por 2')
}
}else{ console.log("o numero não é divisivel por 3")}



// utilizando operador lógico

if (num % 2 === 0 || num % 3 === 0){console.log('esse numero é divisivel por 2 e por 3')}
