import { navItemRender } from "../navMenu";
import { Project } from "../../LOGIC/projects";

const renderNewProject = () => {
    // Get index of passed object in the global array of projects.
    const projIndex = Project.getPLib().indexOf(object)
    console.log(projIndex);

    const sideMenu = document.getElementById('sideMenu');
    // If object exists, do render it.
    
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
    projectEdit.classList = 'fa-solid fa-square-pen';
    projectDiv.appendChild(projectEdit);

    //Append
    sideMenu.appendChild(projectDiv);
}