function atualizar(){

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const totalPendentes = tarefas.filter(t => t.status <= 0).length
   document.querySelector("#total-pendentes").innerText = totalPendentes

   const totalConcluidas = tarefas.filter(t => t.status == 1).length
   document.querySelector("#total-concluidas").innerText = totalConcluidas

   const totalPontos = tarefas
                            .filter(t => t.status == 1)
                            .reduce((total, t) => total += Number(t.score), 0) 

   document.querySelector("#total-pontos").innerText = totalPontos
}