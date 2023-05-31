
const renderHeader = () => {

//Grab main page
const mainDiv = document.getElementById('content');

//Make Header Container
let headerDiv = document.createElement('div')
headerDiv.classList = 'header';

// Menu Icon
let navMenu = document.createElement('i');
navMenu.classList = 'fa-solid fa-bars navIcon';
headerDiv.appendChild(navMenu);

//Make Header Text
let hDivText = document.createElement('p');
hDivText.innerHTML = 'To Do';
headerDiv.appendChild(hDivText);

//Github Icon
let hGHIcon = document.createElement('i');
hGHIcon.classList = 'fa-brands fa-square-github ghub';
headerDiv.appendChild(hGHIcon);

//Append Navbar
mainDiv.appendChild(headerDiv);


};

export default renderHeader;