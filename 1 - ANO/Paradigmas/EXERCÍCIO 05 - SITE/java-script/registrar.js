//registro início

let username = document.getElementById('username')
let senha = document.getElementById('senha')
let cidade = document.getElementById('cidade')
let pais = document.getElementById('pais')
let estado = document.getElementById('estado')

username.focus(username)

function get_registro() {
    if (username.value.length == 0 || senha.value.length == 0 || estado.value.length == 0 || pais.value.length == 0 || cidade.value.length == 0) {
        alert('Lembre-se de Digitar Todas as Informações !')
    } else if (senha.value.length < 5) {
        alert('Sua Senha Deve ter um Mínimo de 5 Caracteres !')
        senha.value = ''
    } else {
        document.location.href = 'home.html'
        alert(`Seja Bem-Vindo(a) ${username.value} e Aproveite o Site !`)
    }
}

//registro fim.