const inputEl = document.querySelector('#input')
const container = document.querySelector('.container')

let todoData = JSON.parse(localStorage.getItem('todoList')) || []

if (todoData.length > 0) {
  todoData.forEach(todo => {
    createTask(todo.text, todo.completed)
  })
}

inputEl.addEventListener('keydown', (e) => {
  let value = inputEl.value
  
  if (e.key === 'Enter') {
    inputEl.value = ''
    if(value.trim()){
      createTask(value)
      updateSL()
    }
  }
})

function createTask(text, completed = false) {
  const todoEl = document.createElement('div')
  todoEl.classList.add('todo')
  if(completed){
    todoEl.classList.add('done')
  }

  todoEl.innerText = text

  todoEl.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })

  todoEl.addEventListener('mousedown', (e) => {
    if (e.button == 0) {
      e.target.classList.toggle('done')
      updateSL()
    } else if (e.button == 2) {
      setTimeout(() => {
        e.target.remove()
        updateSL()
      }, 100);

    }
  })
  container.appendChild(todoEl)
}

function updateSL() {
  const todosEl = document.querySelectorAll('.todo')

  if (todosEl.length > 0) {
    todoData = []
    todosEl.forEach(todo => {
      const obj = { text: todo.innerText, completed: todo.classList.contains('done') }
      todoData.push(obj)
    })

    localStorage.setItem('todoList', JSON.stringify(todoData))
  } else{
    localStorage.removeItem('todoList')
  }
}