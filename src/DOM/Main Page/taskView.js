import renderTasks from "./taskCard";

const taskViewRender = (loadedProj) => {
    let mainView = document.getElementById('mainView');

    let taskView = document.createElement('div');
    taskView.id = 'taskView';
    
    //Project Name/Header
    let projectHeader = document.createElement('p')
    projectHeader.classList = 'projectHText';
    projectHeader.innerHTML = `${loadedProj.pName}`;
    taskView.appendChild(projectHeader);

    //Task Container
    let taskContainer = document.createElement('div');
    taskContainer.id = 'taskContainer';
    taskView.appendChild(taskContainer);

    mainView.appendChild(taskView);

    loadedProj.tasks.forEach(projTask => {
        renderTasks(projTask)
    });
};

export default taskViewRender;