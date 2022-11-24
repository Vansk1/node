/**
 * Imposto Produto
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let produto = Number(read.question("Digite o Valor do Produto: ").replace(",","."))
let porcentagem = Number(30)
//processamento
let imposto = (produto + (produto * 0.30))

//saida 
console.log(`R$ ${produto.toFixed(2)} Valor Produto`)
console.log(`R$ ${imposto.toFixed(2)}  Valor com Imposto`)