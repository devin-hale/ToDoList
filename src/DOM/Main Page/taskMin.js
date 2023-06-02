const minimizeTask = (event) => {
    event.target.parentNode.nextSibling.remove();

    let taskExpand = document.createElement('i');
    taskExpand.classList = 'fa-solid fa-caret-down taskExpand';
    taskDHeader.appendChild(taskExpand);

    taskExpand.addEventListener('click', (event) => {
        expandTask(event, projTask);
    })
}

export default minimizeTask;