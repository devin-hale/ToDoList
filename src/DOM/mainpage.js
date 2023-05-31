
const renderMainPage = () => {

//Grab main page
const mainDiv = document.getElementById('content');

//Make Header Container
let headerDiv = document.createElement('div')
headerDiv.classList = 'header';

//Make Header Text
let hDivText = document.createElement('p');
hDivText.innerHTML = 'To Do';
headerDiv.appendChild(hDivText);

//Github Icon
let hGHIcon = document.createElement('i');


};

export default renderMainPage;