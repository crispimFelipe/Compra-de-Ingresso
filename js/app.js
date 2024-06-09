function comprar() {
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value =='pista' ) {
        comprarPista(qtd);
    }else if (tipo.value =='superior' ) {
        comprarSuperior(qtd);

    }else{
        comprarInferior(qtd); 
    }
}
function comprarPista(qtd) {
    let qtdPistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPistaDisponivel) {
        alert('qunatidade indisponivel');
    }else {
        qtdPistaDisponivel = qtdPistaDisponivel - qtd;
        document.getElementById('qtd-pista').textContent = qtdPistaDisponivel;
        alert('Compra realizada com sucesso'); 
    }
}

function comprarSuperior(qtd) {
    let qtdSuperiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperiorDisponivel) {
        alert('qunatidade indisponivel');
    }else {
        qtdSuperiorDisponivel = qtdSuperiorDisponivel - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperiorDisponivel;
        alert('Compra realizada com sucesso'); 
    }
}
function comprarInferior(qtd) {
    let qtdInferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferiorDisponivel) {
        alert('qunatidade indisponivel');
    }else {
        qtdInferiorDisponivel = qtdInferiorDisponivel - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferiorDisponivel;
        alert('Compra realizada com sucesso'); 
    }
}






