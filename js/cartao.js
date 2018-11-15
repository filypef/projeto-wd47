(function() {
    "use strict";
    
    var $ = document.querySelectorAll.bind(document);
    
    const btnRemove = $(".opcoesDoCartao-remove");
    // const btnsCores = $('.opcoesDoCartao-radioTipo');
    
    //CONCEITO THROTTLE - PARA ESTUDAR
    
    //BUBBLNG
    const cartoes = $(".cartao");
    cartoes.forEach(function(cartao) {
        cartao.addEventListener("click", function(e) {
            if (e.target.classList.contains("opcoesDoCartao-radioTipo")) {
                this.style.backgroundColor = e.target.value;
            }
            
            if (e.target.classList.contains("opcoesDoCartao-remove")){
                this.classList.add("cartao--some");
                
                this.addEventListener('transitionend', function(){
                    this.remove();
                })
            }
        });
        
        cartao.addEventListener("focusin", function(){
            cartao.classList.add('cartao--focado');
        })
        
        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado');
        })

        cartao.addEventListener('keydown', function(e){
            if(e.key === "Entrer" || e.key === "Tab"){
                e.target.click();
            }
        })
    });
    
    //SEM BUBBLNG
    // for(let i = 0; i < btnsCores.length; i++){
    //     btnsCores[i].addEventListener('click', function(){
    //         const cartao = this.parentNode.parentNode;
    //         cartao.style.backgroundColor = this.value
    //     })
    // }
    
    // console.log(btnsCores);
    
    //REMOVENDO CARTAO SEM BUBBLNG
    // btnRemove.forEach(btn => {
    //     btn.addEventListener("click", removeCartao);
    // });
    
    // function removeCartao() {
    //     const cartao = this.parentNode.parentNode;
    //     cartao.classList.add("cartao--some");
        
    //     cartao.addEventListener("transitionend", function() {
    //         cartao.remove();
    //     });
    // }
})();
