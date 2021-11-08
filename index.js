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

function buttonFunctionality() {
  const selectButton = document.querySelector('.create-task')
  selectButton.addEventListener('click', () => addTask('funcionou'))
}


export { buttonFunctionality }
