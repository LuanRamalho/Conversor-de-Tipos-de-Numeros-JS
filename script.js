function convert() {
    const inputNumber = document.getElementById("inputNumber").value;
    const inputBase = parseInt(document.getElementById("inputBase").value);

    if (inputNumber === "") {
        alert("Por favor, insira um n�mero.");
        return;
    }

    const decimalNumber = parseInt(inputNumber, inputBase);

    if (isNaN(decimalNumber)) {
        alert("N�mero inv�lido para a base de entrada selecionada.");
        return;
    }

    document.getElementById("decimal").textContent = "Decimal: " + decimalNumber.toString(10);
    document.getElementById("binary").textContent = "Bin�rio: " + decimalNumber.toString(2);
    document.getElementById("octal").textContent = "Octal: " + decimalNumber.toString(8);
    document.getElementById("hexadecimal").textContent = "Hexadecimal: " + decimalNumber.toString(16).toUpperCase();
}
