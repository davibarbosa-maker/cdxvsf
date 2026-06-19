let vetorOriginal = [];

function adicionarNumero() {
    let input = document.getElementById("input-numero");
    let erro = document.getElementById("mensagem-erro");
    let valor = input.value.trim();

    if (valor === "" || isNaN(valor)) {
        erro.textContent = "Digite um número válido.";
        return;
    }

    erro.textContent = "";
    vetorOriginal.push(Number(valor));
    input.value = "";
    input.focus();
    renderizarTags();
}

function removerNumero(index) {
    vetorOriginal.splice(index, 1);
    renderizarTags();
}

function renderizarTags() {
    let lista = document.getElementById("lista-numeros");
    lista.innerHTML = "";
    for (let i = 0; i < vetorOriginal.length; i++) {
        let tag = document.createElement("div");
        tag.className = "numero-tag";
        tag.innerHTML = vetorOriginal[i] + ' <span onclick="removerNumero(' + i + ')">✕</span>';
        lista.appendChild(tag);
    }
}

function ordenar() {
    let erro = document.getElementById("mensagem-erro");

    if (vetorOriginal.length < 2) {
        erro.textContent = "Adicione pelo menos 2 números para ordenar.";
        return;
    }

    erro.textContent = "";

    // copia o vetor arka orednear
    let vetor = [...vetorOriginal];

    // bublsa Sort
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temp = vetor[j];
                vetor[j]     = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }

    // aqui msotrera o vtor oiruiginalç
    let listaOriginal = document.getElementById("vetor-original");
    listaOriginal.innerHTML = "";
    for (let i = 0; i < vetorOriginal.length; i++) {
        let li = document.createElement("li");
        li.textContent = "Posição " + i + ": " + vetorOriginal[i];
        listaOriginal.appendChild(li);
    }

  //mostra os valire s
    let listaOrdenado = document.getElementById("vetor-ordenado");
    listaOrdenado.innerHTML = "";
    for (let i = 0; i < vetor.length; i++) {
        let li = document.createElement("li");
        li.textContent = "Posição " + i + ": " + vetor[i];
        listaOrdenado.appendChild(li);
    }

    document.getElementById("resultado").style.display = "flex";
}

//aqui adicipmna numero com enter
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("input-numero").addEventListener("keydown", function (e) {
        if (e.key === "Enter") adicionarNumero();
    });
});
