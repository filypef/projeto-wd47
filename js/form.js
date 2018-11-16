(function() {
    const form = document.querySelector(".formNovoCartao");
    let contador = 0;

    form.classList.remove("no-js");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const textarea = document.querySelector(".formNovoCartao-conteudo");

        if (!textarea.value.trim().length) {
            const msg = document.createElement("div");
            msg.classList.add("formNovoCartao-msg");
            msg.textContent = "Por favor preencher o campo corretamente";

            const btnSubmit = form.children[form.childElementCount.length - 1];

            form.addEventListener("animationend", function(e) {
                e.target.remove();
            });

            form.insertBefore(msg, btnSubmit);
        } else {
            contador++;
            const templateCartao = `
                <article id="cartao_${contador}" class="cartao">
                    <div class="opcoesDoCartao">
                        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                            <svg><use xlink:href="#iconeRemover"></use></svg>
                        </button>
                        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                            Padrão
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                            Importante
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                            Tarefa
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                            Inspiração
                        </label>
                    </div>

                    <p class="cartao-conteudo" contenteditable tabindex="0">${textarea.value}</p>
                </article>
            `;
            const cartao = $(templateCartao);

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
                console.log(elementoSelecionado);
                const isRadioTipo = elementoSelecionado.classList.contains("opcoesDoCartao-radioTipo");
    
                if (isRadioTipo) {
                    this.style.backgroundColor = elementoSelecionado.value;
                }
            });
    
            cartao.on("keydown", function(e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.target.click();
                }
            });

            $('.mural').append(cartao);
        }
    });
})();
