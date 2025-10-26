const bgSelect = document.getElementById('bgSelect');
const darkToggle = document.getElementById('darkModeToggle');
const fontStyleSelect = document.getElementById('fontStyleSelect');
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');

let fontSize = 16;

bgSelect.addEventListener('change', e => {
    document.body.style.backgroundColor = e.target.value || '';
});

function toggleDarkMode() {
    document.body.style.backgroundColor = "";
    document.body.classList.toggle("dark-mode");
    darkMode = !darkMode;
}

fontIncrease.addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});
fontDecrease.addEventListener('click', () => {
    fontSize = Math.max(12, fontSize - 2);
    document.body.style.fontSize = fontSize + 'px';
});

fontStyleSelect.addEventListener('change', e => {
    document.body.style.fontFamily = e.target.value;
});


function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn";
    editBtn.onclick = () => editTask(li);

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "btn";
    doneBtn.onclick = () => li.classList.toggle("completed");

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "btn close";
    delBtn.onclick = () => li.remove();

    li.appendChild(document.createTextNode(" "));
    li.appendChild(editBtn);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(doneBtn);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function editTask(taskItem) {
    const currentText = taskItem.firstChild.textContent;
    const newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
        taskItem.firstChild.textContent = newText;
    }
}

document.getElementById('newTask').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
});
