(function(){
    'use strict'
    
    var $ = document.querySelectorAll.bind(document);
    
    const btnRemove = $('.opcoesDoCartao-remove');
    // const btnsCores = $('.opcoesDoCartao-radioTipo');
    
    //BUBBLNG
    const cartoes = $('.cartao');
    cartoes.forEach(function(cartao){
        cartao.addEventListener('click', function(e){
            
            if(e.target.classList.contains('opcoesDoCartao-radioTipo')){
                this.style.backgroundColor = e.target.value;
            }
        })
    })
    
    //SEM BUBBLNG
    // for(let i = 0; i < btnsCores.length; i++){
    //     btnsCores[i].addEventListener('click', function(){
    //         const cartao = this.parentNode.parentNode;
    //         cartao.style.backgroundColor = this.value
    //     })
    // }  
    
    
    // console.log(btnsCores);
    
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