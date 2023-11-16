const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){   //função para adicionar tarefa e seus elementos
    if(inputBox.value === ''){
        alert("Preciso de algo para adicionar !!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){     //função para marcar a tarefa como feito e excluir a tarefa
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("feito");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){ //função salvar dados do site
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){ //função para mostrar os dados salvos
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();