
const inputTarefa = document.getElementById('inputtarefa');
const listaTarefas = document.getElementById('listatarefas');


document.addEventListener('DOMContentLoaded', carregarTarefas);

// Funcao para adicionar uma tarefa
function adicionar() {
    const texInput = inputTarefa.value.trim();
      
    if (texInput !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
           <div class="checkbox">
           <input onclick="tarefaConcluida(this)"  type="checkbox">
           <span>${texInput}</span>
           </div>
           <button class="remove-btn" onclick="remover(this)">Remover</button>
           <textarea class="textarea" placeholder="Anotações"></textarea>
       `;
        listaTarefas.appendChild(li);
        salvarTarefas();
        inputTarefa.value = "";
    }
}

// Funcao para remover uma tarefa
function remover(button) {
    const li = button.parentElement;
    listaTarefas.removeChild(li);
    salvarTarefas();
}

// Função para marcar uma tarefa como concluída
function tarefaConcluida(input) {
    const li = input.closest("li"); // closet ele esta pecorrendo a arvore dom ate achar o primeiro elementp
    if (input.checked) {
        li.classList.add("concluida");
    } else {
        li.classList.remove("concluida");
    }
    salvarTarefas();
}

// Função para salvar tarefas no localStorage
function salvarTarefas() {
    const tarefas = [];
    listaTarefas.querySelectorAll('li').forEach(li => {
        const tarefa = {
            texto: li.querySelector('span').innerText,
            concluida: li.querySelector('input').checked,
            anotacoes: li.querySelector('textarea').value
        };
        tarefas.push(tarefa);
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para carregar tarefas do localStorage
function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.innerHTML = `
           <div class="checkbox">
           <input onclick="tarefaConcluida(this)" type="checkbox" ${tarefa.concluida ? 'checked' : ''}>
           <span>${tarefa.texto}</span>
           </div>
           <button class="remove-btn" onclick="remover(this)">Remover</button>
           <textarea class="textarea" placeholder="Anotações">${tarefa.anotacoes}</textarea>
       `;
        if (tarefa.concluida) {
            li.classList.add("concluida");
        }
        listaTarefas.appendChild(li);
    });
}



