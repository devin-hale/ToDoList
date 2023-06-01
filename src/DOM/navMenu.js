import {Project} from '../LOGIC/projects.js';
import renderNewProject from './ONCLICK/newProject.js';
import editProjectButton from './ONCLICK/editProject.js';

const navRender = () => {
    const navIcon = document.getElementById('navIcon');

    let sMenuOverlay = document.createElement('div');
    sMenuOverlay.classList = 'sMenuOverlay';

    //Menu BKG
    let sideMenu = document.createElement('div');
    sideMenu.classList = 'sideMenu';
    sideMenu.id = 'sideMenu';

    let navHeader = document.createElement('div');
    navHeader.classList = 'sideHeader';
    
        let navHText = document.createElement('p');
        navHText.id = 'navHText';
        navHText.innerHTML = 'Projects'
        navHeader.appendChild(navHText);

        let navBack = document.createElement('i');
        navBack.classList = 'fa-solid fa-x navBack';
        navBack.id = 'navBack'
        navHeader.appendChild(navBack);

    sideMenu.appendChild(navHeader);

    sMenuOverlay.appendChild(sideMenu);

    document.getElementById('content').appendChild(sMenuOverlay);

    navIcon.addEventListener('click', () => {
        sMenuOverlay.style.width = "100%"
        sideMenu.style.width = "275px";
        sideMenu.style.boxShadow = '0px 0px 5px black'
    });

    sMenuOverlay.addEventListener('click', a => {
        if (a.target === sMenuOverlay) {
            sMenuOverlay.style.width = "0px";
            sideMenu.style.width = "0px";
            sideMenu.style.boxShadow = '0px 0px 0px'
        }
    
    });

    navBack.addEventListener('click', () => {
        sMenuOverlay.style.width = "0px";
        sideMenu.style.width = "0px";
        sideMenu.style.boxShadow = '0px 0px 0px'
    });
};

const navItemRender = (object) => {
    // Get index of passed object in the global array of projects.
    const projIndex = Project.getPLib().indexOf(object)
    console.log(projIndex);


    const sideMenu = document.getElementById('sideMenu');
    // If object exists, do render it.
    if (projIndex !== -1) {
    
        //Div
        let projectDiv = document.createElement('div');
        projectDiv.classList = "sideItem";
        
        //Dot Marker
        let projectMarker = document.createElement('i');
        projectMarker.classList = 'fa-solid fa-circle';
        projectDiv.appendChild(projectMarker);

        //Project Name
        let projectText = document.createElement('p');
        projectText.classList = 'projectText';
        projectText.innerHTML = object.pName;
        projectDiv.appendChild(projectText)

        //Edit Icon
        let projectEdit = document.createElement('i');
        projectEdit.classList = 'fa-solid fa-square-pen edit';
        projectEdit.id = object.pId;
        projectDiv.appendChild(projectEdit);
        projectEdit.addEventListener('click', event => editProjectButton(event))


        //Append
        sideMenu.appendChild(projectDiv);
        return
    }

    let errorText = document.createElement('p');
    errorText.classList = 'errorText';
    errorText.style = 'color: red; font-family: sans serif'
    errorText.innerHTML = 'Error Displaying Projects'
    sideMenu.appendChild(errorText)
};

const newProjectButton = () => {
    const sideMenu = document.getElementById('sideMenu');

    let projectAddDiv = document.createElement('div');
    projectAddDiv.classList = "sideItem";
    projectAddDiv.id = 'projectAdd'
        
     //Dot Marker
    let projectMarker = document.createElement('i');
    projectMarker.classList = 'fa-solid fa-circle';
    projectAddDiv.appendChild(projectMarker);

    //Project Name
    let projectText = document.createElement('p');
    projectText.classList = 'projectText';
    projectText.innerHTML = 'New Project';
    projectAddDiv.appendChild(projectText)

    //Edit Icon
    let projectAdd = document.createElement('i');
    projectAdd.classList = 'fa-solid fa-plus';
    projectAddDiv.appendChild(projectAdd);

    //Append
    sideMenu.appendChild(projectAddDiv);

    projectAddDiv.addEventListener('click', () => {renderNewProject()});
}

export {navRender, navItemRender, newProjectButton};