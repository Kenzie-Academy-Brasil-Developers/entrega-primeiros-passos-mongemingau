let nome = prompt("Entre com o nome do aluno")
if (nome.length < 5) 

    {alert("Nome é Inválido, necessário 5 dígitos(se seu nome tiver menos que 5 dígitos adicione 0 ao final)")
    nome = prompt ("Entre com o nome do aluno")
}




//-colocar e se, se for menos que 5 aparecer denovo a pergunta e se for maior que 5 continuar para o prox//


let presenca = parseInt(prompt("Qual a presença?"));
if (presenca <= 6 || presenca >10 ) {
    alert("Valor é inválido ou reprovado por falta")
}





 {
    let materiaGeografia = prompt("Digite a materia: Geografia")
    let notaGeografia = parseFloat(prompt("Qual foi sua nota em geografia?"))
    if (notaGeografia <= 10 && notaGeografia >= 0) {
    }
    else {
        notaGeografia > 10 && notaGeografia < 0
        alert("Valor é inválido")
    }

    //-- qual usar e qual é melhor && ou || --//

    let materaialInformatica = prompt("Digite a materia: Informática")
    let notaInformatica = parseFloat(prompt("Qual foi sua nota em informática?"))
    if (notaInformatica < 0 || notaInformatica > 10) {
        alert("Valor é inválido")
    }



    let materiaMatematica = prompt("Digite a materia: Matemática?")
    let notaMatematica = parseFloat(prompt("Qual foi a sua nota em matemática?"))
    if (notaMatematica < 0 || notaMatematica > 10) {
        alert("Valor é inválido")
    }




    let materiaPortugues = prompt("Digite a materia: Português")
    let notaPortugues = parseFloat(prompt("Qual foi a sua nota em português?"))
    if (notaPortugues < 0 || notaPortugues > 10) {
        alert("Valor é inválido")
    }



    let materiaIngles = prompt("Digite a materia: Inglês")
    let notaIngles = parseFloat(prompt("Qual foi a sua nota em inglês?"))
    if (notaIngles < 0 || notaIngles > 10) {
        alert("Valor é inválido")
    }




    let materiaHistoria = prompt("Digite a materia: História")
    let notaHistoria = parseFloat(prompt("Qual foi a sua nota em história?"))
    if (notaHistoria < 0 || notaHistoria > 10) {
        alert("Valor é inválido")
    }


    let materiaFilosofia = prompt("Digite a materia: Filosofia")
    let notaFilosofia = parseFloat(prompt("Qual foi a sua nota em filosofia?"))
    if (notaFilosofia < 0 || notaFilosofia > 10) {
        alert("Valor é inválido")
    }


    let materiaSociologia = prompt("Digite a materia: Sociologia")
    let notaSociologia = parseFloat(prompt("Qual foi a sua nota em sociologia?"))
    if (notaSociologia < 0 || notaSociologia > 10) {
        alert("Valor é inválido")
    }






    let materiaEdfisica = prompt("Digite a materia: Educação Física")
    let notaEdfisica = parseFloat(prompt("Qual foi a sua nota em educação física?"))
    if (notaEdfisica < 0 || notaEdfisica > 10) {
        alert("Valor é inválido")
    }




    let materiaLiteratura = prompt("Digite a materia: Literatura")
    let notaLiteratura = parseFloat(prompt("Qual foi a sua nota em literatura?"))
    if (notaLiteratura < 0 || notaLiteratura > 10) {
        alert("Valor é inválido")
    }




    let somaNota = notaSociologia + notaLiteratura + notaEdfisica + notaGeografia + notaInformatica + notaMatematica + notaPortugues + notaIngles + notaHistoria + notaFilosofia;
    let mediaNota = somaNota / 10


 }

    if (mediaNota >= 8 && presenca >= 6) {
        alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presenca de ${presenca}: Aluno Aprovado!`)
    }
    
    else {
      
        alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presenca de ${presenca}: Aluno Reprovado!`)
        }
