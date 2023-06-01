import {Project} from '../LOGIC/projects.js';

const navRender = () => {
    const navIcon = document.getElementById('navIcon');

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


    document.getElementById('content').appendChild(sideMenu);

    navIcon.addEventListener('click', () => {
        sideMenu.style.width = "275px";
        sideMenu.style.boxShadow = '0px 0px 5px black'
    })

    navBack.addEventListener('click', () => {
        sideMenu.style.width = "0px";
        sideMenu.style.boxShadow = '0px 0px 0px'
    })
};

const navItemRender = () => {
    const pLibrary = Project.getPLib();
}

export {navRender, navItemRender};