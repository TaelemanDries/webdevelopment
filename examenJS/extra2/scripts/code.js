let tasks = [
    { id: "task1", text: "Maak HTML structuur", status: "todo" },
    { id: "task2", text: "Style met CSS", status: "todo" },
    { id: "task3", text: "Implementeer drag-drop", status: "todo" }
];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
    }
};

const renderTasks = () => {
    document.querySelectorAll('.column').forEach(col => col.innerHTML =
        `<h2>${col.id.replace(/^\w/, c => c.toUpperCase())}</h2>`);

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.draggable = true;
        taskDiv.id = task.id;
        taskDiv.textContent = task.text;
        taskDiv.addEventListener("dragstart", handleDragStart);
        document.getElementById(task.status).appendChild(taskDiv);
    });
};

let draggedTaskId = null;

const handleDragStart = (e) => {
    draggedTaskId = e.target.id;
};

const handleDrop = (e, newStatus) => {
    const task = tasks.find(t => t.id === draggedTaskId);
    if (task) {
        task.status = newStatus;
        saveTasks();
        renderTasks();
    }
};

window.addEventListener("load", () => {
    loadTasks();
    renderTasks();
});