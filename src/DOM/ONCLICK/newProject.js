import { Project } from "../../LOGIC/projects";
import editProjectButton from "./editProject";
import taskViewRender from "../Main Page/taskView";

const renderNewProject = (object) => {
    let newProj = new Project('New Project');
    Project.pushPLib(newProj);
    const localPData = JSON.stringify(Project.getPLib());
    localStorage.setItem('localProjectData', localPData );

    const sideMenu = document.getElementById('sideMenu');
    
    let enterKeyPressed = false;

    //Div
    let projectDiv = document.createElement('div');
    projectDiv.classList = "sideItem";
    projectDiv.id = newProj.pId;

            projectDiv.addEventListener('click', ebent => {
                let targetProj = Project.getPLib()[ebent.target.id-1];
                if (object == targetProj) {console.log('Project the Same');return}
                document.getElementById('taskView').remove();
                taskViewRender(targetProj);
                var loadedObject = targetProj;

            })
        
    //Dot Marker
    let projectMarker = document.createElement('i');
    projectMarker.classList = 'fa-solid fa-circle';
    projectDiv.appendChild(projectMarker);

    //Project Name Box
    let projectText = document.createElement('input');
    projectText.type = 'text'
    projectText.minLength = 1;
    projectText.maxLength = 20;
    projectText.classList = 'projectText pTextInput';
    projectText.value = newProj.pName;
    projectDiv.appendChild(projectText)

    //Edit Icon
    let projectEdit = document.createElement('i');
    projectEdit.classList = 'fa-solid fa-square-pen';
    projectEdit.id = newProj.pId;
    projectEdit.addEventListener('click', a => 
    {if (a.target === projectEdit) {editProjectButton(a)}}
    )

    //Listener to Change Name and Save on Enter or Click Out
    projectText.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            if(projectText.value.length < 1) {
                return
            }
            enterKeyPressed = true;
            const paragraph = document.createElement('p');
            projectDiv.appendChild(paragraph);
            paragraph.classList = 'projectText';
            paragraph.textContent = event.target.value;
            newProj.pName = event.target.value;
            event.target.remove();
            projectDiv.appendChild(projectEdit);
            const localPData = JSON.stringify(Project.getPLib());
            localStorage.setItem('localProjectData', localPData );
        }
    })

    projectText.addEventListener('blur', event => {
        if (enterKeyPressed === true) {
            return
            }
        if(projectText.value.length < 1) {
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
            const localPData = JSON.stringify(Project.getPLib());
            localStorage.setItem('localProjectData', localPData );


    })
        

    //Append
    sideMenu.insertBefore(projectDiv, sideMenu.lastChild);
    projectText.focus();
};

export default renderNewProject;