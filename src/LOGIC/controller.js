import renderHeader from '../DOM/header';
import {Project} from './projects.js';
import {navRender, navItemRender, newProjectButton} from '../DOM/navMenu';
import renderMainView from '../DOM/Main Page/mainView';

const findLocal = () => {
    if (localStorage.getItem('localProjectData') && JSON.parse(localStorage.getItem('localProjectData')).length > 0) {
        console.log('Local data found.');
        return true;
    }

    console.log('No Local Data Found');
    return false;
}


const loadLocal = () => {
    const loadedLocal = JSON.parse(localStorage.getItem('localProjectData'));
    console.log(loadedLocal);
    loadedLocal.forEach(object => {
            let loadProj = new Project(object.pName);
            Project.pushPLib(loadProj);
            object.tasks.forEach(task => loadProj.addTask(task.taskName, task.date, task.priority, task.notes))
        })

    const loadedCurrentProject = JSON.parse(localStorage.getItem('currentProject'));
    console.log(loadedCurrentProject)
    Project.writeCurrentProject(loadedCurrentProject);



}

const initialRender = () => {
    if (findLocal()) {
        loadLocal();
        console.log(Project.getCurrentProject());
        renderHeader();
        navRender();
        let loadedProj = Project.getPLib()[Project.getCurrentProject()-1];
        Project.getPLib().forEach( object => navItemRender(object));
        newProjectButton(loadedProj);
        renderMainView(loadedProj);
        return
    }

    renderHeader();
    navRender();
    Project.pushPLib(new Project('New Project'))
    let loadedProj = Project.getPLib()[0]
    Project.getPLib().forEach( object => navItemRender(object));
    Project.currentProject = 1;
    newProjectButton(loadedProj);
    renderMainView(loadedProj);

    console.log(Project.getPLib());
    localStorage.setItem('localProjectData', JSON.stringify(Project.getPLib()));
    localStorage.setItem('pLibraryIndex', Project.pLibraryIndex);
    localStorage.setItem('currentProject', Project.getCurrentProject());
}

export default initialRender