const navRender = () => {
    const navIcon = document.getElementById('navIcon');

    //Menu BKG
    let sideMenu = document.createElement('div');
    sideMenu.classList = 'sideMenu';



    navIcon.appendChild(sideMenu);

    navIcon.addEventListener('click', a => {
        sideMenu.style.width = "275px";
        sideMenu.style.boxShadow = '0px 0px 5px black'
    })
};

export default navRender;