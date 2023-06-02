import './style.css';
import renderHeader from './DOM/header.js';
import {Project} from './LOGIC/projects.js';
import {navRender, navItemRender, newProjectButton} from './DOM/navMenu.js';
import renderMainView from './DOM/Main Page/mainView';

renderHeader();
navRender();

let loadedProj = new Project('Work')

Project.pushPLib(loadedProj)
Project.getPLib()[0].addTask('Do Work', '2023-02-06', 'Low', 'wacky')
Project.getPLib()[0].addTask('Do Work', '2023-07-06', 'High', 'wacky')
Project.getPLib()[0].addTask('Do Work', '2023-010-06', 'Mid', 'wacky')
Project.getPLib()[0].addTask('Do Work', '2023-05-07', 'Low', 'wacky')
console.log(Project.getPLib()[0])
navItemRender(Project.getPLib()[0]);
newProjectButton();
renderMainView(Project.getPLib()[0]);
