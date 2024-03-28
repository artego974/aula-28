
let usuarios = [];


function cadastrarUsuario(nome, idade) {
    if (idade >= 18) {
        usuarios.push({ nome: nome, idade: idade });
        return "nice pó passar";
    } else {
        return "tu é de menor";
    }
}


function consultarUsuario(nome) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome) {
            return `Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`;
        }
    }
    return "Usuário não encontrado.";
}


function removerUsuario(nome) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome) {
            usuarios.splice(i, 1);
            return "Usuário removido com sucesso.";
        }
    }
    return "Usuário não encontrado.";
}

console.log(cadastrarUsuario("João", 25)); 
console.log(cadastrarUsuario("Maria", 16)); 

console.log(consultarUsuario("João")); 
console.log(consultarUsuario("Pedro")); 

console.log(removerUsuario("Maria")); 
console.log(removerUsuario("Ana")); 
