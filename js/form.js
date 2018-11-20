(function() {
    const form = document.querySelector(".formNovoCartao");
    
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
            numeroDoCartao++;
            adicionaCartaoNoMural({conteudo: textarea.value});
            checaCor();
        }    
    });
})();
