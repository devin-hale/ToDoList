const renderMainView = () => {
    let page = document.getElementById('conent');

    let mainView = document.createElement('div');
    mainView.id = 'mainView';
    
    page.appendChild(mainView);
}

export default renderMainView;