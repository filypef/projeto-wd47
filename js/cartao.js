(function(){
    'use strict'

    var $ = document.querySelectorAll.bind(document);

    const btnRemove = $('.opcoesDoCartao-remove');


    btnRemove.forEach( btn => {
        btn.addEventListener('click', removeCartao);   
    });

    
    function removeCartao(){
        const cartao = this.parentNode.parentNode;
        cartao.classList.add('cartao--some');

        cartao.addEventListener('transitionend', function(){
            cartao.remove();
        });
    }
})();