const tasks = [];

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

function renderTasks() {
  tasksList.innerHTML = '';

  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const label = document.createElement('span');
    label.textContent = t.text;

    if (t.completed) {
      label.classList.add('completed');
    }

    label.style.cursor = 'pointer';
    label.addEventListener('click', () => {
      tasks[i].completed = !tasks[i].completed;
      renderTasks();
    });

    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'button';
    del.addEventListener('click', () => {
      tasks.splice(i, 1);
      renderTasks();
    });

    li.appendChild(label);
    li.appendChild(del);

    tasksList.appendChild(li);
  });
}

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) return; 

  tasks.push({ text, completed: false });

  taskInput.value = '';
  renderTasks();
});

taskInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
