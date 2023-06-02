import { Project } from "../../LOGIC/projects";
import taskViewRender from "../Main Page/taskView";

const editProjectButton = (event) => {
    const Proj = Project.getPLib()[Project.getPLib().findIndex(a => a.pId == event.target.id)];
    console.log(Proj);
    const projectDiv = event.target.parentNode;

    let projectText = event.target.previousElementSibling;
    projectText.remove();
    event.target.remove();

    //Edit Icon
    let projectEdit = document.createElement('i');
    projectEdit.classList = 'fa-solid fa-square-pen';
    projectEdit.id = Proj.pId;
    projectEdit.addEventListener('click', a => 
        {if (a.target === projectEdit) {editProjectButton(a)}}
    )

    //Edit Input
    let projectInput = document.createElement('input');
    projectInput.type = 'text'
    projectInput.minLength = 1;
    projectInput.maxLength = 20;
    projectInput.classList = 'projectText pTextInput';
    projectInput.value = Proj.pName;

    let enterKeyPressed = false;

    //Listener to Change Name and Save on Enter or Click Out
    projectInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            if(projectInput.value.length < 1) {
                return
            }
            enterKeyPressed = true;
            const paragraph = document.createElement('p');
            projectDiv.appendChild(paragraph);
            paragraph.classList = 'projectText';
            paragraph.textContent = event.target.value;
            Proj.pName = event.target.value;
            event.target.remove();
            projectDiv.appendChild(projectEdit);
            const localPData = JSON.stringify(Project.getPLib());
            localStorage.setItem('localProjectData', localPData );
        }
    })

    projectInput.addEventListener('blur', event => {
        if (enterKeyPressed === true) {
            return
            }
        if(projectInput.value.length < 1) {
                return
        }
            const paragraph = document.createElement('p');
            projectDiv.appendChild(paragraph);
            paragraph.classList = 'projectText';
            paragraph.textContent = event.target.value;
            Proj.pName = event.target.value;
            event.target.remove();
            projectDiv.appendChild(projectEdit);
            enterKeyPressed = false;
            const localPData = JSON.stringify(Project.getPLib());
            localStorage.setItem('localProjectData', localPData );
        })

    

    projectDiv.appendChild(projectInput)
    projectInput.focus();
};

export default editProjectButton