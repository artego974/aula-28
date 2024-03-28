function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}


let num1 = 10;
let num2 = -5;
let num3 = 0;

console.log("O número", num1, "é", verificarNumero(num1)); 
console.log("O número", num2, "é", verificarNumero(num2)); 
console.log("O número", num3, "é", verificarNumero(num3));
