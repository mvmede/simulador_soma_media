let soma = 0;
let contador = 0;
let entrada;

while (entrada !== "sair") {
    entrada = prompt("Digite um valor para calcular a soma e a média de entrada (ou 'sair' para finalizar):");

    if (entrada !== "sair") {
        let valor = parseFloat(entrada);
        soma += valor;
        contador++;
    }
}

if (contador > 0) {
    let media = soma / contador;
    alert(`Soma: ${soma}\nMédia: ${media.toFixed(2)}`);
} else {
    alert("Nenhum valor foi inserido.");
}