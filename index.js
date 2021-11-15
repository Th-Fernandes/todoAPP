 // cria uma nova task na lista
function addTask(task) {
  const taskList = document.querySelector('.task-list')
  const createLi = document.createElement('li')
  createLi.classList.add('task')
 
  const createCheckbox = document.createElement('input')
 
  createCheckbox.type = "checkbox"
  createLi.appendChild(createCheckbox)

  createLi.innerHTML += `

  <p class="task-content">${task}</p>
  <img class="delete-task" src="./images/delete-task.svg"></img>
  `
  createLi.children[0].addEventListener('click', (event) => {
    const botaoConclui = event.target
    const selecionarPai = botaoConclui.parentElement

    selecionarPai.classList.toggle("task-concluded")
  })

  createLi.children[2].addEventListener('click', (event) => {
    const evento = event.target
    const excluirElemento = evento.parentElement.remove()
    
  } )

  taskList.appendChild(createLi)

  
}

const taskButtonsSettings = {
  modal: document.querySelector('.modal-overlay'),

  getModalTasksButton() {
    const selectButton = document.querySelector('.create-task')
    selectButton.addEventListener('click', () => {
      this.modal.classList.add('active')
    })
  },

  getTaskDataButton() {
    function getTask() {
      const taskData = document.querySelector('#taskContent')
      //imprime na tela o valor da task
      if(taskData.value != "") addTask(taskData.value)
      // limpa o input
      taskData.value = ""
    }

    const selectButton = document.querySelector('#submitTaskData')

    selectButton.addEventListener('click', (event) => {
      //cancela a atualização da página após o envio do formulário
      event.preventDefault()
      
      getTask()
      //fecha o modal após o envio do formulário
      this.modal.classList.remove('active')
    })
  },

  
  taskChecked: (event) => {
      const botaoConclui = event.target
      const selecionarPai = botaoConclui.parentElement
      
      selecionarPai.classList.toggle(".task-concluded")
          
  }
}

const taskChecked = (event) => {
  const botaoConclui = event.target
  const selecionarPai = botaoConclui.parentElement
  console.log( 'aa')
  
  selecionarPai.classList.toggle(".task-concluded")
      
}

export { taskButtonsSettings }
