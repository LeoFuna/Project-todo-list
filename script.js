function checkOnCompleted(event) {
  const completedTask = event.target;
  if (completedTask.className === 'completed') {
    completedTask.className = 'not-completed';
  } else {
    completedTask.className = 'completed';
  }
}

const taskList = document.querySelector('#lista-tarefas');
function addTask() {
  const element = document.createElement('li');
  element.innerText = document.querySelector('#text-task').value;
  taskList.appendChild(element);
  document.querySelector('#text-task').value = '';
  for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
    document.querySelectorAll('li')[index].addEventListener('click', checkOnCompleted);
  }
}
document.querySelector('#add-task-button').addEventListener('click', addTask);

function clearAll() {
  const element = document.querySelectorAll('li');
  for (let index = 0; index < element.length; index += 1) {
    taskList.removeChild(element[index]);
  }
}
document.querySelector('#apaga-tudo').addEventListener('click', clearAll);

function clearCompleted() {
  const element = document.querySelectorAll('.completed');
  for (let index = 0; index < element.length; index += 1) {
    taskList.removeChild(element[index]);
  }
}
document.querySelector('#remover-finalizados').addEventListener('click', clearCompleted);
