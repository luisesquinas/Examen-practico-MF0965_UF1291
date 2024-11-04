document.addEventListener("DOMContentLoaded", () => {
    const registroNumero = document.getElementById("registroNumero");
    const numeroInput = document.getElementById("numero");
    const resultadoDiv = document.getElementById("resultado");

    registroNumero.addEventListener("submit", (e) => {
        e.preventDefault();
        const numero = numeroInput.value.trim();

        if (numero) {
            if (numero.length === 8) {
                const dniNumber = parseInt(numero, 10);
                const mod = dniNumber % 23;
                const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
                const letra = letras[mod];

                numeroInput.value = numero + letra;
            } else {
                alert("El DNI debe tener 8 dígitos.");
            }
        }
    });
});
