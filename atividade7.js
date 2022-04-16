//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar.

function divisao(numero1, numero2){
    const resultado = numero1/numero2
    if (numero1 % numero2 === 0 && resultado % 2 === 0){
        return `o resultado é ${resultado}, o número é par`
    } else {
        return `o resultado é ${resultado}, o número é impar`
    
    }  
}
console.log (divisao(18,3))      
