//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
function parOuImpar(numero){
    if (numero % 2 == 0){
        console.log (`o numero ${numero} é par`)
    } else if(numero % 2 != 0){
        console.log (` o numero ${numero} é impar`)
    }
}
       console.log(parOuImpar(10))
           