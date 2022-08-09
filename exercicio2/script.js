let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }


switch (nacionalidade){
    case "brasileira":
        console.log("você é do brasil")
        break
    case "argentina":
        console.log("você é da argentina")
        break
    case "uruguaia":
        console.log("você é do uruguai")
        break
    case "chilena":
        console.log("você é do chile")
        break
    case "colombiana":
        console.log("você é da colombia")
        break
    default:
        console.log("você não é de nenhum desses paises") }