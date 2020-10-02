let minhaImagem = document.querySelectorAll("img")[0]

/*function clicar() {
    let minhaSrc = minhaImagem.getAttribute("src")
    if (minhaSrc === "imagens/overwatch-wallpaper.jpg") {
        minhaImagem.setAttribute("src", "imagens/overwatch-tracer.jpg")
    }
    else {
        minhaImagem.setAttribute("src", "imagens/overwatch-wallpaper.jpg")
    }
} */

function clicar() {
    let minhaSrc = minhaImagem.getAttribute("src")
    if (minhaSrc === "imagens/overwatch-wallpaper.jpg") {
        minhaImagem.setAttribute("src", "imagens/overwatch-tracer.jpg")
    }
    else {
        minhaImagem.setAttribute("src", "imagens/overwatch-wallpaper.jpg")
    }
}
// mensagem personalizada de boas vindas!

let meuBotao = document.querySelector("button")
function defineNomeUsuario () {
    let nome = prompt("Por favor, digite seu nome: ")
    if (!nome || nome === null) {
        alert("Erro! Por favor, insira um usuário válido!")
        defineNomeUsuario()
    }
    else {
        localStorage.setItem("nome", nome)
        alert("Mozilla é legal, " + nome)
    }
}
if (!localStorage.getItem("nome") || localStorage.getItem("nome") === null) {
    defineNomeUsuario()
}
else {
    let nomeGuardado = localStorage.getItem("nome")
    if (!nomeGuardado || nomeGuardado === null) {
        defineNomeUsuario()
    }
    else {
        alert("Bem-vindo(a) de volta, " + nomeGuardado)
    }
}
meuBotao.onclick = function() {
    localStorage.setItem("nome", null)
    defineNomeUsuario()}
