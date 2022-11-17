/**
 * Strings
 */

const Van = "Vanderson Alves"
//índice         0123456789...
console.log(typeof(Van))
console.log(Van)
//Obtendo o valor de um caractere da string
console.log(Van.charAt(5))
//Para obter o valor do índice de uma string
console.log(Van.indexOf("é"))
//Obter uma sequência à partir do índice
console.log(Van.substring(8))
//É possível alterar o conteúdo da string
console.log(Van.replace("Vanderson","Vand"))//(original,novo)
//Dica: replace(",",".")

/**** Concatenação  ****/
const x = 2
const y = Number("3")//converter uma string em um número
console.log(typeof(x))
console.log(typeof(y))
console.log("valor de x: " + x)
console.log("2" + x)//concatena
console.log ("3" - x)//subtrai ( o mesmo para * /)
console.log("Vand: " + Van)
//evitar o uso do + na concatenação
//Para concactenar usar crases ``
console.log(`Vand: ${Van}`)