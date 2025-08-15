function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Escribe una tarea primero");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = function () {
        this.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function (e) {
        e.stopPropagation();
        this.parentElement.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
