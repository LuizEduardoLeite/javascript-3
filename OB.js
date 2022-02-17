const qtd = parseInt(prompt("Quantidade de usuários precisa cadastrar?"))
console.log(qtd+' Usuários seráo cadastrados')

let DadosUsuario=[]
for(let qtduser= 1; qtduser<=qtd; qtduser++){

    let DataUser={
        nome:  '',
        idade:  0,
        tamanho: 0,
        
    }
    DataUser.nome = prompt('digite o nome do usuário ')
    DataUser.idade = prompt('digite a idade de '+DataUser.nome)
    DataUser.tamanho = parseFloat(prompt('digite o tamanho de '+DataUser.nome))
    DadosUsuario.push(DataUser)

}

for(let x of DadosUsuario){
    document.write(`Nome --> ${x.nome}<br>`)
    document.write(`Idade --> ${x.idade} anos<br>`)
    document.write(`Tamanho --> ${x.tamanho} M<br>`)
    }

