// Criando uma função que realiza a troca do estilo do título
function alterarFormatacaoTitulo() {

    // PRocurando pelo ID e guardando como variável os elementos que precisamos
    const titBiografia = document.getElementById("titBiografia");

    // Trocando de fato
    titBiografia.style.fontFamily = "Verdana";
    titBiografia.style.fontStyle = "italic";
    titBiografia.style.color = "orange";
    titBiografia.style.backgroundColor = "black";
}
