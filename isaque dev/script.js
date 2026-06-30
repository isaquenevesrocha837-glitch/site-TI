const botao = document.getElementById("ativar");

botao.addEventListener("click", () => {
    document.body.classList.add("ativo");
});

function entrar() {
    window.location.href = "carregamento.html";
}

function login() {
    document.getElementById("erro").style.display = "block";
}

function login() {
    let usuario = document.getElementById("usuario");
    let erro = document.getElementById("erro");

    erro.style.display = "block";

    setTimeout(() => {
        erro.style.display = "none";
    }, 5000);

    setTimeout(() => {
        usuario.value = "";
    }, 0000);
}

