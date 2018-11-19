(function() {
    const ajuda = document.querySelector("#btnAjuda");

    ajuda.classList.remove("no-js");

    ajuda.addEventListener("click", function() {
        const ajudas = [
            "Bem vindo ao Ceep",
            "Clique no btn Linhas para mudar o layout"
        ];

        let msg = "";

        for (let i = 0; i < ajudas.length; i++) {
            msg += ajudas[i] + "<br>";
        }

        const msgAlerta = document.createElement("div");
        msgAlerta.classList.add("formNovoCartao-msg");
        msgAlerta.innerHTML = msg;

        // const body = document.querySelector("body");
        // body.append(msgAlerta);
    });
})();
