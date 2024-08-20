
const inputTarefa = document.getElementById('inputtarefa');
const listaTarefas = document.getElementById('listatarefas');


// Funcao para adicionar uma tarefa
function adicionar() {
    const texInput = inputTarefa.value.trim();
    if (texInput !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
           <div class="checkbox">
           <input onclick="tarefaConcluida(this)" type="checkbox">
           <span>${texInput}</span>
           </div>
           <button class="remove-btn" onclick="remover(this)">Remover</button>
           <textarea class="textarea" placeholder="Anotações"></textarea>
       `;
        listaTarefas.appendChild(li);
        inputTarefa.value = "";
    }
}

// Funcao para remover uma tarefa
function remover(button) {
    const li = button.parentElement;
    listaTarefas.removeChild(li);
}

// Função para marcar uma tarefa como concluída
function tarefaConcluida(input) {
    const li = input.closest("li"); // closet ele esta pecorrendo a arvore dom ate achar o primeiro elementp
    if (input.checked) {
        li.classList.add("concluida");
    } else {
        li.classList.remove("concluida");
    }
}





