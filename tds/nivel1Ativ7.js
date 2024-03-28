function criarFrase(nome, idade, serieFavorita) {
    return `Olá ${nome}! Sua idade é ${idade} e você gosta de assistir ${serieFavorita}!`;
}


let nome = "Arthur";
let idade = 15;
let serieFavorita = "jjt kaisen";

let frase = criarFrase(nome, idade, serieFavorita);
console.log(frase); 