function encontrarMaiorNumero(num1, num2, num3, num4, num5) {
    let maiorNumero = Math.max(num1, num2, num3, num4, num5);
    return maiorNumero;
}

let maior = encontrarMaiorNumero(10, 5, 20, 15, 7);
console.log("O maior número é:", maior); 
