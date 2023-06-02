const expandTask = (event, projTask) => {
    let taskCardDiv = event.target.parentNode.parentNode;
    

    let minimize = document.createElement('i');
    minimize.classList = 'fa-solid fa-caret-up minTask';
    event.target.parentNode.appendChild(minimize);

    event.target.remove();

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


    let expDetails = document.createElement('div');
        expDetails.classList = 'expDetails';
        taskCardDiv.appendChild(expDetails);

        //Due Date
        let taskDate = document.createElement('p');
        taskDate.classList = 'taskDate';
        taskDate.innerHTML = `Due: ${projTask.date}`
        expDetails.appendChild(taskDate);

        //Priority
        let taskPrioSelect = document.createElement('p');
        taskPrioSelect.classList = 'taskPrioSelect';
        taskPrioSelect.innerHTML = `${projTask.priority}`;
        expDetails.appendChild(taskPrioSelect);

        //Notes
        let taskNotes = document.createElement('p');
        taskNotes.classList = 'taskNotes';
        taskNotes.innerHTML = `Notes: ${projTask.notes}`;
        expDetails.appendChild(taskNotes);
}

export default expandTask;