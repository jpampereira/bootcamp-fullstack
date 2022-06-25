const form = window.document.forms[0];
const addButton = window.document.getElementById('add');
const rmvButton = window.document.getElementById('rmv');

function addTask (e) {
	e.preventDefault();

	const taskName = window.document.getElementsByTagName('input')[0].value;

	if (!taskName.match(/^\s*$/)) { // Ignore if taskName is empty
		const taskWrapper = window.document.createElement('div');
		taskWrapper.setAttribute('class', 'task');
	
		const taskStatus = window.document.createElement('input');
		taskStatus.setAttribute('type', 'checkbox');
	
		const taskLabel = window.document.createElement('label');
		taskLabel.innerHTML = taskName;
	
		taskWrapper.appendChild(taskStatus);
		taskWrapper.appendChild(taskLabel);
	
		const taskList = window.document.getElementById('tasks');
		taskList.appendChild(taskWrapper);
	}

	form.reset();
}

function rmvTask (e) {
	e.preventDefault();

	const taskName = window.document.getElementsByTagName('input')[0].value;

	const taskListWrapper = window.document.getElementById('tasks');
	const taskList = Array.from(window.document.getElementsByClassName('task'));

	taskList.forEach(task => {
		const currentTaskWrapper = task.lastChild;
		const currentTaskName = currentTaskWrapper.textContent;

		if (currentTaskName === taskName) {
			taskListWrapper.removeChild(task);
		}
	});

	form.reset();
}

addButton.addEventListener('click', addTask);
rmvButton.addEventListener('click', rmvTask);