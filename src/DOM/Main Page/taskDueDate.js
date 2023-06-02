const taskDueDate = (expDetails, projTask) => {


    let taskDateDiv = document.createElement('div');
    taskDateDiv.classList = 'taskDateDiv';

    let taskDateText = document.createElement('p');
    taskDateText.classList = 'taskDateText'
    taskDateText.innerHTML = 'Due:'
    taskDateDiv.appendChild(taskDateText);

    let taskDateInput = document.createElement('input');
    taskDateInput.type = 'date';
    taskDateInput.value = `${projTask.date}`
    taskDateDiv.appendChild(taskDateInput);
    
    expDetails.appendChild(taskDateDiv);

    taskDateInput.addEventListener('change', a => {projTask.date = a.target.value; console.log(projTask)})

}

export default taskDueDate;