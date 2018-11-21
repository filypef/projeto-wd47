(function() {
    const btnAjuda = document.querySelector("#btnAjuda");

    btnAjuda.classList.remove("no-js");

    btnAjuda.addEventListener("click", function() {

        //VIA AXIO
        axios({
            method: 'get',
            url: 'https://ceep.herokuapp.com/cartoes/instrucoes',
            responseType : 'json'
        })
            .then(function(response){
                const ajudas = response.data.instrucoes;

                ajudas.forEach(ajuda => {
                    cartao.adiciona(ajuda);
                });
            })

            
        //VIA XML
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        // xhr.responseType = 'json';
        // xhr.send();
    
        // xhr.addEventListener('load', function(){
            
        //     const objeto = xhr.response;
        //     const ajudas = objeto.instrucoes;
            
        //     ajudas.forEach(ajuda => {
        //         cartao.adiciona(ajuda);
        //     });
        // })

        // const ajudas = [
        //     {conteudo: "Bem vindo ao Ceep", cor: '#F05450'},
        //     {conteudo: "Clique no btn Linhas para mudar o layout", cor:"#92C4EC"}
        // ];

        // let msg = "";

        // for (let i = 0; i < ajudas.length; i++) {
        //     cartao.adiciona(ajudas[i]);
        // }

        // const msgAlerta = document.createElement("div");
        // msgAlerta.classList.add("formNovoCartao-msg");
        // msgAlerta.innerHTML = msg;

        // const body = document.querySelector("body");
        // body.append(msgAlerta);
    });
})();
