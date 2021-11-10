 // cria uma nova task na lista
function addTask(task) {
  const selectList = document.querySelector('.task-list') 
    
  selectList.innerHTML += `
  <li class="task">
    <input type="checkbox" />
    <p class="task-content">${task}</p>
  </li>
  `
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

  
  taskChecked() {
    const task = document.querySelectorAll('.task')

    for(let checkbox of task) {
      console.log(checkbox.children[0])

      checkbox.children[0].addEventListener('click', () => {
        const taskContent = document.querySelectorAll('.task-content')

        if (checkbox.children[0].checked) {
          taskContent[0].style.textDecorationLine = "line-through"
        }

        else {
          taskContent[0].style.textDecorationLine = "none"
        }
      })
    }
  }
}



export { taskButtonsSettings }
