import taskViewRender from "./taskView";

const renderMainView = (loadedProj) => {
    let page = document.getElementById('content');

    let mainView = document.createElement('div');
    mainView.id = 'mainView';
    
    page.appendChild(mainView);

    taskViewRender(loadedProj);
}

export default renderMainView;