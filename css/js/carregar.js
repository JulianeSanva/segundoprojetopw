console.log("carregar dados")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach((tarefas) => {
    const card = document.createElement("div")
    card.id = tarefas.titulo
    card.classList.add("nes-container", "with-title", "is-centered")

    card.innerHTML = `

    <p class="title">${tarefas.titulo}</p>

    <a href="#" class="nes-badge is-icon">
        <span class="is-warning"><i class="nes-icon star is-small"></i></span>
        <span class="is-primary">${tarefas.score}</span>
      </a>

    <!-- Adicionando os ganhos -->

      <progress class="nes-progress is-success" value="${tarefas.status}" max="1"></progress>

      <!-- Adicionando os botões -->
     
          <button onClick="apagar('${tarefas.titulo}')" type="button" class="nes-btn is-error">Apagar</button>
          <button onClick="dec('${tarefas.titulo}')" type="button" class="nes-btn is-primary">X</button>
          <button onClick="inc('${tarefas.titulo}')" type="button" class="nes-btn is-primary">OK</button>
    
    `
    document.querySelector("#lista-de-tarefas").appendChild(card)
    
})

atualizar()