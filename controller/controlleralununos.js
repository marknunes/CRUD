
const aluno = require('../model/aluno.js')

const inserirAluno = async function(dadosaluno){

    let result = await aluno.insertAluno(dadosaluno)

    if(result)
        return true
    else
        return false

}

const listaralunos = async function(){
    let dados = await aluno.sellectAllalunos()

    if(dados)
        return dados
    else
        return false
}

const buscarAluno = async function(id){
    let dados = await aluno.sellectByIdAluno(id)

    if(dados)
        return dados
    else
        return false
}

const atualizarAluno = async function(dadosaluno, id){
    // Recebe o ID
    let idAluno = id
    // Adciona o ID do aluno junto com os dados do json
    dadosaluno.id = idAluno

    let result = await aluno.updateAluno(dadosaluno)

    if(result)
        return true
    else
        return false

}

const excluirAluno = async function(id){
    let result = await aluno.deleteAluno(id)

    if(result)
        return true
    else
        return false
}


module.exports = {
    inserirAluno,
    listaralunos,
    buscarAluno,
    atualizarAluno,
    excluirAluno}
