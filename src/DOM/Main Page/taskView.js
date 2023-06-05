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
        const currentProj = Project.getPLib()[Project.getCurrentProject()-1];
        let newTask = currentProj.addTask('New Task', '', 'Low', '');
        renderTasks(currentProj.tasks[loadedProj.tasks.length-1]);
        const localPData = JSON.stringify(Project.getPLib());
        localStorage.setItem('localProjectData', localPData );
    })

    let deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'deleteProject';
    deleteProjectButton.type = 'button';
    deleteProjectButton.innerHTML = 'Delete Project';
    taskView.appendChild(deleteProjectButton);

    deleteProjectButton.addEventListener('click', () => {
        if (Project.getPLib().length == 1) {console.log('Cannot Delete Project when One Remains.'); return;}
        const currentProj = Project.getPLib().indexOf(Project.getPLib()[Project.getCurrentProject()-1]);
        document.getElementById('taskView').remove();
        document.getElementById(`${Project.getPLib()[Project.getCurrentProject()-1].pId}`).remove();
        Project.getPLib().splice(currentProj, 1);
        Project.currentProject = Project.getPLib()[0].pId;
        taskViewRender(Project.getPLib()[0]);
        const localPData = JSON.stringify(Project.getPLib());
        localStorage.setItem('localProjectData', localPData );
        localStorage.setItem('currentProject', Project.currentProject);

    })

};

export default taskViewRender;