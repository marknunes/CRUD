// fazendo o importe da biblioteca prisma 
var { PrismaClient, Prisma }= require('@prisma/client')

//instanciando o prisma
var prisma = new PrismaClient()

// cadastrando o aluno no banco de dados 
const insertAluno = async function(dadosaluno){
    let sql = `INSERT INTO tbl_aluno(
                nome,
                celular,
                email,
                cpf                                
    )values(
    '${dadosaluno.nome}',
    '${dadosaluno.celular}',
    '${dadosaluno.email}',
    '${dadosaluno.cpf}'
    )`
// excutando o script no banco de dados 
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return true
    else
        return false
}

const sellectAllalunos = async function(){
    // script sql
    let sql = `SELECT * FROM tbl_aluno`
    // Executa no bd o sql 
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0 )
        return rsAluno
    else
        return false

}

const sellectByIdAluno = async function(id){
    // script sql
    let sql = `SELECT * FROM tbl_aluno WHERE id = ${id}`
    // Executa no bd o sql 
    let rsAluno = await prisma.$queryRawUnsafe(sql)

//    let sql = `SELECT * FROM tbl_aluno WHERE id = ?`;
//    let rsAluno = await prisma.$queryRawUnsafe(sql, id);

    if(rsAluno.length > 0 )
        return rsAluno
    else
        return false

}

const updateAluno = async function(dadosaluno) {
    let sql = `UPDATE tbl_aluno SET
                    nome = '${dadosaluno.nome}',
                    celular = '${dadosaluno.celular}',
                    email = '${dadosaluno.email}',
                    cpf = '${dadosaluno.cpf}' 
                WHERE id = ${dadosaluno.id}`;
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return true
    else
        return false
}

const deleteAluno = async function(id) {
    let sql = `DELETE FROM tbl_aluno 
                WHERE id = ${id}`;
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return true
    else
        return false
}




module.exports = {
    insertAluno,
    sellectAllalunos,
    sellectByIdAluno,
    updateAluno,
    deleteAluno
}