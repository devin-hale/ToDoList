import { navItemRender } from "../navMenu";
import { Project } from "../../LOGIC/projects";

const renderNewProject = () => {
    let newProj = new Project('New Project');
    Project.pushPLib(newProj);
    console.log(Project.getPLib())

    const sideMenu = document.getElementById('sideMenu');
    
    let enterKeyPressed = false;

    //Div
    let projectDiv = document.createElement('div');
    projectDiv.classList = "sideItem";
        
    //Dot Marker
    let projectMarker = document.createElement('i');
    projectMarker.classList = 'fa-solid fa-circle';
    projectDiv.appendChild(projectMarker);

    //Project Name Box
    let projectText = document.createElement('input');
    projectText.type = 'text'
    projectText.classList = 'projectText';
    projectText.value = newProj.pName;
    projectDiv.appendChild(projectText)
        

    //Edit Icon
    let projectEdit = document.createElement('i');
    projectEdit.classList = 'fa-solid fa-square-pen';
    projectEdit.id = newProj.pId;
    projectDiv.appendChild(projectEdit);

    //Append
    sideMenu.appendChild(projectDiv);
    projectText.focus();

    //Listener to Change Name and Save on Enter or Click Out
    projectText.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            enterKeyPressed = true;
            const paragraph = document.createElement('p');
            projectDiv.appendChild(paragraph);
            paragraph.classList = 'projectText';
            paragraph.textContent = event.target.value;
            newProj.pName = event.target.value;
            event.target.remove();
            projectDiv.appendChild(projectEdit);
        }
    })

    projectText.addEventListener('blur', event => {
        if (enterKeyPressed === true) {
            return
            }
            const paragraph = document.createElement('p');
            projectDiv.appendChild(paragraph);
            paragraph.classList = 'projectText';
            paragraph.textContent = event.target.value;
            newProj.pName = event.target.value;
            event.target.remove();
            projectDiv.appendChild(projectEdit);
            enterKeyPressed = false;


    })
};

export default renderNewProject;