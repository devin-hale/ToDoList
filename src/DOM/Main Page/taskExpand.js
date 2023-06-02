import renderPrioSelect from "./prioSelect";
import taskDueDate from "./taskDueDate";
import renderTaskNotes from "./taskNotes";

const expandTask = (event, projTask) => {
    let taskCardDiv = event.target.parentNode.parentNode;

    //Remove Expand Icon, Insert Minimize Icon
    let minimize = document.createElement('i');
    minimize.classList = 'fa-solid fa-caret-up minTask';
    event.target.parentNode.appendChild(minimize);

    event.target.remove();

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
}

export default expandTask;