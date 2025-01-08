const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use((req, res, next)=>{
    res.header('access-control-allow-orgin', '*')
    res.header('access-control-allow-methods', 'get, post, put, delete, options')

    app.use(cors())
    next()
}) 

//import da controller aluno

const controllerAluno = require('./controller/controlleralununos.js')

const bodyParserJson = bodyParser.json()

// Endpoint inserir alunos 
app.post('/aluno',bodyParserJson, cors(), async function(req, res){
    let dados = req.body
    
    

    // Encaminha os dados para a controller 

    let result = await controllerAluno.inserirAluno(dados)
    if(result){
        res.status(201)
        res.json()
    }else{
        res.status(400)
        res.json
    }

        

} )

// Listar alunos
app.get('/aluno', cors(), async function(req, res){
    let dadosaluno = await controllerAluno.listaralunos()

    if(dadosaluno){
        res.status(200)
        res.json(dadosaluno)
    }else{
        res.status(404)
        res.json({message: "Não foram encontrados os regitros solicitados no Banco de Dados. "})
    }

})

// Listar alunos por id
app.get('/aluno/:id', cors(), async function(req, res){
    let idAluno = req.params.id

    let dadosaluno = await controllerAluno.buscarAluno(idAluno)

    if(dadosaluno){
        res.status(200)
        res.json(dadosaluno)
    }else{
        res.status(404)
        res.json({message: "O ID informado não foi encontrado no banco de dados"})
    }

})


// Alterar dados 
app.put('/aluno/:id', cors(), bodyParserJson, async function(req, res){
    let idAluno = req.params.id

    let dados = req.body

    let result = controllerAluno.atualizarAluno(dados, idAluno)

    if(result){
        res.status(200)
        res.json()
    }else{
        res.status(400)
        res.json({message: 'Ocorreu um erro ao atualizar o aluno '})
    }

})


// Excluir dados 
app.delete('/aluno/:id', cors(), async function(req, res){
    let idAluno = req.params.id
    let result = await controllerAluno.excluirAluno(idAluno)

    if(result){
        res.status(200)
        res.json()
    }else{
        res.status(400)
        res.json({message: 'Não foi possivel excluir o aluno.'})
    }
})







app.listen(8080, function(){
    console.log('Servidor rodando na porta 8080')
})