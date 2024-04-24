function inc(titulo){

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.titulo == titulo)

    tarefa.status += 1
    if(tarefa.status > 1) tarefa.status = 1
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    const card = document.querySelector(`#${titulo}`)
    card.querySelector("progress").value = tarefa.status

    atualizar()
}

function dec(titulo){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.titulo == titulo)

    tarefa.status -= 1
    if(tarefa.status < 0) tarefa.status =0
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    const card = document.querySelector(`#${titulo}`)
    card.querySelector("progress").value = tarefa.status

    atualizar()
}