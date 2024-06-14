
class Aluno{
    Nome 
    Idade
    Nota
    constructor(nome, idade, nota){
        this.Nome = nome 
        this.Idade = idade 
        this.Nota = nota 
    }
}

let arrayAlunos = []

function cadastrarAluno(nome, idade, nota) {
    nome = prompt('digite o nome')
    idade = prompt('digite a idade')
    nota = prompt('digite a nota')
    let objetoAluno = new Aluno(nome, idade, nota)
    if(!arrayAlunos.some(x => x.Nome === nome))
        arrayAlunos.push(objetoAluno)
    return objetoAluno;
}

function ordenarPorNota(arrayAlunos){
    arrayAlunos.sort((a, b) => a.Nota - b.Nota)
    return arrayAlunos
}   

function ordenarPorIdade(arrayAlunos) {
    arrayAlunos.sort((a, b) => b.Idade - a.Idade);
    return arrayAlunos;
}


function ordenarPorNome(arrayAlunos){
    arrayAlunos.sort((a, b) => {
        let nomeA = a.Nome.toUpperCase();
        let nomeB = b.Nome.toUpperCase();
        if(nomeA < nomeB){
            return -1
        }
        if(nomeA > nomeB){
            return 1
        }
        return 0
    })
    return arrayAlunos
}

function calcularMedias(arrayAlunos){
    if(arrayAlunos.length === 0){
        return 0;
    }
    let soma = 0
    arrayAlunos.forEach(aluno => {
        soma += Number(aluno.Nota)
    }); 
    let media = soma / arrayAlunos.length
    return media
}