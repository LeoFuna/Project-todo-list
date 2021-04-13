function selectTask(event) {
  const getTask = document.querySelectorAll('.tarefa');
  for (let index = 0; index < getTask.length; index += 1) {
    getTask[index].className = 'tarefa';
  }
  event.target.classList.add('selected');
}

function doubleClickToComplete(event) {
  const captureTask = document.querySelectorAll('.tarefa');
  if (captureTask.className !== 'completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function addTask() {
  const userInput = document.getElementById('texto-tarefa').value;
  const typed = userInput;
  const listTask = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  task.classList.add('tarefa');
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', doubleClickToComplete);
  listTask.appendChild(task);
  task.innerHTML = typed;
  document.getElementById('texto-tarefa').value = '';
}

function clickButtonTask() {
  const buttonTask = document.getElementById('criar-tarefa');
  buttonTask.addEventListener('click', addTask);
}

window.onload = function load() {
  clickButtonTask();
};
