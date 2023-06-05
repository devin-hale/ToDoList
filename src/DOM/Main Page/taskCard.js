import expandTask from "./taskExpand";
import editTaskName from "./editTaskName";
import { Project } from "../../LOGIC/projects";

const renderTasks = (projTask) => {
    let taskView = document.getElementById('taskContainer');

    let editFlag;
    let enterKeyPressed = false;

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

    //Task Name Editor
    let taskNameEdit = document.createElement('i');
    taskNameEdit.classList = 'fa-solid fa-square-pen taskNameEdit';
    taskDHeader.appendChild(taskNameEdit);

        taskNameEdit.addEventListener('click', clickE => {
            editTaskName(editFlag, enterKeyPressed, taskCard_Name, taskDHeader, projTask);
        })

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
    taskPrio.id = `task=${projTask.tID}`;
    taskPrio.classList = 'fa-solid fa-circle taskPrio';
    taskDHeader.appendChild(taskPrio);

    //Complete
    let completeTask = document.createElement('i');
    completeTask.classList = 'fa-solid fa-circle-check completeTask';
    taskDHeader.appendChild(completeTask);

    completeTask.addEventListener('click', a => {
        projTask.completed = true;
        a.target.parentNode.parentNode.remove();
        const localPData = JSON.stringify(Project.getPLib());
        localStorage.setItem('localProjectData', localPData);
    })


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