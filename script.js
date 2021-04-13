let taskBoard = document.getElementById('lista-tarefas');
let liItems = document.getElementsByTagName('li');

// 5 - 
document.getElementById('criar-tarefa').addEventListener('click', criaTarefa)
function criaTarefa(event) {
	let li = document.createElement('li');
	let newTask = document.getElementById('texto-tarefa').value;
	li.innerText = newTask;
	document.getElementById('lista-tarefas').appendChild(li);
	document.getElementById('texto-tarefa').value = '';
}

// Insights de alguns PRs dos colegas <3
// 7, 8 
taskBoard.addEventListener('click', escolhidos)
function escolhidos(event) {
	for (let index = 0; index < liItems.length; index += 1) {
		liItems[index].classList.remove('pickedItem');
	}
	event.target.classList.add('pickedItem');	
};

// 9 -
taskBoard.addEventListener('dblclick', completadas)
function completadas(event) {			
	for (let index = 0; index < liItems.length; index += 1) {
		if (event.target.classList.contains('completed')) {
			event.target.classList.remove('completed');			
		} else {
		event.target.classList.add('completed');
		}
		console.log(event.target)
	}	
}

// 10 -
document.getElementById('apaga-tudo').addEventListener('click', limpaLista)
function limpaLista(event) {
	while (taskBoard.lastChild) {
		taskBoard.removeChild(taskBoard.lastChild);
	}
};

// 11 - 
document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks);
function removeCompletedTasks(event) {
	while (taskBoard.lastChild.classList.contains('completed')) {
		taskBoard.removeChild(taskBoard.lastChild);
	}	
}
