

const editTaskName = (editFlag, enterKeyPressed, taskCard_Name, taskDHeader, projTask) =>  {
    if (!editFlag) {
            let nameEditInput = document.createElement('input');
            nameEditInput.type = 'text';
            nameEditInput.minLength = '1';
            nameEditInput.maxLength = '20';
            nameEditInput.classList = 'nameEditInput';
            nameEditInput.value = taskCard_Name.innerHTML;
            taskDHeader.insertBefore(nameEditInput, taskCard_Name);
            taskCard_Name.remove();
            nameEditInput.focus();
            editFlag = true;
            
            nameEditInput.addEventListener('keydown', eventE => {
                if (eventE.key === 'Enter') {
                    if(nameEditInput.value.length < 1) {
                        return
                    }
                    enterKeyPressed = true;
                    editFlag = false;
                    projTask.taskName = eventE.target.value;
                    taskCard_Name.innerHTML = eventE.target.value;
                    taskDHeader.insertBefore(taskCard_Name, nameEditInput);
                    nameEditInput.remove();
                    const localPData = JSON.stringify(Project.getPLib());
                    localStorage.setItem('localProjectData', localPData );


                }
            })

            nameEditInput.addEventListener('blur', eventB => {
                if (enterKeyPressed === true) {
                    return
                    }
                if(nameEditInput.value.length < 1) {
                        return
                }
                    projTask.taskName = eventB.target.value;
                    taskCard_Name.innerHTML = eventB.target.value;
                    taskDHeader.insertBefore(taskCard_Name, nameEditInput);
                    nameEditInput.remove();
                    enterKeyPressed = false;
                    const localPData = JSON.stringify(Project.getPLib());
                    localStorage.setItem('localProjectData', localPData );
                })

            
            }};

export default editTaskName;