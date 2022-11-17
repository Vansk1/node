/**
 * Exemplos de uso do vetor
 */

let nipes = ["Ouros","Copas","Espadas","Paus"]
//              0  1 2 3 4 5 6 7 8 9     10     11       12 
let faces = ["Az",2,3,4,5,6,7,8,9,10,"Valete","Dama","Rei"]

//Recuperando a carta Az de ouros
console.log(`carta: ${faces[0]} de ${nipes[0]}`)

//Recuperando a carta Dama de copas
console.log(`carta: ${faces[11]} de ${nipes[1]}`)

//Sorteio de uma carta
//Math.random - > gerador de números aleatórios
//Math.floor -> converte para números interiros
let SorteioNipe = Math.floor(Math.random() * 4)
let SorteioFace = Math.floor(Math.random() * faces.length)
console.log(`Carta sorteada: ${faces[SorteioFace]} de ${nipes[SorteioNipe]} `)