/**
 *  Jogo Pedra - Papel - Tesoura
 */

//importar pacotes
const read = require('readline-sync')
console.log("_________Jokenpô__________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
//logica do jogador
let jogador = Number(read.question("Digite a opçao desejada: "))
switch (jogador){
    case 1:
        console.log("jogador escolheu: PEDRA ")
        break
    case 2:
        console.log("jogador escolheu: PAPEL ")
        break
    case 3:
        console.log("jogador escolheu: TESOURA ")
        break    
    default:    
    }
    
//logica do computador

let computador = Math.floor(Math.random() * 3 + 1) //0 1 2 3
switch (computador){
    case 1:
        console.log("computador escolheu: PEDRA ")
        break
    case 2:
        console.log("computador escolheu: PAPEL ")
        break
    case 3:
        console.log("computador escolheu: TESOURA ")
        break     
    }
    console.log("")
    //logica para declarar o vencedor ou empate
    if ((jogador == 1 && computador == 1) || (jogador == 2 && computador == 2) || (jogador == 3 && computador == 3)){
        console.log("EMPATE")
    } else if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador == 2)) {
        console.log("jogador VENCEU")
    } else {
        console.log("computador Venceu")
    }