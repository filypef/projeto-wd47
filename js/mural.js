const cartao = (function(){

    let numeroDoCartao = 0;
    
    function adicionaCartaoNoMural(ajuda) {
        numeroDoCartao++;
    
        const cartao = $(`
        <article id="cartao_${numeroDoCartao}" class="cartao" style="background-color:${
            ajuda.cor
        }">
            <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                    Padrão
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                </label>
    
                <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                </label>
            </div>
    
            <p class="cartao-conteudo" contenteditable tabindex="0">${
                ajuda.conteudo
            }</p>
        </article>
    `);

        cartao.on("click", function(e) {
            if (e.target.classList.contains("opcoesDoCartao-remove")) {
                cartao.addClass("cartao--some");
    
                cartao.on("transitionend", function() {
                    cartao.remove();
                });
            }
        });
    
        cartao.on("focusin", function() {
            cartao.addClass("cartao--focado");
        });
    
        cartao.on("focusout", function() {
            cartao.removeClass("cartao--focado");
        });
    
        cartao.on("change", function(event) {
            const elementoSelecionado = event.target;
            const isRadioTipo = elementoSelecionado.classList.contains(
                "opcoesDoCartao-radioTipo"
            );
    
            if (isRadioTipo) {
                this.style.backgroundColor = elementoSelecionado.value;
            }
        });
    
        cartao.on("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.target.click();
            }
        });
    
        $(".mural").append(cartao);
    }
    
    return {
        adiciona : adicionaCartaoNoMural
    }

})();