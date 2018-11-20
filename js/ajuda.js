(function() {
    const ajuda = document.querySelector("#btnAjuda");

    ajuda.classList.remove("no-js");

    ajuda.addEventListener("click", function() {
        const ajudas = [
            {conteudo: "Bem vindo ao Ceep", cor: '#F05450'},
            {conteudo: "Clique no btn Linhas para mudar o layout", cor:"#92C4EC"}
        ];

        // let msg = "";

        for (let i = 0; i < ajudas.length; i++) {
            cartao.adiciona(ajudas[i]);
        }

        // const msgAlerta = document.createElement("div");
        // msgAlerta.classList.add("formNovoCartao-msg");
        // msgAlerta.innerHTML = msg;

        // const body = document.querySelector("body");
        // body.append(msgAlerta);
    });
})();
