
class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {

        if (this.valor >= 3.00) {
            return 120;
        } 
        else if (this.valor >= 1.75) {
            return 60;
        } 
        else if (this.valor >= 1.00) {
            return 30;
        } 
        else {
            return 0;
        }
    }

    calcularTroco() {

        if (this.valor >= 3.00) {
            return this.valor - 3.00;
        } 
        else if (this.valor >= 1.75) {
            return this.valor - 1.75;
        } 
        else if (this.valor >= 1.00) {
            return this.valor - 1.00;
        } 
        else {
            return 0;
        }
    }
}

// Captura o formulário
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    const valor = Number(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (!Number.isFinite(valor) || valor < 0) {
        resultado.innerHTML = "Digite um valor válido.";
        return;
    }

    const parquimetro = new Parquimetro(valor);

    const tempo = parquimetro.calcularTempo();
    const troco = parquimetro.calcularTroco();

    if (valor < 1.00) {

        resultado.innerHTML = "Valor insuficiente!";

    } else {

        resultado.innerHTML = `
            Tempo de permanência: ${tempo} minutos <br>
            Troco: R$ ${troco.toFixed(2).replace(".", ",")}
        `;
    }

});
