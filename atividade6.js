//crie um algoritmo que converte dias em horas, quando recebe um número de dias.
function converter(dia){
    const hora = 24 * dia
    return `${dia} dias tem ${hora} horas`
} 
console.log (converter(10))