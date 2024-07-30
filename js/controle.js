let contador = 0;
let input = document.getElementById('tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;

        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <span id="icone_${contador}" class="material-symbols-outlined">check_box_outline_blank</span>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <span class="material-symbols-outlined">delete</span>Deletar
                </button>
            </div>
        </div>`;

        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        let icone = document.getElementById('icone_' + id);
        icone.innerText = 'check_box';

        item.parentNode.appendChild(item);
    }
    else 
    { 
        item.classList.remove('clicado');

        let icone = document.getElementById('icone_' + id);
        icone.innerText = 'check_box_outline_blank';
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});


