import expandTask from "./taskExpand";
import renderPrioSelect from "./prioSelect";
import taskDueDate from "./taskDueDate";
import renderTaskNotes from "./taskNotes";
import { Project } from "../../LOGIC/projects";

const renderAddTaskButton = () => {

}


const renderAddTasks = (loadedProj) => {
    let taskView = document.getElementById('taskContainer');

    let newTask = loadedProj.addTask('New Task', '01-01-2023', 'Low', '');

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
    })

    let minimize = document.createElement('i');
    minimize.classList = 'fa-solid fa-caret-up minTask';
    taskDHeader.target.parentNode.appendChild(minimize);

    //Event listener that Minimizes, removes Expanded Div
    minimize.addEventListener('click', (a) => {
    
        let taskExpand = document.createElement('i');
        taskExpand.classList = 'fa-solid fa-caret-down taskExpand';
        a.target.parentNode.appendChild(taskExpand);

        a.target.parentNode.nextSibling.remove();
        a.target.remove();
    
        taskExpand.addEventListener('click', (b) => {
            expandTask(b, projTask);
        })
    });

    //Add Expanded Div Options
    let expDetails = document.createElement('div');
        expDetails.classList = 'expDetails';
        taskCardDiv.appendChild(expDetails);

        //Due Date
        taskDueDate(expDetails, projTask)

        //Priority
        renderPrioSelect(expDetails, projTask);

        //Notes
        renderTaskNotes(expDetails, projTask);
   






    taskView.appendChild(taskCardDiv);

}

export default renderAddTasks;