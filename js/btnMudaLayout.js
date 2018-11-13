
const btnMudaLayout = document.querySelector('#btnMudaLayout');

btnMudaLayout.addEventListener('click', mudaTexto);
btnMudaLayout.addEventListener('click', mudaLayout);

function mudaTexto(e){
    // if(btnMudaLayout.textContent == "Linhas"){
    //     console.log('oi')
    //     btnMudaLayout.textContent = "Blocos";
    // }else{
    //     btnMudaLayout.textContent = "Linhas";
    // }
    
    //if ternario.
    
    btnMudaLayout.textContent = btnMudaLayout.textContent === "Linhas" ? "Blocos" : "Linhas"
}

function mudaLayout(){
    const mural = document.querySelector('.container.mural');

    mural.classList.toggle('mural--linha');
}
