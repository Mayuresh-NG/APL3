document.addEventListener('DOMContentLoaded', function () {
    const tasks = [
        { id: 1, title: 'Complete project proposal', description: 'Prepare and submit the project proposal by Friday.' },
        { id: 2, title: 'Meeting with team', description: 'Schedule a team meeting to discuss project details.' },
        // Add more tasks as needed
    ];

    const taskListContainer = document.getElementById('taskListContainer');
    const addTaskForm = document.getElementById('addTaskForm');
    const addTaskButton = document.getElementById('addTaskButton');
    const cancelTaskButton = document.getElementById('cancelTaskButton');
    const taskForm = document.getElementById('taskForm');
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescriptionInput = document.getElementById('taskDescription');

    function displayTasks() {
        const taskList = document.getElementById('taskList');

        taskList.innerHTML = '';

        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${task.title}</strong>: ${task.description}`;
            listItem.addEventListener('click', function () {
                showTaskDetails(task);
            });
            taskList.appendChild(listItem);
        });
    }

    function showTaskDetails(task) {
        window.location.href = `task-details.html#${task.id}`;
    }

    function toggleAddTaskForm() {
        taskListContainer.style.display = 'none';
        addTaskForm.style.display = 'block';
    }

    function toggleTaskList() {
        taskListContainer.style.display = 'block';
        addTaskForm.style.display = 'none';
    }

    addTaskButton.addEventListener('click', toggleAddTaskForm);
    cancelTaskButton.addEventListener('click', toggleTaskList);

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newTask = {
            id: tasks.length + 1,
            title: taskTitleInput.value,
            description: taskDescriptionInput.value
        };

        tasks.push(newTask);
        displayTasks();
        toggleTaskList();

        // Clear form inputs
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
    });

    displayTasks();
});
