//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();
    
    
    if (amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    

    if (amigos.includes(amigo)) {
        alert('Este amigo já foi adicionado!');
        return;
    }
    
   
    amigos.push(amigo);
    
   
    input.value = '';
    
    
    alert(`Amigo ${amigo} adicionado!`);
    
    
    atualizarListaAmigos();
}
function atualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}