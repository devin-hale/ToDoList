import renderTasks from "./taskCard";
import { Project } from "../../LOGIC/projects";

const taskViewRender = (loadedProj) => {
    let mainView = document.getElementById('mainView');

    let taskView = document.createElement('div');
    taskView.id = 'taskView';
    
    //Project Name/Header
    let projectHeader = document.createElement('p')
    projectHeader.classList = 'projectHText';
    projectHeader.id = loadedProj.pId;
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

    let addTaskButton = document.createElement('i');
    addTaskButton.id = 'addTask';
    addTaskButton.classList = 'fa-solid fa-circle-plus';
    taskView.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
        let newTask = loadedProj.addTask('New Task', '', 'Low', '');
        renderTasks(loadedProj.tasks[loadedProj.tasks.length-1]);
        const localPData = JSON.stringify(Project.getPLib());
        localStorage.setItem('localProjectData', localPData );
    })

};

export default taskViewRender;