/**
 * Fundamentos do JS
 */

// Alinguagem JS trabalha com sentenças
//; é opcional
// Você pode isar '' ou "" mas não pode usar "'
console.log("Hello JS")
//A linguagem JS também trabalha com blocos
{
    console.log("bloco")
}
//Variáveis no JS não são tipadas
// var let const ( são usadas para alocação de memória)

var nome = "Vanderson"
var idade = 32
var vip = true
console.log("nome: "+ nome)
console.log("tipo de variável: "+ typeof(nome))
console.log("idade: " + idade)
console.log("tipo de variável: "+ typeof(idade))
console.log("Vip: " + vip)
console.log("tipo de variável:" + typeof(vip))

//----------------------------------------------
// problemas no uso do var para declarar uma variável
var teste = "hello" // criar uma variável
teste = "olá mundo" // alterar uma variável
var teste = "BUG1" // redeclarar a variável
console.log(teste)

//let resolve esse problema
let teste2 = "hello2" //criar uma variável
teste2 = "Olá mundo 2" 
//let teste2 = "BUG2" //o let protege a variável não permitindo 
//a criação de uma segunda variável com o mesmo nome
console.log(teste2)


//constantes
const pi = 3.1415
//pi = 2 //contante não pode ser alterada
console.log("valor de PI: " + pi)
