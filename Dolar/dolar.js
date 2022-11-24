/**
 * Compra Dolar
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let reais = Number(read.question("Digite o Valor em Reais: ").replace(",","."))

//processamento
let dolar = (reais * 0.1866)

//saida 
console.log(`${dolar.toFixed(2)} Dolar Americano`)