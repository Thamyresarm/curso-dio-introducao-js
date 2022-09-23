let div = document.getElementById("lista");

function adicionar() {
    let list = document.getElementById("tarefa").value;

    if (list != "" ){
        div.innerHTML += `<div>
        <input type="checkbox" id="${list}" name="${list}"><label for="${list}">${list}</label>
        </div>`;
        document.getElementById("tarefa").value = "";
    } else {
        alert("Digite a tarefa")
    }
}
