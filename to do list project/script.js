// script.js

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var todoList = document.getElementById("todoList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)" class="todo-btn">Delete</button>';
        todoList.appendChild(li);

        taskInput.value = "";
    }
}

function removeTask(button) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}
