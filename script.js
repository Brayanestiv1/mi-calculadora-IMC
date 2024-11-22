document.getElementById("imc-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que el formulario recargue la página

    // Obtener los valores de peso y altura
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validar que los campos no estén vacíos y sean números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Mostrar el resultado
    document.getElementById("imc-value").textContent = imc.toFixed(2);  // Mostrar 2 decimales

    // Interpretación del IMC
    let interpretacion = "";
    if (imc < 18.5) {
        interpretacion = "Bajo peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        interpretacion = "Peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        interpretacion = "Sobrepeso.";
    } else {
        interpretacion = "Obesidad.";
    }

    document.getElementById("interpretacion").textContent = interpretacion;
});
