function start() {
    console.log("Hello world")
    alert("11111111")
}

const taskListEl = document.getElementById('task-list')
const addbutton = document.getElementById("add-btn")
const inputTaskEl = document.getElementById("input-task")
addbutton.onclick = addTask

function addTask() {
    const taskTitle = inputTaskEl.value
    inputTaskEl.value = null
    if (taskTitle) {
        const newTaskEl = document.createElement('li')
        newTaskEl.classList.add('task-item')
        newTaskEl.classList.add('low-priority')
    
        newTaskEl.addEventListener('click', (ev) => {
            ev.currentTarget.classList.toggle('complited')
        })
    
        newTaskEl.innerHTML = `
        <span class="task-content">${taskTitle}</span>
        <div class="task-actions">
            <button class="task-btn">
                <span class="material-symbols-outlined">
                    edit
                </span></button>
            <button class="task-btn" onclick="this.parentNode.parentNode.remove()">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
        `
        taskListEl.append(newTaskEl)
    }
}