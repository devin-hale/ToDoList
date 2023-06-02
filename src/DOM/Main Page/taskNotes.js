const renderTaskNotes = (expDetails, projTask) => {
    let taskNotesDiv = document.createElement('div');
    taskNotesDiv.classList = 'taskNotesDiv';

    let taskNotesText = document.createElement('p');
    taskNotesText.classList = 'taskNotesText'
    taskNotesText.innerHTML = 'Notes:'
    taskNotesDiv.appendChild(taskNotesText);

    let taskNotesInput = document.createElement('textarea');
    taskNotesInput.value = `${projTask.notes}`
    taskNotesInput.maxLength = '100';
    taskNotesInput.rows = 5

    taskNotesDiv.appendChild(taskNotesInput);
    
    expDetails.appendChild(taskNotesDiv);

    taskNotesInput.addEventListener('change', a => {projTask.notes = a.target.value; console.log(projTask)})
}

export default renderTaskNotes;