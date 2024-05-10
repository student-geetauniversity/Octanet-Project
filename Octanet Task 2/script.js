document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${taskText}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;
            taskList.appendChild(newRow);

            const deleteBtn = newRow.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function() {
                newRow.remove();
            });

            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    });
});
