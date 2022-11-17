/**
 * Calculo da Média
 */

//importar pacote
const read = require('readline-sync')
let colors = require ('colors')
//variáveis
console.log("==== Cálculo da Média ====")
let nome = read.question("Digite o seu nome:")
console.log(`Aluno: ${nome}`)
let nota1 = Number(read.question("Digite a nota1: ").replace(",","."))
let nota2 = Number(read.question("Digite a nota2: ").replace(",","."))
//Processamento
let média = (nota1 + nota2) / 2
//saída
console.log(`Média: ${média.toFixed(1)}`)
//status
if(média < 5) {
    console.log("reprovado".red)
} else {
    console.log("Aprovado".blue)
}
