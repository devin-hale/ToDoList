const renderTasks = (projTask) => {
    let taskView = document.getElementById('taskContainer');

    //Div Card
    let taskCardDiv = document.createElement('div');
    taskCardDiv.classList = 'taskCard';

    //Task Name
    let taskCard_Name = document.createElement('p');
    taskCard_Name.classList = 'taskName';
    taskCard_Name.innerHTML = `${projTask.taskName}`;
    taskCardDiv.appendChild(taskCard_Name);

    //Due Date
    let taskDate = document.createElement('p');
    taskDate.classList = 'taskDate';
    taskDate.innerHTML = `Due: ${projTask.date}`
    taskCardDiv.appendChild(taskDate);

    //Priority
    let taskPrio = document.createElement('p');
    taskPrio.classList = 'taskPrio';
    taskPrio.innerHTML = `${projTask.priority}`;
    taskCardDiv.appendChild(taskPrio);

    //Notes
    let taskNotes = document.createElement('p');
    taskNotes.classList = 'taskNotes';
    taskNotes.innerHTML = `Notes: ${projTask.notes}`;
    taskCardDiv.appendChild(taskNotes);



    taskView.appendChild(taskCardDiv);

}

export default renderTasks;