//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// Se a media for igual ou maior que 7 - Aprovado
// Se a media for maior e igual a cinco e menor que 7 - Recuperação
// Se a media for menor que 5 - Reprovado 

function boletim(nota1, nota2, nota3, nota4){
    let media = (nota1 + nota2 + nota3 + nota4)/4
    if(media >= 7 && media <= 10){
        return `Aprovado, sua media é ${media}`
    } else if(media >= 5 && media < 7){
        return `recuperação, sua media é ${media}`
    } else if(media < 5 && media >= 0){ 
        return ` reprovado, sua media é ${media}`
    }     
}
console.log(boletim(7,5,8,10))           
