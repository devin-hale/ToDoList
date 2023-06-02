import expandTask from "./taskExpand";

const renderTasks = (projTask) => {
    let taskView = document.getElementById('taskContainer');

    //Div Card
    let taskCardDiv = document.createElement('div');
    taskCardDiv.classList = 'taskCard';

    let taskDHeader = document.createElement('div');
    taskDHeader.classList = 'taskDHeader';
    taskCardDiv.appendChild(taskDHeader);

    //Task Name
    let taskCard_Name = document.createElement('p');
    taskCard_Name.classList = 'taskName';
    taskCard_Name.innerHTML = `${projTask.taskName}`;
    taskDHeader.appendChild(taskCard_Name);

    //Priority
    let taskPrio = document.createElement('i');
    switch (projTask.priority) {
        case 'Low':
            taskPrio.style.color = '#a3e635';
            break;
        case 'Mid':
            taskPrio.style.color = '#fcd34d';
            break;
        case 'High':
            taskPrio.style.color = '#ef4444';
            break;
    }
    taskPrio.classList = 'fa-solid fa-circle taskPrio';
    taskDHeader.appendChild(taskPrio);

    //Expand
    let taskExpand = document.createElement('i');
    taskExpand.classList = 'fa-solid fa-caret-down taskExpand';
    taskDHeader.appendChild(taskExpand);

    taskExpand.addEventListener('click', (event) => {
        expandTask(event, projTask);
    })

    




    taskView.appendChild(taskCardDiv);

}

export default renderTasks;