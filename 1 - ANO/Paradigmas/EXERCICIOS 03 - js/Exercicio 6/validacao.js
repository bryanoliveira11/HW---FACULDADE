let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobreN')
let senha = document.getElementById('senha')
let pais = document.getElementById('origem')
let cidade = document.getElementById('cidade')

// limpar caixas
function reset() {
    nome.value = []
    sobrenome.value = []
    senha.value = []
    pais.value = []
    cidade.value = []
    nome.focus(nome)
}

//validacao simples
function validacao_Geral() {
    if (nome.value.length == 0 || sobrenome.value.length == 0 || senha.value.length == 0 || pais.value.length == 0 || cidade.value.length == 0) {
        alert('Preencha Todos os Campos !')
    } else if (nome.value.length < 3 || sobrenome.value.length < 3) {
        alert('Digite um Nome e Sobrenome Válido !')
    } else if (senha.value.length < 8) {
        alert('Sua Senha Deve ter no Mínimo 8 Dígitos !')
    } else if (pais.value.length < 4) {
        alert('Digite um País Válido')
    } else if (cidade.value.length < 3) {
        alert('Digite uma Cidade Válida !')
    }else {
        alert('Cadastro Efetuado com Sucesso !')
        alert(`Bem-Vindo ${nome.value} ${sobrenome.value}`)
        reset()
    }
}

//botao geral de cadastro
function cadastrar() {
    validacao_Geral()
}

